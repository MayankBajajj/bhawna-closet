import React, { useState, useEffect } from 'react';
import { User, Lock, Edit3, Check, AlertTriangle, ListOrdered, KeyRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { orderService } from '../services/orderService';

export default function MyAccountPage() {
  const { user, updateUserProfile } = useAuth();
  
  // Profile edit states
  const [profileData, setProfileData] = useState({ name: user?.name || '', email: user?.email || '' });
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [profileError, setProfileError] = useState('');
  
  // Password change states
  const [passData, setPassData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [passSuccess, setPassSuccess] = useState(false);
  const [passError, setPassError] = useState('');
  const [submittingPassword, setSubmittingPassword] = useState(false);

  // Orders list states
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  // Fetch user orders on mount
  useEffect(() => {
    const fetchUserOrders = async () => {
      setLoadingOrders(true);
      try {
        const data = await orderService.getUserOrders();
        setOrders(data || []);
      } catch (err) {
        console.error('Error fetching user orders history:', err);
      } finally {
        setLoadingOrders(false);
      }
    };
    if (user) {
      fetchUserOrders();
    }
  }, [user]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handlePassChange = (e) => {
    const { name, value } = e.target;
    setPassData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setProfileError('');
    setProfileSuccess(false);
    
    try {
      await updateUserProfile(profileData);
      setProfileSuccess(true);
      setEditingProfile(false);
    } catch (err) {
      setProfileError(err.message || 'Failed to update profile');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPassError('');
    setPassSuccess(false);

    if (passData.newPassword !== passData.confirmPassword) {
      setPassError('New passwords do not match');
      return;
    }

    if (passData.newPassword.length < 6) {
      setPassError('New password must be at least 6 characters long');
      return;
    }

    setSubmittingPassword(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/change-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        },
        body: JSON.stringify({
          currentPassword: passData.currentPassword,
          newPassword: passData.newPassword
        })
      });
      const data = await response.json();
      if (response.ok) {
        setPassSuccess(true);
        setPassData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      } else {
        setPassError(data.message || 'Failed to change password');
      }
    } catch (err) {
      setPassError('Connection error changing password');
    } finally {
      setSubmittingPassword(false);
    }
  };

  return (
    <main className="profile-view section animate-fade-in">
      <div className="container">
        <div className="profile-banner glass-card">
          <h1>My Account</h1>
          <p>Manage your profile details, password, and track your boutique orders.</p>
        </div>

        <div className="profile-grid">
          {/* Left Column: Account Details & Settings */}
          <div className="profile-settings-col">
            
            {/* Profile Card */}
            <div className="profile-details-card glass-card">
              <div className="card-header">
                <h3>Profile Information</h3>
                {!editingProfile && (
                  <button className="edit-btn" onClick={() => setEditingProfile(true)}>
                    <Edit3 size={16} /> Edit Profile
                  </button>
                )}
              </div>

              {profileSuccess && (
                <div className="alert alert-success animate-fade-in">
                  <Check size={16} /> Profile updated successfully!
                </div>
              )}

              {profileError && (
                <div className="alert alert-danger animate-fade-in">
                  <AlertTriangle size={16} /> {profileError}
                </div>
              )}

              {editingProfile ? (
                <form onSubmit={handleUpdateProfile} className="profile-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleProfileChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      required
                    />
                  </div>
                  <div className="form-btns-row">
                    <button type="submit" className="btn btn-primary btn-save">
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline btn-cancel"
                      onClick={() => {
                        setEditingProfile(false);
                        setProfileData({ name: user?.name || '', email: user?.email || '' });
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="profile-info-display">
                  <div className="info-row">
                    <span className="info-label">Full Name</span>
                    <span className="info-val">{user?.name}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Email Address</span>
                    <span className="info-val">{user?.email}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Change Password Card */}
            <div className="profile-details-card glass-card" style={{ marginTop: '2rem' }}>
              <div className="card-header">
                <h3 className="card-title-icon">
                  <KeyRound size={20} className="icon-pink" /> Change Password
                </h3>
              </div>

              {passSuccess && (
                <div className="alert alert-success animate-fade-in">
                  <Check size={16} /> Password updated successfully!
                </div>
              )}

              {passError && (
                <div className="alert alert-danger animate-fade-in">
                  <AlertTriangle size={16} /> {passError}
                </div>
              )}

              <form onSubmit={handleChangePassword} className="profile-form">
                <div className="form-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={passData.currentPassword}
                    onChange={handlePassChange}
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={passData.newPassword}
                    onChange={handlePassChange}
                    placeholder="Minimum 6 characters"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passData.confirmPassword}
                    onChange={handlePassChange}
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-save" disabled={submittingPassword}>
                  {submittingPassword ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Order History */}
          <div className="profile-orders-col">
            <div className="profile-details-card glass-card h-full">
              <div className="card-header">
                <h3 className="card-title-icon">
                  <ListOrdered size={20} className="icon-pink" /> Order History
                </h3>
              </div>
              
              {loadingOrders ? (
                <div className="orders-loader"><div className="pink-loader"></div></div>
              ) : orders.length === 0 ? (
                <div className="orders-placeholder">
                  <div className="placeholder-circle">
                    <ListOrdered size={32} />
                  </div>
                  <h4>No Orders Placed Yet</h4>
                  <p>Your orders record is empty. Once you proceed to checkout and place orders, details will appear here.</p>
                </div>
              ) : (
                <div className="customer-orders-list">
                  {orders.map((order) => (
                    <div key={order._id} className="customer-order-card glass-card animate-fade-in">
                      <div className="order-card-header">
                        <div>
                          <span className="order-lbl">Order ID</span>
                          <span className="order-val-id">#{order._id.substring(order._id.length - 8)}</span>
                        </div>
                        <div>
                          <span className="order-lbl">Placed On</span>
                          <span className="order-val-date">
                            {new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                        </div>
                        <div>
                          <span className="order-lbl">Status</span>
                          <span className={`order-status-badge badge-${order.status.toLowerCase()}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>

                      <div className="order-card-items">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="order-card-item-row">
                            <img 
                              src={item.productId?.image || 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=150'} 
                              alt="outfit" 
                              className="order-item-img" 
                            />
                            <div className="order-item-details">
                              <h5>{item.productId?.name || 'Unknown Outfit'}</h5>
                              <p>Size: <strong>{item.size}</strong> {item.color && `| Color: ${item.color}`}</p>
                              <span className="order-item-qty-price">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.price)} x {item.quantity}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Shipment Tracking Details */}
                      {order.trackingNumber && (
                        <div className="order-tracking-box">
                          <div className="tracking-header">
                            <span>Courier Carrier: <strong className="pink-text">{order.courierName || 'Shiprocket'}</strong></span>
                            <span>AWB Tracking: <strong>{order.trackingNumber}</strong></span>
                          </div>
                          {order.trackingUrl && (
                            <a href={order.trackingUrl} target="_blank" rel="noopener noreferrer" className="btn-track-package">
                              Track Package
                            </a>
                          )}
                        </div>
                      )}

                      {/* Timeline Audit Logs */}
                      {order.timeline && order.timeline.length > 0 && (
                        <div className="order-timeline-wrapper">
                          <span className="timeline-title">Delivery Status Updates</span>
                          <div className="timeline-items">
                            {order.timeline.map((event, index) => (
                              <div key={index} className="timeline-event-item">
                                <div className="event-indicator">
                                  <div className="event-dot"></div>
                                  {index < order.timeline.length - 1 && <div className="event-line"></div>}
                                </div>
                                <div className="event-details">
                                  <div className="event-header">
                                    <span className="event-status">{event.status}</span>
                                    <span className="event-date">
                                      {new Date(event.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                  </div>
                                  {event.note && <span className="event-note">{event.note}</span>}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="order-card-footer">
                        <div className="footer-meta">
                          <span>Payment: <strong>{order.paymentMethod} ({order.paymentStatus})</strong></span>
                        </div>
                        <div className="footer-total">
                          <span>Total Amount:</span>
                          <strong>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(order.totalAmount)}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .profile-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .profile-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .profile-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
        }
        
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        
        .profile-details-card {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px dashed var(--border-light);
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .card-header h3 {
          font-size: 1.3rem;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .card-title-icon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .icon-pink {
          color: var(--primary-pink);
        }
        .edit-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
        }
        .edit-btn:hover {
          color: var(--primary-pink-hover);
        }
        
        .alert {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1.25rem;
        }
        .alert-success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        .alert-danger {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        
        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .profile-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .profile-form label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .profile-form input {
          font-family: var(--font-sans);
          padding: 0.8rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .profile-form input:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
        }
        
        .form-btns-row {
          display: flex;
          gap: 1rem;
        }
        .btn-save {
          padding: 0.75rem 1.5rem;
          font-size: 0.85rem;
          border-radius: 8px;
          align-self: flex-start;
        }
        .btn-cancel {
          padding: 0.75rem 1.5rem;
          font-size: 0.85rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          color: var(--dark-charcoal);
        }
        .btn-cancel:hover {
          background: var(--cream-white);
        }
        
        .profile-info-display {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .info-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .info-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .info-val {
          font-size: 1.05rem;
          color: var(--dark-charcoal);
          font-weight: 500;
        }
        
        /* Customer Orders List */
        .customer-orders-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-height: 550px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        .customer-order-card {
          background: var(--pure-white);
          padding: 1.5rem;
          border: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .order-card-header {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.75rem;
        }
        .order-lbl {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.15rem;
          text-transform: uppercase;
          font-weight: 600;
        }
        .order-val-id {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-charcoal);
        }
        .order-val-date {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--dark-charcoal);
        }
        .order-card-items {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .order-card-item-row {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .order-item-img {
          width: 50px;
          height: 60px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid var(--border-light);
        }
        .order-item-details {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .order-item-details h5 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .order-item-details p {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin: 0;
        }
        .order-item-qty-price {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
        }
        .order-card-footer {
          border-top: 1px solid var(--border-light);
          padding-top: 0.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }
        .footer-meta {
          color: var(--text-muted);
        }
        .footer-total {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-total strong {
          font-size: 1.05rem;
          color: var(--primary-pink-dark);
        }
        .orders-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4rem 0;
        }

        /* Order status badges */
        .order-status-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
          display: inline-block;
          text-align: center;
        }
        .badge-pending { background: #fff3cd; color: #856404; border: 1px solid #ffeeba; }
        .badge-accepted { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
        .badge-rejected { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .badge-processing { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }
        .badge-shipped { background: #cce5ff; color: #004085; border: 1px solid #b8daff; }
        .badge-delivered { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .badge-cancelled { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }

        .pink-loader {
          width: 32px;
          height: 32px;
          border: 3px solid var(--soft-pink);
          border-top-color: var(--primary-pink);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .orders-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 1.5rem;
          gap: 1rem;
        }
        .placeholder-circle {
          width: 64px;
          height: 64px;
          background: var(--light-pink);
          color: var(--primary-pink);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-pink);
        }
        .orders-placeholder h4 {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .orders-placeholder p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          max-width: 300px;
          margin: 0;
        }
        
        .h-full {
          height: 100%;
        }
        
        /* Shipping Tracking Styles */
        .order-tracking-box {
          background: var(--light-pink);
          border: 1px solid var(--border-pink);
          border-radius: 12px;
          padding: 1.25rem;
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .tracking-header {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.85rem;
          color: var(--dark-charcoal);
        }
        .pink-text {
          color: var(--primary-pink-dark);
        }
        .btn-track-package {
          background: var(--primary-pink);
          color: var(--pure-white);
          padding: 0.6rem 1.2rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(240, 84, 138, 0.2);
          transition: all var(--transition-fast);
        }
        .btn-track-package:hover {
          background: var(--primary-pink-hover);
          transform: translateY(-1px);
        }
        
        .order-timeline-wrapper {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.25rem;
          margin-top: 1rem;
        }
        .timeline-title {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-charcoal);
          margin-bottom: 1rem;
        }
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding-left: 0.5rem;
        }
        .timeline-event-item {
          display: flex;
          gap: 1.25rem;
        }
        .event-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .event-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--primary-pink);
          border: 2px solid var(--pure-white);
          box-shadow: 0 0 0 2px var(--primary-pink);
          z-index: 2;
        }
        .event-line {
          width: 2px;
          background: var(--border-pink);
          position: absolute;
          top: 10px;
          bottom: -20px;
          z-index: 1;
        }
        .event-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex-grow: 1;
        }
        .event-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
        }
        .event-status {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-charcoal);
        }
        .event-date {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .event-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        
        @media (max-width: 992px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
