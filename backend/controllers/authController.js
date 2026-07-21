import { registerUser, loginUser, generateToken } from '../services/userService.js';
import User from '../models/User.js';
import Otp from '../models/Otp.js';
import { sendSmsOtp } from '../services/smsService.js';

const normalizePhone = (phone) => {
  if (!phone || typeof phone !== 'string') return '';
  let cleaned = phone.trim();
  if (!cleaned.startsWith('+') && cleaned.length === 10) {
    cleaned = `+91${cleaned}`;
  }
  return cleaned;
};

// 1. Send SMS OTP controller
export const sendOtpController = async (req, res, next) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ message: 'Please provide a phone number' });
    }

    const formattedPhone = normalizePhone(phone);
    if (!formattedPhone || formattedPhone.length < 10) {
      return res.status(400).json({ message: 'Please enter a valid 10-digit phone number' });
    }

    // Generate 6-digit numeric OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save to DB (expires in 5 minutes)
    await Otp.findOneAndUpdate(
      { phone: formattedPhone },
      { otp, createdAt: Date.now() },
      { upsert: true, new: true }
    );

    // Send SMS via Gateway
    await sendSmsOtp(formattedPhone, otp);

    res.json({ message: 'Verification OTP sent to your phone number' });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// 2. Register user controller (verifies OTP)
export const register = async (req, res, next) => {
  try {
    const { name, phone, password, otp } = req.body;
    if (!name || !phone || !password || !otp) {
      return res.status(400).json({ message: 'Please fill in all fields including the OTP' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const formattedPhone = normalizePhone(phone);

    // Verify OTP code in DB
    const otpRecord = await Otp.findOne({ phone: formattedPhone });
    if (!otpRecord || otpRecord.otp !== otp.trim()) {
      return res.status(400).json({ message: 'Invalid or expired OTP code' });
    }

    const result = await registerUser(name, formattedPhone, password);

    // Delete OTP record after successful registration
    await Otp.deleteOne({ phone: formattedPhone });

    res.status(201).json(result);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// 3. Password login controller
export const login = async (req, res, next) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }
    
    const formattedPhone = normalizePhone(phone);
    const result = await loginUser(formattedPhone, password);
    res.json(result);
  } catch (error) {
    res.status(401);
    next(error);
  }
};

// 4. OTP login controller
export const loginOtp = async (req, res, next) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      return res.status(400).json({ message: 'Please provide phone number and OTP code' });
    }

    const formattedPhone = normalizePhone(phone);

    // Verify OTP in DB
    const otpRecord = await Otp.findOne({ phone: formattedPhone });
    if (!otpRecord || otpRecord.otp !== otp.trim()) {
      return res.status(400).json({ message: 'Invalid or expired OTP code' });
    }

    const user = await User.findOne({ phone: formattedPhone });
    if (!user) {
      return res.status(404).json({ message: 'Phone number is not registered. Please sign up first.' });
    }

    // Delete OTP record after successful login
    await Otp.deleteOne({ phone: formattedPhone });

    res.json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    user.name = req.body.name || user.name;
    
    if (req.body.phone && req.body.phone !== user.phone) {
      const formattedPhone = normalizePhone(req.body.phone);
      const phoneExists = await User.findOne({ phone: formattedPhone });
      if (phoneExists) {
        return res.status(400).json({ message: 'Phone number is already in use' });
      }
      user.phone = formattedPhone;
    }
    
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updatedUser.phone
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Please provide both current and new password' });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ message: 'New password must be at least 6 characters' });
    }
    
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect current password' });
    }
    
    user.password = newPassword;
    await user.save();
    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { phone, newPassword, otp } = req.body;
    if (!phone || !newPassword || !otp) {
      return res.status(400).json({ message: 'Please provide phone number, new password, and OTP code' });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const formattedPhone = normalizePhone(phone);

    // Verify OTP in DB
    const otpRecord = await Otp.findOne({ phone: formattedPhone });
    if (!otpRecord || otpRecord.otp !== otp.trim()) {
      return res.status(400).json({ message: 'Invalid or expired OTP code' });
    }

    const user = await User.findOne({ phone: formattedPhone });
    if (!user) {
      return res.status(404).json({ message: 'Phone number is not registered' });
    }

    user.password = newPassword;
    await user.save();

    // Delete OTP record
    await Otp.deleteOne({ phone: formattedPhone });

    res.json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};
