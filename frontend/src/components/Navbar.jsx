import React, { useState } from 'react';
import { Phone, ShoppingBag, Heart, Menu, X, User, LogOut, Settings, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  const { user, admin, logout, logoutAdmin } = useAuth();
  const { getCartCount } = useCart();
  const { wishlistItems } = useWishlist();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Shop Collection' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoutClick = () => {
    logout();
    handleNavClick('home');
  };

  const handleAdminLogoutClick = () => {
    logoutAdmin();
    handleNavClick('home');
  };

  const cartCount = getCartCount();
  const wishlistCount = wishlistItems.length;

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Branding Logo */}
        <div className="navbar-logo" onClick={() => handleNavClick('home')}>
          <span>Bhawna</span> Closet
        </div>

        {/* Desktop Menu */}
        <nav className="navbar-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          {/* Admin panel link if logged in as admin */}
          {admin && (
            <button
              className={`nav-link ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => handleNavClick('admin')}
              style={{ color: 'var(--primary-pink-dark)', fontWeight: '700' }}
            >
              Admin Dashboard
            </button>
          )}
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          <a href="tel:9266991136" className="nav-phone-btn" title="Call Us">
            <Phone size={16} />
            <span className="phone-text">9266991136</span>
          </a>

          {/* Wishlist Button */}
          <button 
            className={`nav-action-btn ${activeTab === 'wishlist' ? 'active-icon' : ''}`} 
            onClick={() => handleNavClick('wishlist')}
            title="Wishlist"
          >
            <Heart size={20} />
            {wishlistCount > 0 && <span className="action-badge">{wishlistCount}</span>}
          </button>

          {/* Shopping Cart Button */}
          <button 
            className={`nav-action-btn ${activeTab === 'cart' ? 'active-icon' : ''}`} 
            onClick={() => handleNavClick('cart')}
            title="Shopping Cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="action-badge badge-primary">{cartCount}</span>}
          </button>

          {/* Authentication Menus */}
          {admin ? (
            <div className="profile-dropdown-wrapper">
              <button className="nav-profile-trigger btn-outline" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                <Settings size={18} />
                <span className="user-name-text">Admin</span>
                <ChevronDown size={14} />
              </button>
              {userMenuOpen && (
                <div className="profile-dropdown-menu glass-card animate-fade-in">
                  <button onClick={() => handleNavClick('admin')}>Dashboard</button>
                  <button onClick={handleAdminLogoutClick} className="logout-btn-link">
                    <LogOut size={14} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : user ? (
            <div className="profile-dropdown-wrapper">
              <button className="nav-profile-trigger btn-outline" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                <User size={18} />
                <span className="user-name-text">{user.name.split(' ')[0]}</span>
                <ChevronDown size={14} />
              </button>
              {userMenuOpen && (
                <div className="profile-dropdown-menu glass-card animate-fade-in">
                  <button onClick={() => handleNavClick('profile')}>My Account</button>
                  <button onClick={() => handleNavClick('profile')} style={{ color: 'var(--text-muted)' }}>Orders History</button>
                  <button onClick={handleLogoutClick} className="logout-btn-link">
                    <LogOut size={14} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="navbar-auth-buttons">
              <button className="btn-auth-link" onClick={() => handleNavClick('login')}>Login</button>
              <button className="btn-auth-signup btn-primary-small" onClick={() => handleNavClick('signup')}>Sign Up</button>
            </div>
          )}

          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          {admin && (
            <button
              className={`mobile-nav-link ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => handleNavClick('admin')}
              style={{ color: 'var(--primary-pink-dark)', fontWeight: '700' }}
            >
              Admin Dashboard
            </button>
          )}

          <div className="mobile-auth-section">
            {admin ? (
              <>
                <button className="mobile-nav-link" onClick={() => handleNavClick('admin')}>Admin Panel</button>
                <button className="mobile-nav-link logout-btn-link" onClick={handleAdminLogoutClick}>
                  <LogOut size={18} /> Admin Logout
                </button>
              </>
            ) : user ? (
              <>
                <button className="mobile-nav-link" onClick={() => handleNavClick('profile')}>My Account</button>
                <button className="mobile-nav-link" onClick={() => handleNavClick('profile')}>Orders History</button>
                <button className="mobile-nav-link logout-btn-link" onClick={handleLogoutClick}>
                  <LogOut size={18} /> Logout
                </button>
              </>
            ) : (
              <div className="mobile-auth-btns">
                <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => handleNavClick('login')}>Login</button>
                <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => handleNavClick('signup')}>Sign Up</button>
              </div>
            )}
          </div>

          <a href="tel:9266991136" className="mobile-phone-link">
            <Phone size={18} />
            <span>9266991136</span>
          </a>
        </div>
      )}

      {/* CSS Styles for Navbar */}
      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }
        .navbar-container {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-logo {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark-charcoal);
          cursor: pointer;
          user-select: none;
        }
        .navbar-logo span {
          color: var(--primary-pink);
          position: relative;
        }
        .navbar-logo span::after {
          content: '💖';
          font-size: 0.8rem;
          position: absolute;
          top: -2px;
          right: -15px;
        }
        .navbar-desktop {
          display: flex;
          gap: 2.5rem;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--dark-charcoal);
          padding: 0.5rem 0;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-pink);
          transition: var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--primary-pink);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.active {
          color: var(--primary-pink);
          font-weight: 600;
        }
        .nav-link.active::after {
          width: 100%;
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .nav-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--soft-pink);
          color: var(--primary-pink-dark);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .nav-phone-btn:hover {
          background: var(--primary-pink);
          color: var(--pure-white);
        }
        
        /* Action buttons & Badges */
        .nav-action-btn {
          position: relative;
          color: var(--dark-charcoal);
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-action-btn:hover, .nav-action-btn.active-icon {
          background: var(--light-pink);
          color: var(--primary-pink);
        }
        .action-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background: var(--primary-pink-dark);
          color: var(--pure-white);
          font-size: 0.7rem;
          font-weight: 700;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--pure-white);
        }
        .action-badge.badge-primary {
          background: var(--primary-pink);
        }

        /* Profile Dropdown Styling */
        .profile-dropdown-wrapper {
          position: relative;
        }
        .nav-profile-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--dark-charcoal);
          border: 1px solid var(--border-light);
        }
        .nav-profile-trigger:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        .profile-dropdown-menu {
          position: absolute;
          top: 48px;
          right: 0;
          width: 180px;
          padding: 0.5rem;
          z-index: 100;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-md);
        }
        .profile-dropdown-menu button {
          text-align: left;
          padding: 0.6rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--dark-charcoal);
          border-radius: 8px;
          width: 100%;
        }
        .profile-dropdown-menu button:hover {
          background: var(--light-pink);
          color: var(--primary-pink-dark);
        }
        .profile-dropdown-menu .logout-btn-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-top: 1px solid var(--border-light);
          margin-top: 0.25rem;
          padding-top: 0.6rem;
          border-radius: 0 0 8px 8px;
          color: #dc3545;
        }
        .profile-dropdown-menu .logout-btn-link:hover {
          background: #ffebe9;
          color: #c82333;
        }

        /* Auth Buttons */
        .navbar-auth-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .btn-auth-link {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--dark-charcoal);
          padding: 0.5rem 0.75rem;
        }
        .btn-auth-link:hover {
          color: var(--primary-pink);
        }
        .btn-auth-signup {
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 20px;
          transition: all var(--transition-normal);
        }
        .btn-primary-small {
          background: var(--primary-pink);
          color: var(--pure-white);
          box-shadow: 0 2px 8px rgba(240, 84, 138, 0.2);
        }
        .btn-primary-small:hover {
          background: var(--primary-pink-hover);
          transform: translateY(-1px);
        }

        .mobile-menu-toggle {
          display: none;
          color: var(--dark-charcoal);
        }
        .mobile-menu-drawer {
          display: none;
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          background: var(--pure-white);
          border-bottom: 1px solid var(--border-light);
          padding: 1.5rem 2rem;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: var(--shadow-md);
        }
        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 500;
          text-align: left;
          color: var(--dark-charcoal);
          padding: 0.5rem 0;
        }
        .mobile-nav-link.active {
          color: var(--primary-pink);
          border-left: 3px solid var(--primary-pink);
          padding-left: 0.75rem;
        }
        .mobile-auth-section {
          border-top: 1px solid var(--border-light);
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mobile-auth-btns {
          display: flex;
          gap: 1rem;
          width: 100%;
        }
        .mobile-phone-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--primary-pink-dark);
          background: var(--soft-pink);
          padding: 0.75rem;
          border-radius: 8px;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        /* Responsive Navbar */
        @media (max-width: 992px) {
          .user-name-text, .phone-text {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .navbar-desktop, .nav-phone-btn {
            display: none;
          }
          .mobile-menu-toggle {
            display: block;
          }
          .mobile-menu-drawer {
            display: flex;
          }
          .navbar-logo {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </header>
  );
}
