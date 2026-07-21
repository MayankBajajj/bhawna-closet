import { request } from './api';

export const authService = {
  sendOtp: async (phone) => {
    return await request('/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify({ phone })
    });
  },

  login: async (phone, password) => {
    return await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ phone, password })
    });
  },

  loginOtp: async (phone, otp) => {
    return await request('/auth/login-otp', {
      method: 'POST',
      body: JSON.stringify({ phone, otp })
    });
  },

  register: async (name, phone, password, otp) => {
    return await request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, phone, password, otp })
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
