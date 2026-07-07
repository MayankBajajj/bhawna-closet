import React, { useState } from 'react';
import { User, Mail, Lock, ArrowRight, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/authService';

export default function Signup({ onSwitchToLogin, onSignupSuccess }) {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // OTP Verification States
  const [showOtpStep, setShowOtpStep] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [sendingOtp, setSendingOtp] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Step 1: Send OTP code
  const handleSendOtp = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    
    if (!name || !email || !password || !confirmPassword) {
      setErrorMsg('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long');
      return;
    }

    setSendingOtp(true);
    setErrorMsg('');

    try {
      await authService.sendOtp(email);
      setShowOtpStep(true);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to send OTP verification email. Try a different address.');
    } finally {
      setSendingOtp(false);
    }
  };

  // Step 2: Verify OTP and Register user
  const handleVerifyAndSignup = async (e) => {
    e.preventDefault();
    if (!otpCode || otpCode.length !== 6) {
      setErrorMsg('Please enter a valid 6-digit OTP code');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      await signup(formData.name, formData.email, formData.password, otpCode);
      if (onSignupSuccess) {
        onSignupSuccess();
      }
    } catch (err) {
      setErrorMsg(err.message || 'Invalid or expired OTP code. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-card glass-card animate-fade-in" style={{ maxWidth: '480px' }}>
      
      {!showOtpStep ? (
        <>
          <div className="login-header">
            <h2>Create Account</h2>
            <p>Register to start shopping elegant, trend-aligned coordinates and dresses.</p>
          </div>

          {errorMsg && (
            <div className="error-alert">
              <AlertTriangle size={18} />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSendOtp} className="auth-form">
            <div className="form-field">
              <label htmlFor="signup-name">Full Name</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input
                  id="signup-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="signup-email">Email Address</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  id="signup-email"
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
              <label htmlFor="signup-password">Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Minimum 6 characters"
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

            <div className="form-field">
              <label htmlFor="signup-confirm-password">Confirm Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  id="signup-confirm-password"
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-auth-submit" disabled={sendingOtp}>
              {sendingOtp ? 'Sending verification code...' : 'Sign Up'} <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <button onClick={onSwitchToLogin}>Login</button></p>
          </div>
        </>
      ) : (
        <>
          <div className="login-header animate-fade-in">
            <h2>Enter Verification Code</h2>
            <p>We've sent a 6-digit verification code to <strong>{formData.email}</strong>. Enter it below to complete registration.</p>
          </div>

          {errorMsg && (
            <div className="error-alert animate-fade-in">
              <AlertTriangle size={18} />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleVerifyAndSignup} className="auth-form animate-fade-in">
            <div className="form-field">
              <label htmlFor="signup-otp">6-Digit Verification Code (OTP)</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  id="signup-otp"
                  type="text"
                  name="otp"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').substring(0, 6))}
                  placeholder="e.g. 123456"
                  maxLength={6}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-auth-submit" disabled={submitting}>
              {submitting ? 'Verifying...' : 'Verify & Create Account'} <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-footer animate-fade-in">
            <p>Didn't receive the email? <button onClick={handleSendOtp} disabled={sendingOtp} style={{ color: 'var(--primary-pink-dark)' }}>{sendingOtp ? 'Resending...' : 'Resend Code'}</button></p>
            <p style={{ marginTop: '0.85rem' }}>
              <button onClick={() => { setShowOtpStep(false); setErrorMsg(''); }} style={{ color: 'var(--text-muted)' }}>
                Edit Account Details
              </button>
            </p>
          </div>
        </>
      )}

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
          font-family: var(--font-serif);
        }
        .login-header p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
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
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
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
