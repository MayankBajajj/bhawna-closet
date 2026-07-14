import crypto from 'crypto';
import Razorpay from 'razorpay';
import mongoose from 'mongoose';
import Payment from '../models/Payment.js';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import Cart from '../models/Cart.js';
import WebhookLog from '../models/WebhookLog.js';
import { syncOrderToShiprocket } from '../services/shiprocketService.js';

// Initialize Razorpay
const getRazorpayInstance = () => {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    throw new Error('Razorpay keys are not configured in environment variables');
  }
  return new Razorpay({ key_id: keyId, key_secret: keySecret });
};

// 1. Create Razorpay Order
export const createRazorpayOrder = async (req, res, next) => {
  try {
    const { items, totalAmount, shippingAddress } = req.body;
    const userId = req.user._id;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items in the order' });
    }

    if (!shippingAddress) {
      return res.status(400).json({ message: 'Shipping address is required' });
    }

    // Recalculate price on backend and check stock availability
    let calculatedAmount = 0;
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product || product.isDeleted) {
        return res.status(404).json({ message: `Product "${item.name || item.productId}" not found` });
      }

      // Check stock
      const sizeInfo = product.sizes.find(s => s.size === item.size);
      if (!sizeInfo || sizeInfo.stock < item.quantity) {
        return res.status(400).json({
          message: `Insufficient stock for product "${product.name}" in size "${item.size}". Only ${sizeInfo ? sizeInfo.stock : 0} items remaining.`
        });
      }

      calculatedAmount += (product.discountPrice || product.price) * item.quantity;
    }

    // Verify amount matches recalculated amount
    if (Math.abs(calculatedAmount - totalAmount) > 1) {
      return res.status(400).json({
        message: `Amount mismatch: Client sent ${totalAmount}, server calculated ${calculatedAmount}`
      });
    }

    const rzp = getRazorpayInstance();
    const rzpOrder = await rzp.orders.create({
      amount: calculatedAmount * 100, // Razorpay amount in paise
      currency: 'INR',
      receipt: `receipt_rzp_${Date.now()}`,
      notes: {
        shippingAddress,
        items: JSON.stringify(items.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
          size: item.size,
          color: item.color || ''
        })))
      }
    });

    // Create record in Payment model (Status: Created)
    await Payment.create({
      userId,
      razorpayOrderId: rzpOrder.id,
      amount: calculatedAmount,
      status: 'Created'
    });

    res.status(200).json({
      id: rzpOrder.id,
      amount: rzpOrder.amount,
      currency: rzpOrder.currency
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

// Reusable Transactional Order Finalizer
const finalizeOrderInTransaction = async (userId, razorpayOrderId, razorpayPaymentId, shippingAddress, items, totalAmount, paymentRefId) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    // 1. Idempotency Check: Verify if an order is already created for this razorpayOrderId
    const existingOrder = await Order.findOne({ razorpayOrderId }).session(session);
    if (existingOrder) {
      await session.commitTransaction();
      session.endSession();
      return { order: existingOrder, alreadyProcessed: true };
    }

    // 2. Atomic stock check and deduction
    for (const item of items) {
      const updatedProduct = await Product.findOneAndUpdate(
        { 
          _id: item.productId, 
          'sizes.size': item.size, 
          'sizes.stock': { $gte: item.quantity } 
        },
        { 
          $inc: { 'sizes.$.stock': -item.quantity } 
        },
        { session, new: true }
      );

      if (!updatedProduct) {
        throw new Error(`Insufficient stock for product in size ${item.size}`);
      }
    }

    // 3. Create the Order document
    const order = await Order.create([{
      userId,
      items: items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        size: item.size,
        color: item.color || ''
      })),
      totalAmount,
      shippingAddress,
      paymentMethod: 'Online',
      paymentStatus: 'Paid',
      status: 'Processing',
      razorpayOrderId,
      paymentReference: paymentRefId,
      timeline: [
        { status: 'Pending', note: 'Order initiated via online payment.' },
        { status: 'Paid', note: `Payment captured successfully. Transaction ID: ${razorpayPaymentId}` },
        { status: 'Processing', note: 'Inventory allocated. Order is preparing for shipment.' }
      ]
    }], { session });

    const createdOrder = order[0];

    // 4. Update the Payment document with order linkage
    await Payment.findByIdAndUpdate(paymentRefId, {
      $set: {
        orderId: createdOrder._id,
        status: 'Captured',
        razorpayPaymentId,
        verified: true,
        verifiedAt: new Date()
      }
    }, { session });

    // 5. Clear the user's cart
    await Cart.findOneAndUpdate({ userId }, { $set: { items: [] } }).session(session);

    await session.commitTransaction();
    session.endSession();

    return { order: createdOrder, alreadyProcessed: false };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

