import express from 'express';
import { getWishlist, toggleWishlist } from '../controllers/wishlistController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Wishlist endpoints require authentication
router.use(protect);

router.get('/', getWishlist);
router.post('/toggle', toggleWishlist);

export default router;
