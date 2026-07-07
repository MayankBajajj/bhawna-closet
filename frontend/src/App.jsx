import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Context Providers
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

// Services
import { productService } from './services/productService';

// Subcomponents / Page Views
import Login from './components/Login';
import Signup from './components/Signup';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';
import WishlistPage from './components/WishlistPage';
import MyAccountPage from './components/MyAccountPage';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';

import { Search, SlidersHorizontal, ArrowRight, MapPin } from 'lucide-react';
import './App.css';

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

function AppContent() {
  const { admin } = useAuth();
  const [activeTab, setActiveTab] = useState('home');
  const [loading, setLoading] = useState(true);

  // Hash-based URL routing for direct tab links (e.g. #admin, #cart)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'collections', 'contact', 'admin', 'cart', 'wishlist', 'profile', 'login', 'signup'].includes(hash)) {
        setActiveTab(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const [selectedProductSlug, setSelectedProductSlug] = useState(null);

  // Home Page Products (new arrivals)
  const [newArrivals, setNewArrivals] = useState([]);

  // Shop Collections state
  const [shopProducts, setShopProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [shopPage, setShopPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch New Arrivals (newest 4 products) for home page
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await productService.getProducts({ page: 1, limit: 4, sort: 'newest' });
        setNewArrivals(response.products || []);
      } catch (err) {
        console.error('Error fetching home page products:', err);
      }
    };
    fetchNewArrivals();
  }, []);

  // Fetch Shop Products on filter/search/sort change
  useEffect(() => {
    const fetchShopProducts = async () => {
      setLoading(true);
      try {
        const data = await productService.getProducts({
          page: shopPage,
          limit: 8,
          category: categoryFilter,
          search: searchQuery,
          sort: sortBy
        });
        setShopProducts(data.products || []);
        setTotalPages(data.pagination?.totalPages || 1);
      } catch (err) {
        console.error('Error fetching shop products:', err);
      } finally {
        setLoading(false);
      }
    };
    
    // Only load if active view is collections
    if (activeTab === 'collections') {
      fetchShopProducts();
    }
  }, [activeTab, categoryFilter, searchQuery, sortBy, shopPage]);

  const handleCategoryCardClick = (catName) => {
    setCategoryFilter(catName);
    setShopPage(1);
    setActiveTab('collections');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    setCategoryFilter('All');
    setShopPage(1);
    setActiveTab('collections');
  };

  const handleSelectProduct = (product) => {
    setSelectedProductSlug(product.slug);
    setActiveTab('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductBySlug = (slug) => {
    setSelectedProductSlug(slug);
    setActiveTab('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueShopping = () => {
    setCategoryFilter('All');
    setShopPage(1);
    setActiveTab('collections');
  };

  return (
    <div className="app-wrapper">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* HOME PAGE VIEW */}
      {activeTab === 'home' && (
        <main className="home-view animate-fade-in">
          {/* Hero Banner Section */}
          <Hero onExploreClick={handleExploreClick} />

          {/* Categories Section */}
          <section className="section categories-section">
            <div className="container">
              <div className="section-header">
                <h2>Our Curated Collections</h2>
                <p>Explore girls' styles designed for comfort, trend-alignment, and absolute confidence.</p>
              </div>

              <div className="categories-grid">
                {[
                  {
                    name: 'Coordsets',
                    title: 'Coordsets Collection',
                    desc: 'Perfect matching sets for effortless styling.',
                    img: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=600&auto=format&fit=crop',
                  },
                  {
                    name: 'Dresses',
                    title: 'Dresses Collection',
                    desc: 'Flowy, elegant dresses for every occasion.',
                    img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
                  },
                  {
                    name: 'Tops & Shirts',
                    title: 'Tops & Shirts Collection',
                    desc: 'Classic silhouettes blended with modern flair.',
                    img: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=600&auto=format&fit=crop',
                  },
                  {
                    name: 'Bottoms',
                    title: 'Bottoms Collection',
                    desc: 'Tailored trousers, skirts, and relaxed fits.',
                    img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop',
                  }
                ].map((cat) => (
                  <div 
                    key={cat.name} 
                    className="category-card"
                    onClick={() => handleCategoryCardClick(cat.name)}
                  >
                    <img src={cat.img} alt={cat.title} className="category-card-img" />
                    <div className="category-card-overlay">
                      <h3>{cat.title}</h3>
                      <p>{cat.desc}</p>
                      <button className="category-card-btn">
                        View Collection <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* New Arrivals Grid Section */}
          <section className="section new-arrivals-section">
            <div className="container">
              <div className="section-header">
                <h2>New Arrivals</h2>
                <p>The freshest additions to our store, styled with a modern pink &amp; white aesthetic.</p>
              </div>

              {newArrivals.length === 0 ? (
                <div className="loader-container">
                  <div className="pink-loader"></div>
                </div>
              ) : (
                <div className="products-grid">
                  {newArrivals.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                      onSelectProduct={handleSelectProduct}
                    />
                  ))}
                </div>
              )}

              <div className="view-all-box">
                <button className="btn btn-primary" onClick={handleExploreClick}>
                  View All Products <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </section>

          {/* About Brand / Story Section */}
          <section id="about-brand" className="section about-brand-section">
            <div className="container about-container">
              <div className="about-image-side">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" 
                  alt="Inside Bhawna Closet Boutique" 
                  className="about-image"
                />
              </div>
              <div className="about-text-side">
                <span className="brand-accent-tag">ESTD. 2026</span>
                <h2>Elegant. Trendy. Confidence.</h2>
                <p>
                  At <strong>Bhawna Closet</strong>, we believe that clothes are not just garments—they are expressions of confidence. Curated specifically for girls who appreciate style, grace, and premium fabrics, our collections are handpicked to provide the perfect fit for your lifestyle.
                </p>
                <p>
                  Whether you are stepping into a business lunch with a sharp pink blazer-set, going for a picnic in our flowy pastel Sakura midi dress, or enjoying a brunch in our comfortable coordsets, we have you covered.
                </p>
                <div className="about-store-badges">
                  <div className="store-badge-card glass-card">
                    <MapPin size={20} className="badge-pink-icon" />
                    <div>
                      <h5>Physical Boutique</h5>
                      <p>M3M Urbana Sector 67, Gurgaon</p>
                    </div>
                  </div>
                  <div className="store-badge-card glass-card">
                    <InstagramIcon size={20} className="badge-pink-icon" />
                    <div>
                      <h5>Socially Active</h5>
                      <p>@bhawna_closet123</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* COLLECTIONS VIEW */}
      {activeTab === 'collections' && (
        <main className="collections-view section animate-fade-in">
          <div className="container">
            <div className="collections-banner glass-card">
              <h1>Shop Our Collections</h1>
              <p>Explore fashion-forward garments curated in our signature pink &amp; white colors.</p>
            </div>

            {/* Filter and Search Bar Row */}
            <div className="filters-row glass-card">
              
              {/* Category selector */}
              <div className="filter-group">
                <SlidersHorizontal size={18} className="filter-icon" />
                <div className="filter-tabs">
                  {['All', 'Coordsets', 'Dresses', 'Tops & Shirts', 'Bottoms'].map((cat) => (
                    <button
                      key={cat}
                      className={`filter-tab-btn ${categoryFilter === cat ? 'active' : ''}`}
                      onClick={() => { setCategoryFilter(cat); setShopPage(1); }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search input */}
              <div className="search-bar-wrapper">
                <Search size={18} className="search-input-icon" />
                <input
                  type="text"
                  placeholder="Search outfits..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setShopPage(1); }}
                />
              </div>

              {/* Sort selector */}
              <div className="sort-wrapper">
                <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setShopPage(1); }}>
                  <option value="newest">Newest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

            </div>

            {/* Products grid */}
            {loading ? (
              <div className="loader-container">
                <div className="pink-loader"></div>
              </div>
            ) : shopProducts.length === 0 ? (
              <div className="empty-results-box glass-card">
                <h3>No Outfits Found</h3>
                <p>We couldn't find any products matching your selection. Try clearing your filters or search text.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => { setCategoryFilter('All'); setSearchQuery(''); setShopPage(1); }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div>
                <p className="results-count">Showing page {shopPage} of {totalPages}</p>
                <div className="products-grid">
                  {shopProducts.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                      onSelectProduct={handleSelectProduct}
                    />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="pagination-controls">
                    <button
                      className="pagination-btn"
                      onClick={() => setShopPage(prev => Math.max(prev - 1, 1))}
                      disabled={shopPage <= 1}
                    >
                      Previous
                    </button>
                    <span className="pagination-info">Page {shopPage} of {totalPages}</span>
                    <button
                      className="pagination-btn"
                      onClick={() => setShopPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={shopPage >= totalPages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      )}

      {/* CONTACT PAGE VIEW */}
      {activeTab === 'contact' && (
        <main className="contact-view section animate-fade-in">
          <div className="container">
            <div className="collections-banner glass-card" style={{ marginBottom: '3rem' }}>
              <h1>Contact Us &amp; Visit</h1>
              <p>Find us in Sector 67 Gurgaon or send an online enquiry instantly.</p>
            </div>

            <ContactForm />

            {/* Embedded Google Map */}
            <div className="map-section-wrapper glass-card">
              <h3>Our Boutique Location</h3>
              <p className="map-desc">
                Located inside <strong>M3M Urbana</strong>, Sector 67 Gurgaon. Parking is available. Stop by and explore our fabric collections in person!
              </p>
              
              <div className="iframe-map-container">
                <iframe
                  title="Bhawna Closet location inside M3M Urbana Gurgaon"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.309062635955!2d77.06527587630737!3d28.394858975459384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d226a27aaaaab%3A0xe54d924619d9b4b0!2sM3M%20Urbana!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* USER LOGIN VIEW */}
      {activeTab === 'login' && (
        <Login
          onSwitchToSignup={() => setActiveTab('signup')}
          onLoginSuccess={() => setActiveTab('home')}
        />
      )}

      {/* USER SIGNUP VIEW */}
      {activeTab === 'signup' && (
        <Signup
          onSwitchToLogin={() => setActiveTab('login')}
          onSignupSuccess={() => setActiveTab('home')}
        />
      )}

      {/* PRODUCT DETAILS DEDICATED VIEW */}
      {activeTab === 'product-detail' && selectedProductSlug && (
        <ProductDetailPage
          productSlug={selectedProductSlug}
          onBack={() => setActiveTab('collections')}
          onSelectProduct={handleSelectProduct}
        />
      )}

      {/* SHOPPING BAG CART VIEW */}
      {activeTab === 'cart' && (
        <CartPage
          onContinueShopping={handleContinueShopping}
          onSelectProductBySlug={handleSelectProductBySlug}
        />
      )}

      {/* WISHLIST VIEW */}
      {activeTab === 'wishlist' && (
        <WishlistPage
          onContinueShopping={handleContinueShopping}
          onSelectProduct={handleSelectProduct}
        />
      )}

      {/* MY ACCOUNT PROFILE VIEW */}
      {activeTab === 'profile' && (
        <MyAccountPage />
      )}

      {/* ADMIN DASHBOARD VIEW */}
      {activeTab === 'admin' && (
        admin ? (
          <AdminDashboard />
        ) : (
          <AdminLogin onLoginSuccess={() => setActiveTab('admin')} />
        )
      )}

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* App Component specific styling */}
      <style>{`
        .app-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5rem 0;
        }
        .pink-loader {
          width: 50px;
          height: 50px;
          border: 4px solid var(--soft-pink);
          border-top-color: var(--primary-pink);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Category Section Grid */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }
        .category-card {
          position: relative;
          height: 380px;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
        }
        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }
        .category-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .category-card:hover .category-card-img {
          transform: scale(1.06);
        }
        .category-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(30, 34, 41, 0.8) 0%, rgba(30, 34, 41, 0.1) 60%, rgba(240, 84, 138, 0.15) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          color: var(--pure-white);
        }
        .category-card-overlay h3 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 0.4rem;
        }
        .category-card-overlay p {
          font-size: 0.85rem;
          color: #dee2e6;
          margin-bottom: 1.25rem;
          line-height: 1.4;
        }
        .category-card-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--primary-pink);
          color: var(--pure-white);
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .category-card:hover .category-card-btn {
          background: var(--primary-pink-hover);
        }
        
        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2rem;
        }
        .view-all-box {
          text-align: center;
          margin-top: 3.5rem;
        }
        
        /* About Section */
        .about-brand-section {
          background-color: var(--light-pink);
        }
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }
        .about-image-side {
          position: relative;
        }
        .about-image {
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          width: 100%;
          height: 480px;
          object-fit: cover;
          border: 6px solid var(--pure-white);
        }
        .about-text-side {
          display: flex;
          flex-direction: column;
        }
        .brand-accent-tag {
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          color: var(--primary-pink-dark);
          margin-bottom: 0.5rem;
        }
        .about-text-side h2 {
          font-size: 2.5rem;
          color: var(--dark-charcoal);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .about-text-side p {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .about-store-badges {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .store-badge-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }
        .badge-pink-icon {
          color: var(--primary-pink);
          flex-shrink: 0;
        }
        .store-badge-card h5 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.15rem;
        }
        .store-badge-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
        }
        
        /* Instagram grid */
        .insta-link {
          color: var(--primary-pink-dark);
          font-weight: 600;
        }
        .insta-link:hover {
          color: var(--primary-pink-hover);
          text-decoration: underline;
        }
        .insta-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
        }
        .insta-item-box {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .insta-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .insta-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(240, 84, 138, 0.4);
          color: var(--pure-white);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .insta-item-box:hover .insta-hover-overlay {
          opacity: 1;
        }
        
        /* Collections Page Styles */
        .collections-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .collections-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .collections-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
        }
        
        .filters-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          margin-bottom: 2rem;
          gap: 1.5rem;
        }
        .filter-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .filter-icon {
          color: var(--text-muted);
        }
        .filter-tabs {
          display: flex;
          gap: 0.5rem;
        }
        .filter-tab-btn {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          background: var(--cream-white);
          color: var(--dark-charcoal);
        }
        .filter-tab-btn.active {
          background: var(--primary-pink);
          color: var(--pure-white);
          border-color: var(--primary-pink);
          font-weight: 600;
        }
        .filter-tab-btn:hover:not(.active) {
          background: var(--light-pink);
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        
        .search-bar-wrapper {
          position: relative;
          flex-grow: 1;
          max-width: 320px;
        }
        .search-input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .search-bar-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.65rem 1rem 0.65rem 2.5rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
        }
        .search-bar-wrapper input:focus {
          border-color: var(--primary-pink);
        }
        
        .sort-wrapper select {
          font-family: var(--font-sans);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
          background: var(--pure-white);
          cursor: pointer;
        }
        .sort-wrapper select:focus {
          border-color: var(--primary-pink);
        }
        .results-count {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .empty-results-box {
          padding: 4rem 2rem;
          text-align: center;
        }
        .empty-results-box h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .empty-results-box p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        
        /* Pagination Controls */
        .pagination-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-top: 3.5rem;
        }
        .pagination-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          background: var(--pure-white);
        }
        .pagination-btn:hover:not(:disabled) {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
        }
        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .pagination-info {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Map Integration Wrapper */
        .map-section-wrapper {
          margin-top: 4rem;
          padding: 2.5rem;
          background-color: var(--pure-white);
        }
        .map-section-wrapper h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        .map-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }
        .iframe-map-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
        }

        /* Responsive Overrides */
        @media (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .about-text-side h2 {
            margin-top: 1.5rem;
          }
          .about-store-badges {
            text-align: left;
          }
          .insta-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .filters-row {
            flex-direction: column;
            align-items: stretch;
            padding: 1.5rem;
          }
          .search-bar-wrapper {
            max-width: 100%;
          }
        }
        @media (max-width: 576px) {
          .insta-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .filter-tabs {
            flex-wrap: wrap;
          }
          .about-store-badges {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <AppContent />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}
