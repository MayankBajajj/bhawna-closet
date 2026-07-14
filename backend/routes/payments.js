import express from 'express';
import { createRazorpayOrder, verifyRazorpayPayment, razorpayWebhook } from '../controllers/paymentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Customer facing routes
router.post('/razorpay/order', protect, createRazorpayOrder);
router.post('/razorpay/verify', protect, verifyRazorpayPayment);

// Razorpay webhook receiver (public)
router.post('/razorpay/webhook', razorpayWebhook);

export default router;
