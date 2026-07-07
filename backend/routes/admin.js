import express from 'express';
import { 
  adminLogin, 
  getDashboardStats, 
  createProduct, 
  updateProduct, 
  deleteProduct,
  getOrders,
  updateOrderStatus
} from '../controllers/adminController.js';
import { protectAdmin } from '../middleware/adminMiddleware.js';
import { parser } from '../config/cloudinary.js';

const router = express.Router();

router.post('/login', adminLogin);
router.get('/stats', protectAdmin, getDashboardStats);

// Product management routes
router.post('/products', protectAdmin, parser.array('images', 4), createProduct);
router.put('/products/:id', protectAdmin, parser.array('images', 4), updateProduct);
router.delete('/products/:id', protectAdmin, deleteProduct);

// Order management routes
router.get('/orders', protectAdmin, getOrders);
router.put('/orders/:id/status', protectAdmin, updateOrderStatus);

export default router;
