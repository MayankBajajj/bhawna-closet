const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getHeaders = (isAdmin = false) => {
  const headers = {};
  const tokenKey = isAdmin ? 'adminToken' : 'userToken';
  const token = localStorage.getItem(tokenKey);
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

export const request = async (endpoint, options = {}, isAdmin = false) => {
  const url = `${API_URL}${endpoint}`;
  const defaultHeaders = getHeaders(isAdmin);
  
  let headers = { ...defaultHeaders, ...options.headers };
  
  // Do not set Content-Type if uploading FormData (so the browser appends boundary tags)
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const config = {
    ...options,
    headers
  };

  const response = await fetch(url, config);
  let data;
  try {
    data = await response.json();
  } catch (err) {
    data = { message: 'Failed to parse response' };
  }

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};
