import { request } from './api';

export const cartService = {
  getCart: async () => {
    return await request('/cart', {
      method: 'GET'
    });
  },

  addToCart: async ({ productId, quantity, size, color }) => {
    return await request('/cart/add', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity, size, color })
    });
  },

  updateQuantity: async ({ productId, size, quantity }) => {
    return await request('/cart/update', {
      method: 'PUT',
      body: JSON.stringify({ productId, size, quantity })
    });
  },

  removeFromCart: async ({ productId, size }) => {
    return await request('/cart/remove', {
      method: 'DELETE',
      body: JSON.stringify({ productId, size })
    });
  },

  mergeCart: async (items) => {
    return await request('/cart/merge', {
      method: 'POST',
      body: JSON.stringify({ items })
    });
  }
};
