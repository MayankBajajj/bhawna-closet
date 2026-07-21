import express from 'express';
import { register, login, loginOtp, sendOtpController, getProfile, updateProfile, changePassword, resetPassword } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/send-otp', sendOtpController);
router.post('/signup', register);
router.post('/login', login);
router.post('/login-otp', loginOtp);
router.post('/reset-password', resetPassword);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
router.put('/change-password', protect, changePassword);

export default router;
