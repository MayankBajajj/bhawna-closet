import Order from '../models/Order.js';

let cachedToken = null;
let tokenExpiry = null;

const getShiprocketToken = async () => {
  const now = Date.now();
  if (cachedToken && tokenExpiry && now < tokenExpiry) {
    return cachedToken;
  }

  const email = process.env.SHIPROCKET_EMAIL;
  const password = process.env.SHIPROCKET_PASSWORD;

  if (!email || !password) {
    throw new Error('Shiprocket credentials are not configured in environment variables');
  }

  console.log('Authenticating with Shiprocket API...');
  const res = await fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Shiprocket Login failed: ${errText}`);
  }

  const data = await res.json();
  cachedToken = data.token;
  // Expire token cache slightly early (10 days is normal, let's cache for 9 days to be safe)
  tokenExpiry = now + 9 * 24 * 60 * 60 * 1000;
  return cachedToken;
};

// Helper to parse the formatted address string from the order
const parseAddressString = (addressStr) => {
  try {
    let name = "Bhawna Closet Customer";
    let phone = "9999999999";
    let street = addressStr;
    let city = "Gurgaon";
    let state = "Haryana";
    let pincode = "122018";

    const parts = addressStr.split(", Phone: ");
    if (parts.length > 1) {
      name = parts[0].trim();
      const phoneAndRest = parts[1].split(", Address: ");
      if (phoneAndRest.length > 1) {
        phone = phoneAndRest[0].trim();
        const addressDetails = phoneAndRest[1].split(" - ");
        if (addressDetails.length > 1) {
          pincode = addressDetails[addressDetails.length - 1].trim();
          const rest = addressDetails.slice(0, -1).join(" - ");
          const restParts = rest.split(",");
          if (restParts.length > 1) {
            state = restParts[restParts.length - 1].trim();
            city = restParts[restParts.length - 2].trim();
            street = restParts.slice(0, -2).join(",").trim();
          } else {
            street = rest.trim();
          }
        } else {
          street = phoneAndRest[1].trim();
        }
      }
    }
    return { name, phone, street, city, state, pincode };
  } catch (err) {
    console.error('Error parsing address, using fallback:', err);
    return {
      name: "Customer",
      phone: "9999999999",
      street: addressStr,
      city: "Gurgaon",
      state: "Haryana",
      pincode: "122018"
    };
  }
};

// Creates an order in Shiprocket
export const syncOrderToShiprocket = async (orderId) => {
  try {
    const order = await Order.findById(orderId).populate('items.productId');
    if (!order) {
      throw new Error(`Order ${orderId} not found`);
    }

    if (order.shiprocketOrderId) {
      console.log(`Order ${orderId} is already synced to Shiprocket`);
      return order;
    }

    const token = await getShiprocketToken();
    const address = parseAddressString(order.shippingAddress);
    const pickupLocation = process.env.SHIPROCKET_PICKUP_LOCATION || "Bhawna Closet Gurgaon";

    const payload = {
      order_id: order._id.toString(),
      order_date: new Date(order.createdAt).toISOString().slice(0, 16).replace('T', ' '),
      pickup_location: pickupLocation,
      billing_customer_name: address.name.split(' ')[0] || 'Customer',
      billing_last_name: address.name.split(' ').slice(1).join(' ') || '',
      billing_address: address.street,
      billing_city: address.city,
      billing_pincode: address.pincode,
      billing_state: address.state,
      billing_country: "India",
      billing_email: order.userId.email || "bhawnacloset.customer@gmail.com",
      billing_phone: address.phone,
      shipping_is_billing: true,
      shipping_customer_name: address.name.split(' ')[0] || 'Customer',
      shipping_last_name: address.name.split(' ').slice(1).join(' ') || '',
      shipping_address: address.street,
      shipping_city: address.city,
      shipping_pincode: address.pincode,
      shipping_state: address.state,
      shipping_country: "India",
      shipping_email: order.userId.email || "bhawnacloset.customer@gmail.com",
      shipping_phone: address.phone,
      order_items: order.items.map(item => ({
        name: item.productId.name,
        sku: item.productId.sku || `SKU-${item.productId._id.toString().slice(-6)}`,
        units: item.quantity,
        selling_price: item.price
      })),
      payment_method: order.paymentMethod === 'COD' ? 'COD' : 'Prepaid',
      sub_total: order.totalAmount,
      length: 10,
      width: 10,
      height: 10,
      weight: 0.5
    };

    console.log('Shiprocket API Payload:', JSON.stringify(payload, null, 2));
    console.log(`Sending order ${order._id} to Shiprocket...`);
    const res = await fetch('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Shiprocket API error: ${errText}`);
    }

    const data = await res.json();
    
    order.shiprocketOrderId = data.order_id;
    order.shiprocketShipmentId = data.shipment_id;
    order.shiprocketSyncStatus = 'Synced';
    
    order.timeline.push({
      status: 'ShippedSync',
      note: `Order successfully registered in Shiprocket. Shipment ID: ${data.shipment_id}`
    });

    await order.save();
    console.log(`Order ${order._id} successfully synced to Shiprocket.`);
    return order;
  } catch (error) {
    console.error(`Failed to sync order ${orderId} to Shiprocket:`, error.message);
    
    // Update attempts and status
    await Order.findByIdAndUpdate(orderId, {
      $set: { shiprocketSyncStatus: 'Failed' },
      $inc: { shiprocketSyncAttempts: 1 },
      $push: {
        timeline: {
          status: 'ShippedSyncFailed',
          note: `Sync attempt failed: ${error.message}`
        }
      }
    });

    throw error;
  }
};

