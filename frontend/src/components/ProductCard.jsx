import React from 'react';
import { Heart, Search } from 'lucide-react';

export default function ProductCard({ product, onSelectProduct }) {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.price);

  const formattedDiscountPrice = product.discountPrice
    ? new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(product.discountPrice)
    : null;

  return (
    <div className="product-card animate-fade-in" onClick={() => onSelectProduct(product)}>
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="product-hover-overlay">
          <button className="overlay-action-btn" title="Quick View">
            <Search size={18} />
          </button>
        </div>
        
        {/* Category Badge */}
        <span className="product-category-badge badge badge-pink">
          {product.category}
        </span>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-footer">
          <div className="product-price-container">
            {formattedDiscountPrice ? (
              <>
                <span className="product-price">{formattedDiscountPrice}</span>
                <span className="product-original-price-strike">{formattedPrice}</span>
              </>
            ) : (
              <span className="product-price">{formattedPrice}</span>
            )}
          </div>
          <span className="product-sizes">
            {product.sizes.map(s => typeof s === 'object' && s.size ? s.size : s).join(', ')}
          </span>
        </div>
      </div>

      {/* CSS Styles for ProductCard */}
      <style>{`
        .product-card {
          background: var(--pure-white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-pink);
        }
        .product-image-container {
          position: relative;
          width: 100%;
          height: 320px;
          background-color: var(--light-pink);
          overflow: hidden;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .product-card:hover .product-image {
          transform: scale(1.08);
        }
        .product-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(240, 84, 138, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
          z-index: 2;
        }
        .product-card:hover .product-hover-overlay {
          opacity: 1;
        }
        .overlay-action-btn {
          background: var(--pure-white);
          color: var(--primary-pink-dark);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .overlay-action-btn:hover {
          background: var(--primary-pink);
          color: var(--pure-white);
          transform: scale(1.1);
        }
        .product-category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 3;
        }
        
        .product-info {
          padding: 1.25rem;
        }
        .product-name {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .product-price-container {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }
        .product-price {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .product-original-price-strike {
          font-size: 0.85rem;
          text-decoration: line-through;
          color: var(--text-muted);
          font-weight: 500;
        }
        .product-sizes {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          background: var(--cream-white);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          border: 1px solid var(--border-light);
        }
        @media (max-width: 576px) {
          .product-image-container {
            height: 200px !important;
          }
          .product-info {
            padding: 0.75rem !important;
          }
          .product-name {
            font-size: 0.9rem !important;
            margin-bottom: 0.25rem !important;
          }
          .product-price {
            font-size: 0.95rem !important;
          }
          .product-original-price-strike {
            font-size: 0.75rem !important;
          }
          .product-sizes {
            display: none !important;
          }
          .product-category-badge {
            font-size: 0.6rem !important;
            padding: 0.15rem 0.5rem !important;
            top: 8px !important;
            left: 8px !important;
          }
        }
      `}</style>
    </div>
  );
}