// 2. Verify Razorpay Payment (Frontend Callback)
export const verifyRazorpayPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, shippingDetails } = req.body;
    const userId = req.user._id;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ message: 'Missing payment signature verification details' });
    }

    // Verify signature
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    const hmac = crypto.createHmac('sha256', keySecret);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ message: 'Payment verification failed. Invalid signature.' });
    }

    // Retrieve corresponding Payment record
    const payment = await Payment.findOne({ razorpayOrderId: razorpay_order_id });
    if (!payment) {
      return res.status(404).json({ message: 'Payment reference record not found' });
    }

    // Execute order creation in database transaction
    const { order, alreadyProcessed } = await finalizeOrderInTransaction(
      userId,
      razorpay_order_id,
      razorpay_payment_id,
      shippingDetails.shippingAddress,
      shippingDetails.items,
      payment.amount,
      payment._id
    );

    // Trigger async Shiprocket sync in the background
    if (!alreadyProcessed) {
      syncOrderToShiprocket(order._id).catch(err => {
        console.error(`Background Shiprocket sync failed for order ${order._id}:`, err.message);
      });
    }

    res.status(201).json({
      message: 'Payment verified and order placed successfully!',
      order
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

// 3. Razorpay Webhook Endpoint
export const razorpayWebhook = async (req, res, next) => {
  try {
    const signature = req.headers['x-razorpay-signature'];
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!signature || !webhookSecret) {
      return res.status(400).send('Webhook secret or signature missing');
    }

    // Verify webhook signature using the saved raw body
    const shasum = crypto.createHmac('sha256', webhookSecret);
    shasum.update(req.rawBody);
    const digest = shasum.digest('hex');

    if (digest !== signature) {
      console.warn('Razorpay webhook signature mismatch.');
      return res.status(400).send('Invalid signature');
    }

    const eventData = req.body;
    
    // Save to WebhookLog
    const log = await WebhookLog.create({
      provider: 'Razorpay',
      event: eventData.event,
      payload: eventData
    });

    // Handle payment.captured or order.paid
    if (eventData.event === 'payment.captured' || eventData.event === 'order.paid') {
      const paymentEntity = eventData.payload.payment.entity;
      const razorpayOrderId = paymentEntity.order_id;
      const razorpayPaymentId = paymentEntity.id;

      // Find the corresponding payment record
      const payment = await Payment.findOne({ razorpayOrderId });
      
      if (payment && !payment.verified) {
        console.log(`Webhook triggering fallback finalization for Razorpay Order ${razorpayOrderId}`);
        
        // Find user cart to rebuild items since webhook has no req.user or shippingDetails in standard body
        // Note: Razorpay orders allow storing notes. If notes contains shippingDetails, we can parse it!
        // We will pass shippingDetails in notes during order creation!
        const notes = paymentEntity.notes || {};
        let items = [];
        let shippingAddress = '';

        if (notes.shippingAddress && notes.items) {
          shippingAddress = notes.shippingAddress;
          items = JSON.parse(notes.items);
        } else {
          // Fallback: search for cart items of this user
          const cart = await Cart.findOne({ userId: payment.userId }).populate('items.productId');
          if (cart && cart.items.length > 0) {
            shippingAddress = notes.fallbackAddress || 'In-store Pickup';
            items = cart.items.map(item => ({
              productId: item.productId._id,
              quantity: item.quantity,
              price: item.productId.discountPrice || item.productId.price,
              size: item.size,
              color: item.color || ''
            }));
          }
        }

        if (items.length > 0 && shippingAddress) {
          const { order } = await finalizeOrderInTransaction(
            payment.userId,
            razorpayOrderId,
            razorpayPaymentId,
            shippingAddress,
            items,
            payment.amount,
            payment._id
          );

          // Trigger async Shiprocket sync
          syncOrderToShiprocket(order._id).catch(err => {
            console.error(`Background Shiprocket sync failed for order ${order._id}:`, err.message);
          });

          log.processed = true;
          await log.save();
        } else {
          throw new Error('Could not retrieve items or shippingAddress to finalize order via webhook');
        }
      }
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error('Razorpay Webhook handling error:', error.message);
    res.status(500);
    next(error);
  }
};
