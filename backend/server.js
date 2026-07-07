import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';
import wishlistRoutes from './routes/wishlist.js';
import categoryRoutes from './routes/categories.js';
import inquiryRoutes from './routes/inquiry.js';
import orderRoutes from './routes/orders.js';

import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import Admin from './models/Admin.js';
import Category from './models/Category.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bhawna_closet';

// Production Security Middlewares (allow cross-origin resource sharing for local asset uploads)
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Configure Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150, // limit each IP to 150 requests per windowMs
  message: { message: 'Too many requests from this IP, please try again later.' }
});
app.use('/api/', limiter);

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());

// Serve static uploads for local testing fallback
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Register API Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/orders', orderRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Bhawna Closet API is running',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// 404 & Centralized Error Handler
app.use(notFound);
app.use(errorHandler);

// Helper function to seed default categories and admin user
const seedAdminAndCategories = async () => {
  try {
    // Seed default categories
    const defaultCategories = ['Coordsets', 'Dresses', 'Tops & Shirts', 'Bottoms'];
    for (const catName of defaultCategories) {
      const exists = await Category.findOne({ name: catName });
      if (!exists) {
        await Category.create({ name: catName });
        console.log(`Auto-seeded Category: ${catName}`);
      }
    }

    // Seed default admin account
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@bhawnacloset.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const exists = await Admin.findOne({ email: adminEmail.toLowerCase() });
    if (!exists) {
      await Admin.create({
        name: 'System Admin',
        email: adminEmail,
        password: adminPassword, // will be hashed automatically by adminSchema pre-save hook
        role: 'admin'
      });
      console.log(`Auto-seeded admin account: ${adminEmail}`);
    }
  } catch (err) {
    console.error('Error running startup auto-seeding:', err.message);
  }
};

// Database Connection & Server Startup
console.log('Connecting to MongoDB Atlas...');
mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Successfully connected to MongoDB.');
    // Run auto-seeding
    await seedAdminAndCategories();
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`MongoDB connection failed: ${err.message}`);
    process.exit(1);
  });
