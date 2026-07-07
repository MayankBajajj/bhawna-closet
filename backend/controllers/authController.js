import { registerUser, loginUser } from '../services/userService.js';
import User from '../models/User.js';
import Otp from '../models/Otp.js';
import { sendEmail } from '../services/emailService.js';

export const sendOtpController = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Please provide an email address' });
    }
    
    // Check if user already exists
    const emailExists = await User.findOne({ email: email.toLowerCase() });
    if (emailExists) {
      return res.status(400).json({ message: 'Email is already registered' });
    }
    
    // Generate 6-digit numeric OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Save to DB (expires in 5 minutes)
    await Otp.findOneAndUpdate(
      { email: email.toLowerCase() },
      { otp, createdAt: Date.now() },
      { upsert: true, new: true }
    );
    
    // Send email
    const subject = 'Verify Your Bhawna Closet Account';
    const text = `Hello,

Thank you for choosing Bhawna Closet!

To complete your sign-up verification, please enter the following One-Time Password (OTP) in the verification box:

Verification Code: ${otp}

This OTP is valid for 5 minutes and should not be shared with anyone.

Best regards,
Bhawna Closet Team`;

    await sendEmail(email.toLowerCase(), subject, text);
    
    res.json({ message: 'OTP verification code sent to your email.' });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const { name, email, password, otp } = req.body;
    if (!name || !email || !password || !otp) {
      return res.status(400).json({ message: 'Please fill in all fields including the OTP' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }
    
    // Verify OTP
    const record = await Otp.findOne({ email: email.toLowerCase() });
    if (!record || record.otp !== otp) {
      return res.status(400).json({ message: 'Invalid or expired OTP code' });
    }
    
    // Success: Delete the OTP so it cannot be reused
    await Otp.deleteOne({ email: email.toLowerCase() });
    
    const result = await registerUser(name, email, password);
    res.status(201).json(result);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }
    const result = await loginUser(email, password);
    res.json(result);
  } catch (error) {
    res.status(401);
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
    
    if (req.body.email && req.body.email !== user.email) {
      const emailExists = await User.findOne({ email: req.body.email.toLowerCase() });
      if (emailExists) {
        return res.status(400).json({ message: 'Email is already in use' });
      }
      user.email = req.body.email;
    }
    
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email
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
