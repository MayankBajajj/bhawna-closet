import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Left Text Content */}
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <Sparkles size={14} />
            <span>New Arrivals 2026</span>
          </div>
          <h1>
            Redefining <span className="highlight-text">Elegance</span> &amp; Modern Style
          </h1>
          <p className="hero-description">
            Bhawna Closet brings you the perfect blend of style, elegance, and trend. Discover fashionable dresses and girls’ wear collections curated for modern fashion lovers who love to stand out with confidence. 💖
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onExploreClick}>
              Explore Collection <ArrowRight size={18} />
            </button>
            <a href="#about-brand" className="btn btn-secondary">
              Our Story
            </a>
          </div>
          <div className="hero-metrics">
            <div className="metric-item">
              <h3>100%</h3>
              <p>Premium Fabrics</p>
            </div>
            <div className="metric-line"></div>
            <div className="metric-item">
              <h3>Custom</h3>
              <p>Tailored Fitting</p>
            </div>
            <div className="metric-line"></div>
            <div className="metric-item">
              <h3>Gurgaon</h3>
              <p>In-Store Boutique</p>
            </div>
          </div>
        </div>

        {/* Right Image Presentation */}
        <div className="hero-image-wrapper">
          <div className="hero-image-backdrop"></div>
          <img
            src="https://res.cloudinary.com/jbhylwfb/image/upload/v1782921971/bhawna_closet_products/f6c6ykyn8wgxvfa4xtsn.jpg"
            alt="Bhawna Closet Premium Fashion"
            className="hero-main-image"
          />
          {/* Floating Glassmorphic Badge */}
          <div className="floating-glass-card glass-card">
            <span className="floating-emoji">🌸</span>
            <div>
              <h4>Trending Cordsets</h4>
              <p>Now in store</p>
            </div>
          </div>
          <div className="floating-glass-card-2 glass-card">
            <span className="floating-emoji">👗</span>
            <div>
              <h4>Dresses &amp; Tops</h4>
              <p>Soft pastel hues</p>
            </div>
          </div>
        </div>

      </div>

      {/* Hero Specific Styles */}
      <style>{`
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, var(--pure-white) 0%, var(--light-pink) 100%);
          padding: 6rem 0 5rem 0;
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 4rem;
        }
        .hero-content {
          z-index: 10;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--soft-pink);
          color: var(--primary-pink-dark);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: 0.03em;
        }
        .hero-content h1 {
          font-size: 3.5rem;
          line-height: 1.15;
          color: var(--dark-charcoal);
          margin-bottom: 1.5rem;
        }
        .highlight-text {
          color: var(--primary-pink);
          position: relative;
          font-style: italic;
        }
        .hero-description {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.7;
          max-width: 580px;
        }
        .hero-actions {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }
        .hero-metrics {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .metric-item h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--primary-pink-dark);
          margin-bottom: 0.25rem;
        }
        .metric-item p {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .metric-line {
          width: 1px;
          height: 40px;
          background: var(--border-light);
        }
        
        /* Right Side Image styles */
        .hero-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-image-backdrop {
          position: absolute;
          width: 80%;
          height: 90%;
          background: var(--soft-pink);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          filter: blur(10px);
          z-index: 1;
          transform: rotate(-5deg);
        }
        .hero-main-image {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 420px;
          height: 520px;
          object-fit: cover;
          border-radius: 200px 200px 20px 20px;
          box-shadow: var(--shadow-lg);
          border: 6px solid var(--pure-white);
        }
        .floating-glass-card {
          position: absolute;
          left: -40px;
          bottom: 80px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
        }
        .floating-glass-card-2 {
          position: absolute;
          right: -20px;
          top: 60px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
        }
        .floating-emoji {
          font-size: 1.5rem;
        }
        .floating-glass-card h4, .floating-glass-card-2 h4 {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .floating-glass-card p, .floating-glass-card-2 p {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Responsive Hero */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 5rem;
            text-align: center;
          }
          .hero-badge, .hero-actions, .hero-metrics {
            justify-content: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-main-image {
            max-width: 350px;
            height: 440px;
          }
          .floating-glass-card {
            left: 10px;
          }
          .floating-glass-card-2 {
            right: 10px;
          }
        }
        @media (max-width: 576px) {
          .hero-section {
            padding: 1.25rem 0 1.5rem 0 !important;
          }
          .hero-container {
            gap: 1rem !important;
          }
          .hero-badge {
            margin-bottom: 0.85rem !important;
            padding: 0.35rem 0.75rem !important;
            font-size: 0.75rem !important;
          }
          .hero-content h1 {
            font-size: 1.9rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.85rem !important;
          }
          .hero-description {
            display: none !important;
          }
          .hero-actions {
            flex-direction: row !important;
            justify-content: center !important;
            gap: 0.75rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-actions .btn {
            padding: 0.7rem 1.15rem !important;
            font-size: 0.8rem !important;
            width: auto !important;
          }
          .hero-metrics {
            display: none !important;
          }
          .metric-item h3 {
            font-size: 1.4rem !important;
          }
          .metric-item p {
            font-size: 0.7rem !important;
          }
          .metric-line {
            display: block !important;
            height: 25px !important;
          }
          .hero-main-image {
            max-width: 270px !important;
            height: 350px !important;
          }
          .floating-glass-card {
            left: -15px !important;
            bottom: 30px !important;
            padding: 0.4rem 0.65rem !important;
          }
          .floating-glass-card-2 {
            right: -15px !important;
            top: 30px !important;
            padding: 0.4rem 0.65rem !important;
          }
          .floating-emoji {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
