import express from 'express';
import { shiprocketWebhook, syncOrderTracking } from '../controllers/shippingController.js';
import { protectAdmin } from '../middleware/adminMiddleware.js';

const router = express.Router();

// Webhook for Shiprocket status updates (public)
router.post('/delivery-updates', shiprocketWebhook);

// Admin manual tracking sync trigger
router.post('/orders/:id/sync', protectAdmin, syncOrderTracking);

export default router;
