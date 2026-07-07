import React, { useState } from 'react';
import { Mail, Lock, ShieldAlert, ArrowRight, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AdminLogin({ onLoginSuccess }) {
  const { loginAdmin } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMsg('Please enter email and password');
      return;
    }
    
    setSubmitting(true);
    setErrorMsg('');
    
    try {
      await loginAdmin(formData.email, formData.password);
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      setErrorMsg(err.message || 'Invalid admin credentials');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-login-card glass-card animate-fade-in">
      <div className="admin-login-header">
        <ShieldAlert size={36} className="admin-shield-icon" />
        <h2>Admin Authentication</h2>
        <p>Bhawna Closet staff login only. Please provide your admin access credentials.</p>
      </div>

      {errorMsg && (
        <div className="error-alert">
          <AlertTriangle size={18} />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-field">
          <label htmlFor="admin-email">Admin Email</label>
          <div className="input-wrapper">
            <Mail size={18} className="input-icon" />
            <input
              id="admin-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="admin@bhawnacloset.com"
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="admin-password">Password</label>
          <div className="input-wrapper">
            <Lock size={18} className="input-icon" />
            <input
              id="admin-password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-auth-submit" disabled={submitting}>
          {submitting ? 'Authenticating...' : 'Enter Admin Panel'} <ArrowRight size={18} />
        </button>
      </form>

      <style>{`
        .admin-login-card {
          max-width: 460px;
          margin: 6rem auto;
          padding: 3rem;
          background: var(--dark-charcoal);
          color: var(--pure-white);
          border: 1px solid #343a40;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .admin-login-header {
          text-align: center;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .admin-shield-icon {
          color: var(--primary-pink);
          margin-bottom: 0.25rem;
        }
        .admin-login-header h2 {
          font-size: 2rem;
          color: var(--pure-white);
          margin: 0;
        }
        .admin-login-header p {
          font-size: 0.85rem;
          color: #adb5bd;
          line-height: 1.5;
        }
        
        .error-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #3a2223;
          color: #f8d7da;
          padding: 0.85rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid #4a1d1e;
          margin-bottom: 1.5rem;
        }
        
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-field label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #ced4da;
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 12px;
          color: #adb5bd;
        }
        .input-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.5rem;
          border: 1px solid #495057;
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          background: #212529;
          color: var(--pure-white);
          transition: all var(--transition-fast);
        }
        .input-wrapper input:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.2);
          background: #1a1e24;
        }
        
        .btn-auth-submit {
          width: 100%;
          padding: 0.85rem;
          border-radius: 10px;
          margin-top: 0.5rem;
        }
        
        @media (max-width: 576px) {
          .admin-login-card {
            padding: 2rem 1.5rem;
            margin: 3rem auto;
          }
        }
      `}</style>
    </div>
  );
}
