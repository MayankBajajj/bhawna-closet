import { request } from './api';

export const adminService = {
  login: async (email, password) => {
    return await request('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  },

  getStats: async () => {
    return await request('/admin/stats', {
      method: 'GET'
    }, true);
  },

  createProduct: async (formData) => {
    return await request('/admin/products', {
      method: 'POST',
      body: formData
    }, true);
  },

  updateProduct: async (id, formData) => {
    return await request(`/admin/products/${id}`, {
      method: 'PUT',
      body: formData
    }, true);
  },

  deleteProduct: async (id) => {
    return await request(`/admin/products/${id}`, {
      method: 'DELETE'
    }, true);
  },

  getOrders: async () => {
    return await request('/admin/orders', {
      method: 'GET'
    }, true);
  },

  updateOrderStatus: async (id, status) => {
    return await request(`/admin/orders/${id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    }, true);
  }
};
