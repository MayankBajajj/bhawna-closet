import Wishlist from '../models/Wishlist.js';
import Product from '../models/Product.js';

export const getWishlistService = async (userId) => {
  let wishlist = await Wishlist.findOne({ userId }).populate({
    path: 'products',
    match: { isDeleted: { $ne: true } },
    select: 'name price discountPrice image images sizes slug sku'
  });

  if (!wishlist) {
    wishlist = await Wishlist.create({ userId, products: [] });
  }

  return wishlist;
};

export const toggleWishlistService = async (userId, productId) => {
  const product = await Product.findOne({ _id: productId, isDeleted: { $ne: true } });
  if (!product) {
    throw new Error('Product not found or unavailable');
  }

  let wishlist = await Wishlist.findOne({ userId });
  if (!wishlist) {
    wishlist = new Wishlist({ userId, products: [] });
  }

  const itemIndex = wishlist.products.indexOf(productId);
  if (itemIndex > -1) {
    wishlist.products.splice(itemIndex, 1);
  } else {
    wishlist.products.push(productId);
  }

  await wishlist.save();
  return await getWishlistService(userId);
};
