import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    enum: ['M', 'L', 'XL', 'XXL'],
    required: true
  },
  color: {
    type: String,
    default: ''
  }
}, { _id: false });

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  items: [orderItemSchema],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  paymentMethod: {
    type: String,
    enum: ['COD', 'Online'],
    default: 'COD'
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Failed', 'Refunded', 'Partially Refunded'],
    default: 'Pending'
  },
  razorpayOrderId: {
    type: String,
    default: '',
    index: true
  },
  paymentReference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment'
  },
  shiprocketOrderId: {
    type: String,
    default: '',
    unique: true,
    sparse: true,
    index: true
  },
  shiprocketShipmentId: {
    type: String,
    default: ''
  },
  shiprocketSyncStatus: {
    type: String,
    enum: ['Pending', 'Synced', 'Failed'],
    default: 'Pending'
  },
  shiprocketSyncAttempts: {
    type: Number,
    default: 0
  },
  trackingNumber: {
    type: String,
    default: ''
  },
  courierName: {
    type: String,
    default: ''
  },
  trackingUrl: {
    type: String,
    default: ''
  },
  timeline: [{
    status: {
      type: String,
      required: true
    },
    note: {
      type: String,
      default: ''
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  shippingAddress: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
