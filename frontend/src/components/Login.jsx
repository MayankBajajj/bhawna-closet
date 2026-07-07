import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login({ onSwitchToSignup, onLoginSuccess }) {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMsg('Please fill in all fields');
      return;
    }
    
    setSubmitting(true);
    setErrorMsg('');
    
    try {
      await login(formData.email, formData.password);
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      setErrorMsg(err.message || 'Invalid email or password');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-card glass-card animate-fade-in">
      <div className="login-header">
        <h2>Welcome Back</h2>
        <p>Login to your Bhawna Closet account to access your cart, wishlist, and profile.</p>
      </div>

      {errorMsg && (
        <div className="error-alert">
          <AlertTriangle size={18} />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-field">
          <label htmlFor="login-email">Email Address</label>
          <div className="input-wrapper">
            <Mail size={18} className="input-icon" />
            <input
              id="login-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@gmail.com"
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="login-password">Password</label>
          <div className="input-wrapper">
            <Lock size={18} className="input-icon" />
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-auth-submit" disabled={submitting}>
          {submitting ? 'Logging In...' : 'Log In'} <ArrowRight size={18} />
        </button>
      </form>

      <div className="auth-footer">
        <p>Don't have an account? <button onClick={onSwitchToSignup}>Sign Up</button></p>
      </div>

      <style>{`
        .login-card {
          max-width: 450px;
          margin: 4rem auto;
          padding: 3rem;
          background: var(--pure-white);
        }
        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .login-header h2 {
          font-size: 2.2rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }
        .login-header p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        
        .error-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #fff3cd;
          color: #856404;
          padding: 0.85rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid #ffeeba;
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
          color: var(--dark-charcoal);
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
        }
        .input-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.5rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .input-wrapper input:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
          background: var(--cream-white);
        }
        
        .password-toggle-btn {
          position: absolute;
          right: 12px;
          color: var(--text-muted);
          padding: 4px;
        }
        .password-toggle-btn:hover {
          color: var(--primary-pink);
        }
        
        .btn-auth-submit {
          width: 100%;
          padding: 0.85rem;
          border-radius: 10px;
          margin-top: 0.5rem;
        }
        
        .auth-footer {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .auth-footer button {
          color: var(--primary-pink-dark);
          font-weight: 600;
        }
        .auth-footer button:hover {
          color: var(--primary-pink-hover);
          text-decoration: underline;
        }
        
        @media (max-width: 576px) {
          .login-card {
            padding: 2rem 1.5rem;
            margin: 2rem auto;
          }
        }
      `}</style>
    </div>
  );
}
