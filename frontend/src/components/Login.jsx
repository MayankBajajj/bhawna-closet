import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { request } from '../services/api';

export default function Login({ onSwitchToSignup, onLoginSuccess }) {
  const { login, loginWithToken } = useAuth();
  
  // Views: 'login', 'forgot', 'otp'
  const [view, setView] = useState('login');
  
  // Standard Login State
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Forgot Password / OTP States
  const [forgotEmail, setForgotEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [submittingForgot, setSubmittingForgot] = useState(false);
  const [forgotError, setForgotError] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
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

  const handleForgotEmailSubmit = async (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      setForgotError('Please enter your email address');
      return;
    }

    setSubmittingForgot(true);
    setForgotError('');

    try {
      const response = await request('/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify({ email: forgotEmail })
      });
      setForgotSuccess(response.message || 'Verification OTP code sent to your email.');
      setView('otp');
    } catch (err) {
      setForgotError(err.message || 'Email address not registered');
    } finally {
      setSubmittingForgot(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    if (!otp || !newPassword) {
      setForgotError('Please enter the OTP and your new password');
      return;
    }
    if (newPassword.length < 6) {
      setForgotError('Password must be at least 6 characters');
      return;
    }

    setSubmittingForgot(true);
    setForgotError('');

    try {
      const data = await request('/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({
          email: forgotEmail,
          otp,
          newPassword
        })
      });
      
      // Auto login
      loginWithToken(data);
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      setForgotError(err.message || 'Failed to reset password. Invalid OTP code.');
    } finally {
      setSubmittingForgot(false);
    }
  };

  if (view === 'forgot') {
    return (
      <div className="login-card glass-card animate-fade-in">
        <div className="login-header">
          <h2>Forgot Password</h2>
          <p>Enter your registered email address below, and we will send you a 6-digit OTP code to verify your identity.</p>
        </div>

        {forgotError && (
          <div className="error-alert">
            <AlertTriangle size={18} />
            <span>{forgotError}</span>
          </div>
        )}

        <form onSubmit={handleForgotEmailSubmit} className="auth-form">
          <div className="form-field">
            <label htmlFor="forgot-email">Email Address</label>
            <div className="input-wrapper">
              <Mail size={18} className="input-icon" />
              <input
                id="forgot-email"
                type="email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                placeholder="name@gmail.com"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-auth-submit" disabled={submittingForgot}>
            {submittingForgot ? 'Verifying...' : 'Send Verification OTP'} <ArrowRight size={18} />
          </button>
        </form>

        <div className="auth-footer" style={{ marginTop: '2rem' }}>
          <button className="back-to-login-btn" onClick={() => { setView('login'); setForgotError(''); }}>
            Back to Log In
          </button>
        </div>
        <style>{styles}</style>
      </div>
    );
  }

  if (view === 'otp') {
    return (
      <div className="login-card glass-card animate-fade-in">
        <div className="login-header">
          <h2>Verify Reset OTP</h2>
          <p>We have sent a 6-digit OTP code to <strong>{forgotEmail}</strong>. Please enter the code and set your new password.</p>
        </div>

        {forgotSuccess && (
          <div className="success-alert">
            <span>{forgotSuccess}</span>
          </div>
        )}

        {forgotError && (
          <div className="error-alert">
            <AlertTriangle size={18} />
            <span>{forgotError}</span>
          </div>
        )}

        <form onSubmit={handleResetSubmit} className="auth-form">
          <div className="form-field">
            <label htmlFor="reset-otp">6-Digit OTP</label>
            <div className="input-wrapper">
              <Lock size={18} className="input-icon" />
              <input
                id="reset-otp"
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="e.g. 123456"
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="new-password">New Password</label>
            <div className="input-wrapper">
              <Lock size={18} className="input-icon" />
              <input
                id="new-password"
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-auth-submit" disabled={submittingForgot}>
            {submittingForgot ? 'Updating Password...' : 'Verify OTP & Reset Password'} <ArrowRight size={18} />
          </button>
        </form>

        <div className="auth-footer" style={{ marginTop: '2rem' }}>
          <button className="back-to-login-btn" onClick={() => { setView('login'); setForgotError(''); setForgotSuccess(''); }}>
            Cancel &amp; Log In
          </button>
        </div>
        <style>{styles}</style>
      </div>
    );
  }

  // Standard Login View
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

      <form onSubmit={handleLoginSubmit} className="auth-form">
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
          
          <div className="forgot-password-link-container">
            <button 
              type="button" 
              className="forgot-password-link" 
              onClick={() => { setView('forgot'); setErrorMsg(''); setForgotError(''); }}
            >
              Forgot Password?
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

      <style>{styles}</style>
    </div>
  );
}

const styles = `
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

  .success-alert {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #d4edda;
    color: #155724;
    padding: 0.85rem 1rem;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid #c3e6cb;
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

  .forgot-password-link-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.15rem;
  }
  .forgot-password-link {
    background: none;
    border: none;
    color: var(--primary-pink-dark);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    font-family: var(--font-sans);
  }
  .forgot-password-link:hover {
    color: var(--primary-pink-hover);
    text-decoration: underline;
  }

  .back-to-login-btn {
    background: none;
    border: none;
    color: var(--primary-pink-dark);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    font-family: var(--font-sans);
  }
  .back-to-login-btn:hover {
    color: var(--primary-pink-hover);
    text-decoration: underline;
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
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-sans);
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
`;
