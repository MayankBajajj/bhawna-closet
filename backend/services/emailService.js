import nodemailer from 'nodemailer';
import dns from 'dns';
import Order from '../models/Order.js';
import Product from '../models/Product.js';

// Force Node to query Google Public DNS over IPv4 instead of broken local IPv6 router DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

export const sendEmail = async (to, subject, text) => {
  const isSmtpConfigured = 
    process.env.SMTP_HOST && 
    process.env.SMTP_USER && 
    process.env.SMTP_PASS;

  if (isSmtpConfigured) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: `"Bhawna Closet" <${process.env.SMTP_USER}>`,
        to,
        subject,
        text
      });
      console.log(`Email successfully sent to ${to}`);
    } catch (err) {
      console.error(`Failed to send email via SMTP to ${to}:`, err.message);
      // fallback printing to console if SMTP sending itself fails
      printConsoleFallback(to, subject, text);
    }
  } else {
    printConsoleFallback(to, subject, text);
  }
};

const printConsoleFallback = (to, subject, text) => {
  console.log('\n==========================================');
  console.log(`[DEVELOPMENT EMAIL SENDER FALLBACK]`);
  console.log(`TO: ${to}`);
  console.log(`SUBJECT: ${subject}`);
  console.log(`MESSAGE:\n${text}`);
  console.log('==========================================\n');
};

export const sendOrderNotificationToAdmin = async (order) => {
  try {
    const populatedOrder = await Order.findById(order._id).populate('items.productId');
    const adminEmail = process.env.ADMIN_EMAIL || 'bhawnacloset.in@gmail.com';
    const subject = `🛍️ New Order Placed: #${populatedOrder._id.toString().slice(-8).toUpperCase()}`;

    const itemsText = populatedOrder.items.map(item => {
      const name = item.productId ? item.productId.name : 'Unknown Product';
      return `- ${name} (${item.size}) x ${item.quantity} - ₹${item.price * item.quantity}`;
    }).join('\n');

    const text = `
Hello Admin,

A new order has been successfully placed on Bhawna Closet!

Order Details:
---------------------------------------------
Order ID: ${populatedOrder._id}
Payment Method: ${populatedOrder.paymentMethod}
Payment Status: ${populatedOrder.paymentStatus}
Total Amount: ₹${populatedOrder.totalAmount}
Online Paid Amount: ₹${populatedOrder.paymentMethod === 'Partial COD' ? '500 (Remaining balance COD)' : populatedOrder.totalAmount}

Customer Shipping Details:
---------------------------------------------
${populatedOrder.shippingAddress}

Items Ordered:
---------------------------------------------
${itemsText}

The order is currently in "Processing" status and has been queued/synced to Shiprocket. You can manage this order and track shipping updates in the Shiprocket dashboard or the Bhawna Closet Admin panel.

Warm regards,
Bhawna Closet System
`;

    await sendEmail(adminEmail, subject, text);
  } catch (err) {
    console.error('Failed to send admin order notification email:', err.message);
  }
};

export const sendOrderConfirmationToCustomer = async (order, customerEmail) => {
  try {
    if (!customerEmail) return;
    const populatedOrder = await Order.findById(order._id).populate('items.productId');
    const subject = `🎉 Order Confirmed! Bhawna Closet #${populatedOrder._id.toString().slice(-8).toUpperCase()}`;

    const itemsText = populatedOrder.items.map(item => {
      const name = item.productId ? item.productId.name : 'Outfit';
      return `- ${name} (${item.size}) x ${item.quantity}`;
    }).join('\n');

    const text = `
Dear Customer,

Thank you for shopping with Bhawna Closet! Your order has been successfully confirmed.

Order Summary:
---------------------------------------------
Order ID: #${populatedOrder._id.toString().slice(-8).toUpperCase()}
Payment Method: ${populatedOrder.paymentMethod}
Payment Status: ${populatedOrder.paymentStatus}
Total Amount: ₹${populatedOrder.totalAmount}
Paid Online: ₹${populatedOrder.paymentMethod === 'Partial COD' ? 500 : populatedOrder.totalAmount}
Remaining Cash on Delivery: ₹${populatedOrder.paymentMethod === 'Partial COD' ? Math.max(0, populatedOrder.totalAmount - 500) : 0}

Items Ordered:
---------------------------------------------
${itemsText}

Shipping Address:
---------------------------------------------
${populatedOrder.shippingAddress}

We are preparing your package for shipment. You will receive tracking updates once your order is dispatched.

With love,
Bhawna Closet
`;

    await sendEmail(customerEmail, subject, text);
  } catch (err) {
    console.error('Failed to send customer order confirmation email:', err.message);
  }
};
