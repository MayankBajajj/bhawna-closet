import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        
        {/* About Section */}
        <div className="footer-col footer-about">
          <h3><span>Bhawna</span> Closet</h3>
          <p>
            Bhawna Closet brings you the perfect blend of style, elegance, and trend. Discover fashionable dresses and girls’ wear collections curated for modern fashion lovers who love to stand out with confidence. 💖
          </p>
          <div className="social-links">
            <a
              href="https://instagram.com/bhawna_closet123"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn instagram-btn"
              title="Follow us on Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>@bhawna_closet123</span>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-col">
          <h4>Explore Shop</h4>
          <ul className="footer-links">
            <li>
              <button onClick={() => handleNavClick('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('collections')}>Cordsets Collection</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('collections')}>Dresses Collection</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('collections')}>Tops &amp; Shirts Collection</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('collections')}>Bottoms Collection</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')}>Contact &amp; Location</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('admin')} style={{ opacity: 0.6, fontSize: '0.8rem' }}>Admin Portal</button>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-col">
          <h4>Boutique Info</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} className="footer-icon" />
              <span>Shop no R6/020 Sec 67 M3M Urbana Gurgaon, Haryana</span>
            </li>
            <li>
              <Phone size={18} className="footer-icon" />
              <span><a href="tel:9266991136">9266991136</a></span>
            </li>
            <li>
              <Mail size={18} className="footer-icon" />
              <span><a href="mailto:bhawnacloset.in@gmail.com">bhawnacloset.in@gmail.com</a></span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Bhawna Closet. All Rights Reserved.</p>
          <p className="footer-tagline">Curated with love 🌸</p>
        </div>
      </div>

      {/* Footer Specific Styles */}
      <style>{`
        .footer-section {
          background-color: var(--dark-charcoal);
          color: var(--pure-white);
          padding: 5rem 0 0 0;
          margin-top: auto;
          border-top: 4px solid var(--primary-pink);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.85fr 0.85fr;
          gap: 4rem;
          padding-bottom: 4rem;
        }
        
        .footer-col h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--pure-white);
          margin-bottom: 1.25rem;
        }
        .footer-col h3 span {
          color: var(--primary-pink);
        }
        .footer-col h4 {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--pure-white);
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
          padding-bottom: 0.5rem;
        }
        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--primary-pink);
        }
        .footer-col p {
          color: #adb5bd;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .instagram-btn {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: var(--pure-white);
        }
        .instagram-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(220, 39, 67, 0.4);
        }
        
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links button {
          font-size: 0.95rem;
          color: #adb5bd;
          text-align: left;
          width: 100%;
        }
        .footer-links button:hover {
          color: var(--primary-pink);
          padding-left: 5px;
        }
        
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #adb5bd;
          font-size: 0.95rem;
        }
        .footer-contact-list a {
          color: #adb5bd;
        }
        .footer-contact-list a:hover {
          color: var(--primary-pink);
        }
        .footer-icon {
          color: var(--primary-pink);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        
        .footer-bottom {
          border-top: 1px solid #2b303b;
          padding: 2rem 0;
          background-color: #16191f;
        }
        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: #6c757d;
        }
        .footer-tagline {
          color: var(--primary-pink);
          font-weight: 500;
        }

        /* Responsive Footer */
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
          .footer-about {
            grid-column: span 2;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-about {
            grid-column: span 1;
          }
          .footer-bottom-container {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
