import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, ArrowLeft, Check, AlertCircle, Ruler } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { productService } from '../services/productService';
import ProductCard from './ProductCard';

export default function ProductDetailPage({ productSlug, onBack, onSelectProduct }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [selectedImage, setSelectedImage] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  const [addingToCart, setAddingToCart] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [cartError, setCartError] = useState('');

  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setErrorMsg('');
      try {
        const data = await productService.getProductBySlug(productSlug);
        setProduct(data);
        if (data.images && data.images.length > 0) {
          setSelectedImage(data.images[0]);
        } else {
          setSelectedImage(data.image);
        }
        
        // Find first available size that has stock
        const availableSize = data.sizes.find(s => s.stock > 0);
        if (availableSize) {
          setSelectedSize(availableSize.size);
        } else if (data.sizes.length > 0) {
          setSelectedSize(data.sizes[0].size);
        }

        if (data.colors && data.colors.length > 0) {
          setSelectedColor(data.colors[0]);
        }

        // Fetch related products (same category, filter out current product)
        const relData = await productService.getProducts({ category: data.category, limit: 5 });
        const filteredRel = relData.products.filter(p => p._id !== data._id).slice(0, 4);
        setRelatedProducts(filteredRel);

      } catch (err) {
        console.error('Error fetching product detail:', err);
        setErrorMsg('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productSlug]);

  if (loading) {
    return (
      <div className="container detail-loading-container">
        <div className="pink-loader"></div>
      </div>
    );
  }

  if (errorMsg || !product) {
    return (
      <div className="container detail-error-container glass-card">
        <AlertCircle size={40} className="error-icon" />
        <h3>Error Loading Product</h3>
        <p>{errorMsg || 'We could not find the outfit you were looking for.'}</p>
        <button className="btn btn-primary" onClick={onBack}>
          <ArrowLeft size={16} /> Back to Collection
        </button>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product._id);

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

  // Selected size stock logic
  const selectedSizeInfo = product.sizes.find(s => s.size === selectedSize);
  const currentStock = selectedSizeInfo ? selectedSizeInfo.stock : 0;

  const handleAddToCart = async () => {
    if (!user) {
      window.location.hash = '#login';
      return;
    }

    if (!selectedSize) {
      setCartError('Please select a size');
      return;
    }
    
    setAddingToCart(true);
    setCartError('');
    setAddedSuccess(false);
    
    try {
      await addToCart(product, 1, selectedSize, selectedColor);
      setAddedSuccess(true);
      setTimeout(() => setAddedSuccess(false), 3000);
    } catch (err) {
      setCartError(err.message || 'Failed to add to cart');
    } finally {
      setAddingToCart(false);
    }
  };

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <>
      {/* Lightbox Fullscreen Photo Gallery Overlay */}
      {isLightboxOpen && (
        <div className="image-lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <button className="lightbox-close-btn" onClick={() => setIsLightboxOpen(false)}>
            &times;
          </button>
          
          {imagesList.length > 1 && (
            <button 
              className="lightbox-nav-btn prev-btn" 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
              }}
            >
              &#10094;
            </button>
          )}
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={imagesList[lightboxIndex]} alt={`${product.name} full view`} className="lightbox-image" />
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {imagesList.length}
            </div>
          </div>
          
          {imagesList.length > 1 && (
            <button 
              className="lightbox-nav-btn next-btn" 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
              }}
            >
              &#10095;
            </button>
          )}
        </div>
      )}

      <main className="product-detail-view section animate-fade-in">
      <div className="container">
        {/* Back Button Link */}
        <button className="back-link-btn" onClick={onBack}>
          <ArrowLeft size={18} /> Back to Collection
        </button>

        <div className="detail-grid">
          {/* Left Column: Image Gallery */}
          <div className="gallery-section">
            <div className="main-image-box glass-card" style={{ cursor: 'zoom-in' }} onClick={() => {
              const idx = imagesList.indexOf(selectedImage);
              setLightboxIndex(idx >= 0 ? idx : 0);
              setIsLightboxOpen(true);
            }}>
              <img src={selectedImage} alt={product.name} className="main-image" />
              {product.isNewArrival && <span className="detail-badge badge badge-pink position-badge">New Arrival</span>}
            </div>

            {imagesList.length > 1 && (
              <div className="thumbnails-grid">
                {imagesList.map((url, idx) => (
                  <div
                    key={idx}
                    className={`thumbnail-card glass-card ${selectedImage === url ? 'active-thumbnail' : ''}`}
                    onClick={() => setSelectedImage(url)}
                  >
                    <img src={url} alt={`${product.name} gallery ${idx + 1}`} className="thumbnail-img" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Information & Actions */}
          <div className="info-section glass-card">
            <span className="info-category">{product.category}</span>
            <h1 className="info-title">{product.name}</h1>
            {product.brand && <span className="info-brand">Brand: {product.brand}</span>}

            <div className="info-price-row">
              {formattedDiscountPrice ? (
                <>
                  <span className="discount-price">{formattedDiscountPrice}</span>
                  <span className="original-price strike-through">{formattedPrice}</span>
                  <span className="save-badge">
                    Save {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price - product.discountPrice)}
                  </span>
                </>
              ) : (
                <span className="price-tag">{formattedPrice}</span>
              )}
            </div>

            <p className="info-desc">{product.description}</p>

            {/* Sizing Section */}
            <div className="options-section">
              <div className="size-header-row">
                <h4>Select Size</h4>
                <button 
                  type="button" 
                  className="size-chart-btn"
                  onClick={() => setShowSizeChart(true)}
                >
                  <Ruler size={16} /> Size Chart
                </button>
              </div>
              <div className="size-badges-list">
                {['M', 'L', 'XL', 'XXL'].map((sz) => {
                  const szStock = product.sizes.find(s => s.size === sz);
                  const isAvailable = szStock && szStock.stock > 0;
                  
                  return (
                    <button
                      key={sz}
                      onClick={() => isAvailable && setSelectedSize(sz)}
                      className={`size-btn ${selectedSize === sz ? 'active-size' : ''} ${!isAvailable ? 'disabled-size' : ''}`}
                      disabled={!isAvailable}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Variants Section (Linked Products) */}
            {((product.colorName) || (product.colorVariants && product.colorVariants.length > 0)) ? (
              <div className="options-section">
                <h4>Select Color</h4>
                <div className="color-variants-list">
                  <div className="color-variant-item active-variant">
                    {product.image && (
                      <img src={product.image} className="color-variant-thumb" alt={product.colorName} />
                    )}
                    <span>{product.colorName || 'Default'}</span>
                  </div>
                  
                  {product.colorVariants && product.colorVariants.map((variant) => {
                    if (!variant.product) return null;
                    return (
                      <button
                        key={variant.product._id || variant.product}
                        onClick={() => onSelectProduct(variant.product)}
                        className="color-variant-btn-link"
                        title={`Switch to ${variant.colorName}`}
                      >
                        {variant.product.image && (
                          <img src={variant.product.image} className="color-variant-thumb" alt={variant.colorName} />
                        )}
                        <span>{variant.colorName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Fallback to static colors if defined */
              product.colors && product.colors.length > 0 && (
                <div className="options-section">
                  <h4>Select Color</h4>
                  <div className="color-badges-list">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`color-btn ${selectedColor === color ? 'active-color' : ''}`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )
            )}

            {/* Stock status indicator */}
            <div className="stock-status-row">
              {currentStock <= 0 ? (
                <div className="stock-alert out-of-stock">
                  <AlertCircle size={16} />
                  <span>Out of Stock in selected size</span>
                </div>
              ) : currentStock <= 2 ? (
                <div className="stock-alert low-stock">
                  <AlertCircle size={16} />
                  <span>Hurry! Only {currentStock} items left in selected size</span>
                </div>
              ) : (
                <div className="stock-alert in-stock">
                  <Check size={16} />
                  <span>In Stock - ready to ship</span>
                </div>
              )}
            </div>

            {/* Add to Cart / Wishlist Actions */}
            <div className="purchase-actions-row">
              <button
                className="btn btn-primary btn-add-to-cart"
                onClick={handleAddToCart}
                disabled={currentStock <= 0 || addingToCart}
              >
                {addingToCart ? (
                  'Adding...'
                ) : addedSuccess ? (
                  <>
                    Added to Bag! <Check size={18} />
                  </>
                ) : (
                  <>
                    Add to Cart <ShoppingBag size={18} />
                  </>
                )}
              </button>

              <button
                className={`btn-wishlist-toggle ${isWishlisted ? 'wishlisted' : ''}`}
                onClick={() => toggleWishlist(product)}
                title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart size={22} fill={isWishlisted ? 'var(--primary-pink)' : 'none'} />
              </button>
            </div>

            {cartError && <p className="cart-error-message">{cartError}</p>}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="related-section">
            <div className="section-header">
              <h2>You May Also Like</h2>
              <p>Explore matching cordsets or dresses from the same collection.</p>
            </div>
            <div className="products-grid">
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct._id}
                  product={relProduct}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <style>{`
        .detail-loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8rem 0;
        }
        .detail-error-container {
          text-align: center;
          padding: 4rem 2rem;
          max-width: 500px;
          margin: 4rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .detail-error-container .error-icon {
          color: var(--primary-pink-dark);
        }
        
        .back-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        .back-link-btn:hover {
          color: var(--primary-pink);
        }
        
        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        
        /* Gallery */
        .gallery-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .main-image-box {
          position: relative;
          height: 520px;
          overflow: hidden;
          background: var(--light-pink);
        }
        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .position-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          z-index: 5;
        }
        .thumbnails-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .thumbnail-card {
          height: 100px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          background: var(--light-pink);
          transition: all var(--transition-fast);
        }
        .thumbnail-card:hover, .thumbnail-card.active-thumbnail {
          border-color: var(--primary-pink);
          transform: translateY(-2px);
        }
        .thumbnail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Info side */
        .info-section {
          padding: 3rem;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
        }
        .info-category {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary-pink);
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .info-title {
          font-size: 2.2rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.25rem;
          line-height: 1.2;
        }
        .info-sku {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .info-brand {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          font-weight: 500;
        }
        
        .info-price-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .price-tag {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .discount-price {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .original-price {
          font-size: 1.25rem;
          color: var(--text-muted);
        }
        .strike-through {
          text-decoration: line-through;
        }
        .save-badge {
          background: #d4edda;
          color: #155724;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
        }
        
        .info-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        
        .options-section {
          margin-bottom: 1.5rem;
        }
        .options-section h4 {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }
        .size-badges-list, .color-badges-list {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }
        
        .size-btn {
          border: 1px solid var(--border-light);
          min-width: 44px;
          height: 44px;
          font-size: 0.85rem;
          font-weight: 700;
          border-radius: 8px;
          background: var(--cream-white);
          color: var(--dark-charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.5rem;
        }
        .size-btn:hover:not(.disabled-size) {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
        }
        .size-btn.active-size {
          background: var(--primary-pink);
          color: var(--pure-white);
          border-color: var(--primary-pink);
        }
        .size-btn.disabled-size {
          opacity: 0.45;
          cursor: not-allowed;
          background: #e9ecef;
          text-decoration: line-through;
          color: #868e96;
        }
        
        .color-btn {
          border: 1px solid var(--border-light);
          padding: 0.4rem 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 20px;
          background: var(--cream-white);
          color: var(--dark-charcoal);
        }
        .color-btn:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        .color-btn.active-color {
          border-color: var(--primary-pink);
          background: var(--light-pink);
          color: var(--primary-pink-dark);
          font-weight: 700;
        }
        
        .color-variants-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .color-variant-thumb {
          width: 24px;
          height: 24px;
          object-fit: cover;
          border-radius: 4px;
          margin-right: 0.5rem;
          border: 1px solid var(--border-light);
        }
        .color-variant-item.active-variant {
          display: inline-flex;
          align-items: center;
          background: var(--primary-pink);
          border: 1.5px solid var(--primary-pink);
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--pure-white);
        }
        .color-variant-btn-link {
          display: inline-flex;
          align-items: center;
          background: var(--cream-white);
          border: 1.5px solid var(--border-light);
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--dark-charcoal);
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .color-variant-btn-link:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
        }
        
        .stock-status-row {
          margin-bottom: 2rem;
        }
        .stock-alert {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }
        .stock-alert.in-stock {
          background: #e2f0d9;
          color: #385723;
        }
        .stock-alert.low-stock {
          background: #fff3cd;
          color: #856404;
        }
        .stock-alert.out-of-stock {
          background: #f8d7da;
          color: #721c24;
        }
        
        .purchase-actions-row {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .btn-add-to-cart {
          flex-grow: 1;
          padding: 0.95rem;
          border-radius: 12px;
          font-size: 1rem;
        }
        .btn-add-to-cart:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          box-shadow: none;
        }
        .btn-wishlist-toggle {
          border: 1px solid var(--border-light);
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          background: var(--cream-white);
          transition: all var(--transition-fast);
        }
        .btn-wishlist-toggle:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
          transform: scale(1.04);
        }
        .btn-wishlist-toggle.wishlisted {
          border-color: var(--primary-pink-dark);
          background: var(--light-pink);
          color: var(--primary-pink);
        }
        
        .cart-error-message {
          color: red;
          font-size: 0.85rem;
          font-weight: 500;
          margin-top: 0.75rem;
        }
        
        .related-section {
          margin-top: 6rem;
        }
        
        @media (max-width: 992px) {
          .detail-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .main-image-box {
            height: 400px;
          }
          .info-section {
            padding: 2rem;
          }
        }
        @media (max-width: 576px) {
          .product-detail-view {
            padding-top: 1rem !important;
            padding-bottom: 1.5rem !important;
          }
          .back-link-btn {
            margin-bottom: 1rem !important;
            font-size: 0.85rem !important;
          }
          .detail-grid {
            gap: 1.25rem !important;
          }
          .main-image-box {
            height: 320px !important;
          }
          .thumbnail-card {
            height: 70px !important;
          }
          .info-section {
            padding: 1.25rem !important;
          }
          .info-category {
            font-size: 0.75rem !important;
          }
          .info-title {
            font-size: 1.6rem !important;
            margin-bottom: 0.25rem !important;
          }
          .info-price-row {
            margin-bottom: 1rem !important;
          }
          .price-tag, .discount-price {
            font-size: 1.6rem !important;
          }
          .info-desc {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
            margin-bottom: 1rem !important;
          }
          .options-section {
            margin-bottom: 1rem !important;
          }
          .options-section h4 {
            font-size: 0.85rem !important;
            margin-bottom: 0.35rem !important;
          }
          .size-btn {
            min-width: 38px !important;
            height: 38px !important;
            font-size: 0.8rem !important;
          }
          .color-btn {
            padding: 0.35rem 0.85rem !important;
            font-size: 0.75rem !important;
          }
          .stock-status-row {
            margin-bottom: 1rem !important;
          }
          .stock-alert {
            font-size: 0.75rem !important;
            padding: 0.4rem 0.75rem !important;
          }
          .purchase-actions-row {
            gap: 0.75rem !important;
          }
          .btn-add-to-cart {
            padding: 0.75rem !important;
            font-size: 0.9rem !important;
            border-radius: 8px !important;
          }
          .btn-wishlist-toggle {
            width: 44px !important;
            height: 44px !important;
            border-radius: 8px !important;
          }
        }

        /* Fullscreen Lightbox Photo Gallery */
        .image-lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--pure-white);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease-out;
        }
        .lightbox-close-btn {
          position: absolute;
          top: 25px;
          right: 30px;
          background: transparent;
          color: var(--dark-charcoal);
          border: none;
          font-size: 3.5rem;
          line-height: 1;
          cursor: pointer;
          z-index: 100000;
          transition: color 0.2s;
        }
        .lightbox-close-btn:hover {
          color: var(--primary-pink);
        }
        .lightbox-nav-btn {
          position: absolute;
          background: rgba(0, 0, 0, 0.05);
          color: var(--dark-charcoal);
          border: none;
          width: 60px;
          height: 60px;
          font-size: 1.75rem;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100000;
          transition: all 0.2s;
        }
        .lightbox-nav-btn:hover {
          background: var(--primary-pink);
          color: #fff;
          transform: scale(1.08);
        }
        .prev-btn {
          left: 40px;
        }
        .next-btn {
          right: 40px;
        }
        .lightbox-content {
          position: relative;
          max-width: 80%;
          max-height: 80%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }
        .lightbox-counter {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-top: 1.25rem;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .lightbox-nav-btn {
            width: 44px;
            height: 44px;
            font-size: 1.25rem;
          }
          .prev-btn {
            left: 20px;
          }
          .next-btn {
            right: 20px;
          }
          .lightbox-content {
            max-width: 90%;
          }
          .lightbox-image {
            max-height: 65vh;
          }
        }

        .size-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .size-header-row h4 {
          margin-bottom: 0;
        }
        .size-chart-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          color: var(--primary-pink-dark);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans);
          padding: 2px 6px;
          border-radius: 4px;
          transition: all var(--transition-fast);
        }
        .size-chart-btn:hover {
          color: var(--primary-pink-hover);
          background: rgba(240, 84, 138, 0.08);
          text-decoration: underline;
        }

        /* Size Chart Modal Overlay */
        .size-chart-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(30, 34, 41, 0.55);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .size-chart-modal {
          width: 100%;
          max-width: 440px;
          background: var(--pure-white);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          position: relative;
        }
        .size-chart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.75rem;
        }
        .size-chart-header h3 {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .size-chart-close-btn {
          background: none;
          border: none;
          font-size: 1.8rem;
          line-height: 1;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0 4px;
        }
        .size-chart-close-btn:hover {
          color: var(--dark-charcoal);
        }
        .size-chart-intro {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          line-height: 1.4;
        }
        .size-chart-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: var(--cream-white);
          padding: 1.25rem;
          border-radius: 12px;
          border: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }
        .size-chart-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed var(--border-light);
        }
        .size-chart-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .size-chart-name {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--dark-charcoal);
        }
        .size-chart-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .btn-size-close {
          width: 100%;
          padding: 0.75rem;
          border-radius: 10px;
        }
      `}</style>
    </main>

    {/* Size Chart Modal */}
    {showSizeChart && (
      <div className="size-chart-overlay animate-fade-in" onClick={() => setShowSizeChart(false)}>
        <div className="size-chart-modal glass-card" onClick={(e) => e.stopPropagation()}>
          <div className="size-chart-header">
            <h3>Bust Size Guide</h3>
            <button className="size-chart-close-btn" onClick={() => setShowSizeChart(false)}>
              &times;
            </button>
          </div>
          
          <p className="size-chart-intro">
            Standard bust size measurements to help you find your perfect fit:
          </p>
          
          <div className="size-chart-list">
            <div className="size-chart-item">
              <span className="size-chart-name">Medium (M)</span>
              <span className="size-chart-val">36 / 38 inches</span>
            </div>
            <div className="size-chart-item">
              <span className="size-chart-name">Large (L)</span>
              <span className="size-chart-val">40 inches</span>
            </div>
            <div className="size-chart-item">
              <span className="size-chart-name">XL</span>
              <span className="size-chart-val">42 inches</span>
            </div>
            <div className="size-chart-item">
              <span className="size-chart-name">XXL</span>
              <span className="size-chart-val">44 inches</span>
            </div>
          </div>
          
          <div className="size-chart-actions">
            <button type="button" className="btn btn-primary btn-size-close" onClick={() => setShowSizeChart(false)}>
              Close Size Guide
            </button>
          </div>
        </div>
      </div>
    )}
  </>
);
}
