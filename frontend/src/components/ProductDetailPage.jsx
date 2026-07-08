import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, ArrowLeft, Check, AlertCircle } from 'lucide-react';
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
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  
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
    <main className="product-detail-view section animate-fade-in">
      <div className="container">
        {/* Back Button Link */}
        <button className="back-link-btn" onClick={onBack}>
          <ArrowLeft size={18} /> Back to Collection
        </button>

        <div className="detail-grid">
          {/* Left Column: Image Gallery */}
          <div className="gallery-section">
            <div className="main-image-box glass-card">
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
            <span className="info-sku">SKU: {product.sku}</span>
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
              <h4>Select Size</h4>
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

            {/* Colors Section */}
            {product.colors && product.colors.length > 0 && (
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
            gap: 2.5rem;
          }
          .main-image-box {
            height: 420px;
          }
          .info-section {
            padding: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
