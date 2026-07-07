import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export const getCartService = async (userId) => {
  let cart = await Cart.findOne({ userId }).populate({
    path: 'items.productId',
    select: 'name price discountPrice image images sizes slug sku isDeleted'
  });
  
  if (!cart) {
    cart = await Cart.create({ userId, items: [] });
  }
  
  // Filter out items of products that are soft-deleted
  const activeItems = cart.items.filter(item => item.productId && !item.productId.isDeleted);
  if (activeItems.length !== cart.items.length) {
    cart.items = activeItems;
    await cart.save();
  }
  
  return cart;
};

export const addToCartService = async (userId, { productId, quantity, size, color }) => {
  const product = await Product.findOne({ _id: productId, isDeleted: { $ne: true } });
  if (!product) {
    throw new Error('Product not found or unavailable');
  }

  // Validate size stock
  const sizeOption = product.sizes.find(s => s.size === size);
  if (!sizeOption) {
    throw new Error(`Size ${size} is not available for this product`);
  }

  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }

  // Find existing item with same product ID and size
  const existingItemIndex = cart.items.findIndex(
    item => item.productId.toString() === productId && item.size === size
  );

  const currentCartQty = existingItemIndex > -1 ? cart.items[existingItemIndex].quantity : 0;
  const newTotalQty = currentCartQty + quantity;

  if (sizeOption.stock < newTotalQty) {
    throw new Error(`Insufficient stock. Only ${sizeOption.stock} items available in size ${size}`);
  }

  if (existingItemIndex > -1) {
    cart.items[existingItemIndex].quantity = newTotalQty;
  } else {
    cart.items.push({ productId, quantity, size, color });
  }

  await cart.save();
  return await getCartService(userId);
};

export const updateQuantityService = async (userId, { productId, size, quantity }) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) {
    throw new Error('Cart not found');
  }

  const itemIndex = cart.items.findIndex(
    item => item.productId.toString() === productId && item.size === size
  );

  if (itemIndex === -1) {
    throw new Error('Item not found in cart');
  }

  const product = await Product.findOne({ _id: productId, isDeleted: { $ne: true } });
  if (!product) {
    throw new Error('Product is currently unavailable');
  }

  const sizeOption = product.sizes.find(s => s.size === size);
  if (!sizeOption) {
    throw new Error(`Size ${size} is not available for this product`);
  }

  if (sizeOption.stock < quantity) {
    throw new Error(`Insufficient stock. Only ${sizeOption.stock} items available in size ${size}`);
  }

  cart.items[itemIndex].quantity = quantity;
  await cart.save();
  return await getCartService(userId);
};

export const removeFromCartService = async (userId, { productId, size }) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) {
    throw new Error('Cart not found');
  }

  cart.items = cart.items.filter(
    item => !(item.productId.toString() === productId && item.size === size)
  );

  await cart.save();
  return await getCartService(userId);
};

export const mergeCartService = async (userId, guestItems) => {
  if (!Array.isArray(guestItems) || guestItems.length === 0) {
    return await getCartService(userId);
  }

  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }

  for (const guestItem of guestItems) {
    const { productId, quantity, size, color } = guestItem;
    
    // Check product availability
    const product = await Product.findOne({ _id: productId, isDeleted: { $ne: true } });
    if (!product) continue;

    const sizeOption = product.sizes.find(s => s.size === size);
    if (!sizeOption) continue;

    // Find existing item in user cart
    const userItemIndex = cart.items.findIndex(
      item => item.productId.toString() === productId && item.size === size
    );

    const userCartQty = userItemIndex > -1 ? cart.items[userItemIndex].quantity : 0;
    const mergedQty = userCartQty + quantity;

    // Cap at available stock
    const finalQty = Math.min(mergedQty, sizeOption.stock);

    if (finalQty > 0) {
      if (userItemIndex > -1) {
        cart.items[userItemIndex].quantity = finalQty;
      } else {
        cart.items.push({ productId, quantity: finalQty, size, color });
      }
    }
  }

  await cart.save();
  return await getCartService(userId);
};
