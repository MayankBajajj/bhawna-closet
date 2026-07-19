import React, { useState, useEffect, useRef } from 'react';
import { Lock, ArrowRight, AlertTriangle, Eye, EyeOff, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { request } from '../services/api';
import { auth } from '../config/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

export default function Login({ onSwitchToSignup, onLoginSuccess }) {
  const { login, loginOtp, loginWithToken } = useAuth();
  const recaptchaRef = useRef(null);
  
  // Views: 'login', 'forgot', 'reset'
  const [view, setView] = useState('login');
  
  // loginMode: 'password' or 'otp'
  const [loginMode, setLoginMode] = useState('password');
  
  // Standard Login State
  const [formData, setFormData] = useState({ phone: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Firebase Phone OTP Verification States (For OTP login or password reset)
  const [showOtpStep, setShowOtpStep] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [sendingOtp, setSendingOtp] = useState(false);
  const [phoneForOtp, setPhoneForOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    return () => {
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear();
        } catch (e) {
          console.error(e);
        }
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setupRecaptcha = () => {
    try {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
      if (!recaptchaRef.current) {
        throw new Error('reCAPTCHA container element not found');
      }
      window.recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaRef.current, {
        size: 'invisible',
        callback: () => {},
        'expired-callback': () => {
          setErrorMsg('reCAPTCHA expired. Please try sending OTP again.');
        }
      });
    } catch (err) {
      console.error('Error setting up reCAPTCHA verifier:', err);
      setErrorMsg('Failed to initialize security verification. Please reload the page.');
    }
  };

  // Helper to format phone to E.164
  const formatPhoneNumber = (ph) => {
    let formatted = ph.trim();
    if (!formatted.startsWith('+')) {
      if (formatted.length === 10) {
        formatted = `+91${formatted}`;
      } else {
        throw new Error('Please enter a valid 10-digit phone number or specify country code (e.g. +91XXXXXXXXXX)');
      }
    }
    return formatted;
  };

  // Send OTP for Login or Password Reset
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSendingOtp(true);

    try {
      const targetPhone = view === 'forgot' ? phoneForOtp : formData.phone;
      if (!targetPhone) {
        throw new Error('Please enter your phone number');
      }

      const formatted = formatPhoneNumber(targetPhone);
      setupRecaptcha();
      
      const confirmation = await signInWithPhoneNumber(auth, formatted, window.recaptchaVerifier);
      window.confirmationResult = confirmation;
      setShowOtpStep(true);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to send SMS verification code.');
    } finally {
      setSendingOtp(false);
    }
  };

  // Verify OTP and Login
  const handleVerifyOtpAndLogin = async (e) => {
    e.preventDefault();
    if (!otpCode || otpCode.length !== 6) {
      setErrorMsg('Please enter a valid 6-digit OTP code');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const confirmationResult = window.confirmationResult;
      const result = await confirmationResult.confirm(otpCode);
      const idToken = await result.user.getIdToken();

      // Login on backend via Firebase token verification
      await loginOtp(result.user.phoneNumber, idToken);
      
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'OTP verification failed. Invalid code.');
    } finally {
      setSubmitting(false);
    }
  };

  // Login via Password
  const handlePasswordLoginSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone || !formData.password) {
      setErrorMsg('Please fill in all fields');
      return;
    }
    
    setSubmitting(true);
    setErrorMsg('');
    
    try {
      await login(formData.phone, formData.password);
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      setErrorMsg(err.message || 'Invalid phone number or password');
    } finally {
      setSubmitting(false);
    }
  };

  // Verify OTP and Reset Password
  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    if (!otpCode || otpCode.length !== 6 || !newPassword) {
      setErrorMsg('Please complete all fields');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const confirmationResult = window.confirmationResult;
      const result = await confirmationResult.confirm(otpCode);
      const idToken = await result.user.getIdToken();

      // Reset password on backend using Firebase verification
      const response = await request('/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({
          phone: result.user.phoneNumber,
          newPassword,
          firebaseToken: idToken
        })
      });
      
      // Auto login after reset
      loginWithToken(response);
      
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'Password reset failed. Invalid verification code.');
    } finally {
      setSubmitting(false);
    }
  };

  const toggleLoginMode = () => {
    setLoginMode(prev => (prev === 'password' ? 'otp' : 'password'));
    setShowOtpStep(false);
    setOtpCode('');
    setErrorMsg('');
  };

  // RENDER 1: FORGOT PASSWORD REQUEST VIEW
  if (view === 'forgot') {
    return (
      <div className="login-card glass-card animate-fade-in">
        <div ref={recaptchaRef}></div>

        {!showOtpStep ? (
          <>
            <div className="login-header">
              <h2>Reset Password</h2>
              <p>Enter your registered phone number below, and we will send you a 6-digit OTP code to verify your identity.</p>
            </div>

            {errorMsg && (
              <div className="error-alert">
                <AlertTriangle size={18} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSendOtp} className="auth-form">
              <div className="form-field">
                <label htmlFor="forgot-phone">Phone Number</label>
                <div className="input-wrapper">
                  <Phone size={18} className="input-icon" />
                  <input
                    id="forgot-phone"
                    type="tel"
                    value={phoneForOtp}
                    onChange={(e) => setPhoneForOtp(e.target.value)}
                    placeholder="e.g. 9876543210"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-auth-submit" disabled={sendingOtp}>
                {sendingOtp ? 'Sending SMS OTP...' : 'Send Verification OTP'} <ArrowRight size={18} />
              </button>
            </form>

            <div className="auth-footer" style={{ marginTop: '2rem' }}>
              <button className="back-to-login-btn" onClick={() => { setView('login'); setErrorMsg(''); }}>
                Back to Log In
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="login-header">
              <h2>Verify Reset OTP</h2>
              <p>We have sent a 6-digit OTP code to <strong>{phoneForOtp}</strong>. Please enter the code and set your new password.</p>
            </div>

            {errorMsg && (
              <div className="error-alert">
                <AlertTriangle size={18} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleResetPasswordSubmit} className="auth-form">
              <div className="form-field">
                <label htmlFor="reset-otp">6-Digit OTP</label>
                <div className="input-wrapper">
                  <Lock size={18} className="input-icon" />
                  <input
                    id="reset-otp"
                    type="text"
                    maxLength={6}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').substring(0, 6))}
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

              <button type="submit" className="btn btn-primary btn-auth-submit" disabled={submitting}>
                {submitting ? 'Updating Password...' : 'Verify OTP & Reset Password'} <ArrowRight size={18} />
              </button>
            </form>

            <div className="auth-footer" style={{ marginTop: '2rem' }}>
              <button className="back-to-login-btn" onClick={() => { setView('login'); setErrorMsg(''); setShowOtpStep(false); }}>
                Cancel &amp; Log In
              </button>
            </div>
          </>
        )}
        <style>{styles}</style>
      </div>
    );
  }

  // RENDER 2: STANDARD LOGIN VIEW
  return (
    <div className="login-card glass-card animate-fade-in">
      
      {/* Invisible ReCAPTCHA Container */}
      <div ref={recaptchaRef}></div>

      <div className="login-header">
        <h2>Welcome Back</h2>
        <p>Login to your Bhawna Closet account using your phone number.</p>
      </div>

      {errorMsg && (
        <div className="error-alert">
          <AlertTriangle size={18} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* MODE A: LOGIN VIA PASSWORD */}
      {loginMode === 'password' ? (
        <form onSubmit={handlePasswordLoginSubmit} className="auth-form">
          <div className="form-field">
            <label htmlFor="login-phone">Phone Number</label>
            <div className="input-wrapper">
              <Phone size={18} className="input-icon" />
              <input
                id="login-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="10-digit number, e.g. 9876543210"
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
                onClick={() => { setView('forgot'); setErrorMsg(''); }}
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-auth-submit" disabled={submitting}>
            {submitting ? 'Logging In...' : 'Log In with Password'} <ArrowRight size={18} />
          </button>

          <button type="button" className="btn btn-outline" onClick={toggleLoginMode} style={{ width: '100%', borderRadius: '10px' }}>
            Login with SMS OTP
          </button>
        </form>
      ) : (
        /* MODE B: LOGIN VIA OTP */
        <>
          {!showOtpStep ? (
            <form onSubmit={handleSendOtp} className="auth-form">
              <div className="form-field">
                <label htmlFor="login-phone-otp">Phone Number</label>
                <div className="input-wrapper">
                  <Phone size={18} className="input-icon" />
                  <input
                    id="login-phone-otp"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit number, e.g. 9876543210"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-auth-submit" disabled={sendingOtp}>
                {sendingOtp ? 'Sending SMS OTP...' : 'Send Login OTP'} <ArrowRight size={18} />
              </button>

              <button type="button" className="btn btn-outline" onClick={toggleLoginMode} style={{ width: '100%', borderRadius: '10px' }}>
                Login with Password
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtpAndLogin} className="auth-form animate-fade-in">
              <div className="form-field">
                <label htmlFor="login-otp-code">6-Digit Verification Code</label>
                <div className="input-wrapper">
                  <Lock size={18} className="input-icon" />
                  <input
                    id="login-otp-code"
                    type="text"
                    maxLength={6}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').substring(0, 6))}
                    placeholder="e.g. 123456"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-auth-submit" disabled={submitting}>
                {submitting ? 'Verifying OTP...' : 'Verify & Log In'} <ArrowRight size={18} />
              </button>

              <div className="auth-footer" style={{ marginTop: '1rem' }}>
                <p>Didn't receive the SMS? <button onClick={handleSendOtp} disabled={sendingOtp} style={{ color: 'var(--primary-pink-dark)' }}>{sendingOtp ? 'Resending...' : 'Resend SMS'}</button></p>
                <button type="button" className="back-to-login-btn" style={{ marginTop: '0.85rem' }} onClick={() => { setShowOtpStep(false); setOtpCode(''); }}>
                  Change Phone Number
                </button>
              </div>
            </form>
          )}
        </>
      )}

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
    font-family: var(--font-serif);
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
