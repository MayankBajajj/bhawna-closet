import { request } from './api';

export const wishlistService = {
  getWishlist: async () => {
    return await request('/wishlist', {
      method: 'GET'
    });
  },

  toggleWishlist: async (productId) => {
    return await request('/wishlist/toggle', {
      method: 'POST',
      body: JSON.stringify({ productId })
    });
  }
};
