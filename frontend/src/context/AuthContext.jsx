import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { adminService } from '../services/adminService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const userToken = localStorage.getItem('userToken');
      const adminToken = localStorage.getItem('adminToken');

      if (userToken) {
        try {
          const profile = await authService.getProfile();
          setUser(profile);
        } catch (error) {
          console.error('Session expired or invalid user token', error);
          localStorage.removeItem('userToken');
          setUser(null);
        }
      }

      if (adminToken) {
        // Retrieve admin info stored in localStorage or fallback
        const adminInfo = localStorage.getItem('adminInfo');
        if (adminInfo) {
          try {
            setAdmin(JSON.parse(adminInfo));
          } catch (e) {
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminInfo');
          }
        }
      }

      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (phone, password) => {
    setLoading(true);
    try {
      const data = await authService.login(phone, password);
      localStorage.setItem('userToken', data.token);
      setUser({ _id: data._id, name: data.name, phone: data.phone });
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const loginOtp = async (phone, otp) => {
    setLoading(true);
    try {
      const data = await authService.loginOtp(phone, otp);
      localStorage.setItem('userToken', data.token);
      setUser({ _id: data._id, name: data.name, phone: data.phone });
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signup = async (name, phone, password, otp) => {
    setLoading(true);
    try {
      const data = await authService.register(name, phone, password, otp);
      localStorage.setItem('userToken', data.token);
      setUser({ _id: data._id, name: data.name, phone: data.phone });
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const loginWithToken = (data) => {
    localStorage.setItem('userToken', data.token);
    setUser({ _id: data._id, name: data.name, phone: data.phone });
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    setUser(null);
  };

  const loginAdmin = async (email, password) => {
    setLoading(true);
    try {
      const data = await adminService.login(email, password);
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('adminInfo', JSON.stringify({
        _id: data._id,
        name: data.name,
        email: data.email,
        role: data.role
      }));
      setAdmin({ _id: data._id, name: data.name, email: data.email, role: data.role });
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logoutAdmin = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    setAdmin(null);
  };

  const updateUserProfile = async (profileData) => {
    const updated = await authService.updateProfile(profileData);
    setUser(prev => ({ ...prev, ...updated }));
    return updated;
  };

  return (
    <AuthContext.Provider value={{
      user,
      admin,
      loading,
      login,
      loginOtp,
      signup,
      logout,
      loginWithToken,
      loginAdmin,
      logoutAdmin,
      updateUserProfile,
      isAuthenticated: !!user,
      isAdminAuthenticated: !!admin
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
