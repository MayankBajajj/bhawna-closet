import Order from '../models/Order.js';
import WebhookLog from '../models/WebhookLog.js';
import { syncTrackingFromShiprocket } from '../services/shiprocketService.js';

// 1. Shiprocket Webhook (Real-time tracking updates)
export const shiprocketWebhook = async (req, res, next) => {
  try {
    const token = req.headers['x-api-key'];
    const webhookToken = process.env.SHIPROCKET_WEBHOOK_TOKEN;

    console.log('Shiprocket Webhook Headers:', req.headers);
    console.log('Shiprocket Webhook Body:', req.body);

    const tokenClean = token ? token.trim() : '';
    const webhookTokenClean = webhookToken ? webhookToken.trim() : '';

    if (!tokenClean || tokenClean !== webhookTokenClean) {
      console.warn('Unauthorized Shiprocket webhook callback attempt.');
      // Bypass token check for test pings (no order_id or empty payload) so verification saves successfully
      if (!req.body || Object.keys(req.body).length === 0 || req.body.event === 'test' || !req.body.order_id) {
        console.log('Bypassing verification check for Shiprocket test ping.');
        return res.status(200).send('OK');
      }
      return res.status(401).send('Unauthorized');
    }

    const payload = req.body;
    
    // Save to WebhookLog
    const log = await WebhookLog.create({
      provider: 'Shiprocket',
      event: payload.current_status || 'status_update',
      payload: payload
    });

    const localOrderId = payload.order_id;
    if (localOrderId) {
      const order = await Order.findById(localOrderId);
      if (order) {
        // Map updates
        order.trackingNumber = payload.awb || order.trackingNumber;
        order.courierName = payload.courier_name || order.courierName;
        order.trackingUrl = payload.tracking_url || order.trackingUrl;
        
        const shipStatus = payload.current_status ? payload.current_status.toLowerCase() : '';
        
        // Map Shiprocket statuses to our local Order statuses
        if (shipStatus === 'shipped' || shipStatus === 'dispatched') {
          order.status = 'Shipped';
        } else if (shipStatus === 'delivered') {
          order.status = 'Delivered';
          order.paymentStatus = 'Paid'; // If delivered, mark COD as paid!
        } else if (shipStatus === 'cancelled' || shipStatus === 'return') {
          order.status = 'Cancelled';
        } else if (shipStatus === 'pickup_scheduled' || shipStatus === 'pickup_generated') {
          order.status = 'Processing';
        }

        // Add to timeline
        order.timeline.push({
          status: payload.current_status || 'Update',
          note: `Carrier: ${payload.courier_name || 'N/A'}. Details: ${payload.etd || payload.current_status_id || 'Status updated.'}`
        });

        await order.save();
        log.processed = true;
        await log.save();
        console.log(`Order ${order._id} tracking status updated via Shiprocket webhook.`);
      }
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error('Shiprocket Webhook handling error:', error.message);
    res.status(500);
    next(error);
  }
};

// 2. Admin Manual Sync for Courier Tracking
export const syncOrderTracking = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await syncTrackingFromShiprocket(orderId);
    
    res.status(200).json({
      message: 'Tracking status synced successfully from Shiprocket!',
      order
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
