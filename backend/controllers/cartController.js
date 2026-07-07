import {
  getCartService,
  addToCartService,
  updateQuantityService,
  removeFromCartService,
  mergeCartService
} from '../services/cartService.js';

export const getCart = async (req, res, next) => {
  try {
    const cart = await getCartService(req.user._id);
    res.json(cart);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity, size, color } = req.body;
    if (!productId || !quantity || !size) {
      return res.status(400).json({ message: 'Product ID, quantity, and size are required' });
    }
    const cart = await addToCartService(req.user._id, { productId, quantity, size, color });
    res.json(cart);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const updateQuantity = async (req, res, next) => {
  try {
    const { productId, size, quantity } = req.body;
    if (!productId || !size || quantity === undefined) {
      return res.status(400).json({ message: 'Product ID, size, and quantity are required' });
    }
    const cart = await updateQuantityService(req.user._id, { productId, size, quantity });
    res.json(cart);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const removeFromCart = async (req, res, next) => {
  try {
    const { productId, size } = req.body;
    if (!productId || !size) {
      return res.status(400).json({ message: 'Product ID and size are required' });
    }
    const cart = await removeFromCartService(req.user._id, { productId, size });
    res.json(cart);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const mergeCart = async (req, res, next) => {
  try {
    const { items } = req.body;
    if (!Array.isArray(items)) {
      return res.status(400).json({ message: 'Items must be an array' });
    }
    const cart = await mergeCartService(req.user._id, items);
    res.json(cart);
  } catch (error) {
    res.status(400);
    next(error);
  }
};
