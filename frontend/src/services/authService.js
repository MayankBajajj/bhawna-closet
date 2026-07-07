import { request } from './api';

export const authService = {
  login: async (email, password) => {
    return await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  },

  sendOtp: async (email) => {
    return await request('/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify({ email })
    });
  },

  register: async (name, email, password, otp) => {
    return await request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, otp })
    });
  },

  getProfile: async () => {
    return await request('/auth/profile', {
      method: 'GET'
    });
  },

  updateProfile: async (data) => {
    return await request('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },

  changePassword: async (currentPassword, newPassword) => {
    return await request('/auth/change-password', {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword })
    });
  }
};
