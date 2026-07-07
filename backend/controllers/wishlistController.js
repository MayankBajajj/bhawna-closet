import { getWishlistService, toggleWishlistService } from '../services/wishlistService.js';

export const getWishlist = async (req, res, next) => {
  try {
    const wishlist = await getWishlistService(req.user._id);
    res.json(wishlist);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const toggleWishlist = async (req, res, next) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ message: 'Product ID is required' });
    }
    const wishlist = await toggleWishlistService(req.user._id, productId);
    res.json(wishlist);
  } catch (error) {
    res.status(400);
    next(error);
  }
};
