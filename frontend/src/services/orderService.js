import { request } from './api';

export const orderService = {
  createOrder: async (orderData) => {
    return await request('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    }, false); // Set to false so it uses userToken instead of adminToken
  },

  getUserOrders: async () => {
    return await request('/orders', {
      method: 'GET'
    }, false); // Set to false so it uses userToken instead of adminToken
  }
};
