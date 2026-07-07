import express from 'express';
import { getCart, addToCart, updateQuantity, removeFromCart, mergeCart } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// All cart routes require user login
router.use(protect);

router.get('/', getCart);
router.post('/add', addToCart);
router.put('/update', updateQuantity);
router.post('/remove', removeFromCart); // we use POST or DELETE with body. Since some setups restrict body in DELETE, we can use POST /remove or standard DELETE. The controller uses body inputs. Let's make it DELETE and POST for flexibility. Let's register DELETE /remove
router.delete('/remove', removeFromCart);
router.post('/merge', mergeCart);

export default router;
