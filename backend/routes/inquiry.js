import express from 'express';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

// POST a new inquiry/order contact submission
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message, productId } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All fields (name, email, phone, message) are required.' });
    }

    const inquiryData = {
      name,
      email,
      phone,
      message
    };

    if (productId) {
      inquiryData.product = productId;
    }

    const inquiry = new Inquiry(inquiryData);
    await inquiry.save();

    res.status(201).json({ message: 'Thank you! Your inquiry has been submitted successfully.', inquiry });
  } catch (error) {
    res.status(500).json({ message: 'Server error processing inquiry', error: error.message });
  }
});

export default router;