// Manually sync tracking details from Shiprocket
export const syncTrackingFromShiprocket = async (orderId) => {
  const order = await Order.findById(orderId);
  if (!order) throw new Error('Order not found');
  if (!order.shiprocketShipmentId) throw new Error('No Shiprocket shipment associated with this order');

  const token = await getShiprocketToken();
  console.log(`Syncing tracking status for shipment ${order.shiprocketShipmentId}...`);

  const res = await fetch(`https://apiv2.shiprocket.in/v1/external/courier/track/shipment/${order.shiprocketShipmentId}`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Shiprocket Tracking failed: ${errText}`);
  }

  const data = await res.json();
  const track = data.tracking_data;
  
  if (track && track.track_status === 1) {
    const shipment = track.shipment_track[0];
    if (shipment) {
      order.trackingNumber = shipment.awb_code || '';
      order.courierName = shipment.courier_name || '';
      order.trackingUrl = shipment.track_url || '';
      
      const newStatus = shipment.current_status;
      if (newStatus) {
        order.timeline.push({
          status: 'TrackingSync',
          note: `Shipment Status: ${newStatus}. Location: ${shipment.current_location || 'N/A'}`
        });
      }
      await order.save();
    }
  }
  return order;
};

// Background retry loop for pending/failed syncs
export const startShiprocketSyncRetryLoop = () => {
  // Check every 30 minutes
  setInterval(async () => {
    console.log('Running background Shiprocket retry loop...');
    try {
      const orders = await Order.find({
        shiprocketSyncStatus: { $in: ['Pending', 'Failed'] },
        shiprocketSyncAttempts: { $lt: 5 },
        status: { $in: ['Processing', 'Shipped'] }
      });

      console.log(`Found ${orders.length} orders pending sync to Shiprocket.`);
      for (const order of orders) {
        try {
          await syncOrderToShiprocket(order._id);
        } catch (err) {
          // ignore error inside loop to process next order
        }
      }
    } catch (err) {
      console.error('Shiprocket Background Sync Cron error:', err.message);
    }
  }, 30 * 60 * 1000); // 30 mins
};
