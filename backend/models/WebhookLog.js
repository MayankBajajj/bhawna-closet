import mongoose from 'mongoose';

const webhookLogSchema = new mongoose.Schema({
  provider: {
    type: String,
    enum: ['Razorpay', 'Shiprocket'],
    required: true
  },
  event: {
    type: String,
    required: true
  },
  payload: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  processed: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  }
}, { timestamps: true });

const WebhookLog = mongoose.model('WebhookLog', webhookLogSchema);
export default WebhookLog;
