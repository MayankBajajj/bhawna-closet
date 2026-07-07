import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit, Save, X, Search, Check, AlertTriangle, AlertCircle, ShoppingBag, Eye, Users, FileText, ArrowRight, Upload } from 'lucide-react';
import { adminService } from '../services/adminService';
import { productService } from '../services/productService';

export default function AdminDashboard() {
  const [activeSubTab, setActiveSubTab] = useState('overview'); // overview, products, form, orders
  const [stats, setStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(true);
  
  // Orders management states
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [ordersSearch, setOrdersSearch] = useState('');
  const [ordersFilter, setOrdersFilter] = useState('All');

  // Products listing
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1 });
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [productsSearch, setProductsSearch] = useState('');
  const [productsPage, setProductsPage] = useState(1);
  const [productsCategory, setProductsCategory] = useState('All');

  // Add/Edit Product form state
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    sku: '',
    name: '',
    brand: '',
    description: '',
    price: '',
    discountPrice: '',
    category: 'Coordsets',
    isFeatured: false,
    isNewArrival: false
  });

  // Size stock inputs
  const [sizeStock, setSizeStock] = useState({
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0
  });

  // Color inputs
  const [colorsList, setColorsList] = useState([]);
  const [colorInput, setColorInput] = useState('');

  // Image files state
  const [imageFiles, setImageFiles] = useState([]); // File objects
  const [imagePreviews, setImagePreviews] = useState([]); // object URLs for new files
  const [existingImages, setExistingImages] = useState([]); // URLs from database

  const categoriesList = ['Coordsets', 'Dresses', 'Tops & Shirts', 'Bottoms'];

  // Fetch Stats
  const fetchStats = async () => {
    setLoadingStats(true);
    try {
      const data = await adminService.getStats();
      setStats(data);
    } catch (err) {
      console.error('Error fetching dashboard stats', err);
    } finally {
      setLoadingStats(false);
    }
  };

  // Fetch Products
  const fetchProducts = async () => {
    setLoadingProducts(true);
    try {
      const data = await productService.getProducts({
        page: productsPage,
        limit: 10,
        category: productsCategory,
        search: productsSearch
      });
      setProducts(data.products || []);
      setPagination(data.pagination || { currentPage: 1, totalPages: 1 });
    } catch (err) {
      console.error('Error fetching admin products list', err);
    } finally {
      setLoadingProducts(false);
    }
  };

  // Fetch all orders
  const fetchOrders = async () => {
    setLoadingOrders(true);
    try {
      const data = await adminService.getOrders();
      setOrders(data || []);
    } catch (err) {
      console.error('Error fetching admin orders list', err);
    } finally {
      setLoadingOrders(false);
    }
  };

  // Change order status
  const handleOrderStatusUpdate = async (orderId, newStatus) => {
    if (window.confirm(`Are you sure you want to mark this order as ${newStatus}?`)) {
      try {
        await adminService.updateOrderStatus(orderId, newStatus);
        alert(`Order status successfully updated to "${newStatus}"`);
        fetchOrders();
      } catch (err) {
        alert(err.message || 'Failed to update order status');
      }
    }
  };

  useEffect(() => {
    if (activeSubTab === 'overview') {
      fetchStats();
    } else if (activeSubTab === 'products') {
      fetchProducts();
    } else if (activeSubTab === 'orders') {
      fetchOrders();
    }
  }, [activeSubTab, productsPage, productsCategory]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setProductsPage(1);
    fetchProducts();
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSizeStockChange = (e) => {
    const { name, value } = e.target;
    setSizeStock(prev => ({
      ...prev,
      [name]: parseInt(value) || 0
    }));
  };

  // Add Color Chip
  const handleAddColor = () => {
    if (colorInput.trim() && !colorsList.includes(colorInput.trim())) {
      setColorsList([...colorsList, colorInput.trim()]);
      setColorInput('');
    }
  };

  const handleRemoveColor = (colorToRemove) => {
    setColorsList(colorsList.filter(c => c !== colorToRemove));
  };

  // Image upload pick handler
  const handleImageFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Check total limit (existing + new files already picked + new selection)
    const totalCount = existingImages.length + imageFiles.length + selectedFiles.length;
    if (totalCount > 4) {
      setFormError('A product can support a maximum of 4 images');
      return;
    }

    setFormError('');
    setImageFiles(prev => [...prev, ...selectedFiles]);

    // Create object URLs for preview
    const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
    setImagePreviews(prev => [...prev, ...newPreviews]);
  };

  const handleRemoveNewImage = (idxToRemove) => {
    setImageFiles(imageFiles.filter((_, idx) => idx !== idxToRemove));
    URL.revokeObjectURL(imagePreviews[idxToRemove]);
    setImagePreviews(imagePreviews.filter((_, idx) => idx !== idxToRemove));
  };

  const handleRemoveExistingImage = (urlToRemove) => {
    setExistingImages(existingImages.filter(url => url !== urlToRemove));
  };

  const openAddForm = () => {
    setEditMode(false);
    setEditProductId(null);
    setFormError('');
    setFormSuccess(false);
    setFormData({
      sku: '',
      name: '',
      brand: '',
      description: '',
      price: '',
      discountPrice: '',
      category: 'Coordsets',
      isFeatured: false,
      isNewArrival: false
    });
    setSizeStock({ M: 0, L: 0, XL: 0, XXL: 0 });
    setColorsList([]);
    setImageFiles([]);
    setImagePreviews([]);
    setExistingImages([]);
    setActiveSubTab('form');
  };

  const openEditForm = (product) => {
    setEditMode(true);
    setEditProductId(product._id);
    setFormError('');
    setFormSuccess(false);
    setFormData({
      sku: product.sku,
      name: product.name,
      brand: product.brand || '',
      description: product.description,
      price: product.price,
      discountPrice: product.discountPrice || '',
      category: product.category,
      isFeatured: product.isFeatured || false,
      isNewArrival: product.isNewArrival || false
    });

    // Populate sizes
    const stockMap = { M: 0, L: 0, XL: 0, XXL: 0 };
    product.sizes.forEach(s => {
      stockMap[s.size] = s.stock;
    });
    setSizeStock(stockMap);

    setColorsList(product.colors || []);
    setImageFiles([]);
    setImagePreviews([]);
    setExistingImages(product.images || [product.image]);
    setActiveSubTab('form');
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product? (This will perform a soft-delete)')) {
      try {
        await adminService.deleteProduct(id);
        alert('Product deleted successfully (soft-delete)');
        fetchProducts();
      } catch (err) {
        alert(err.message || 'Failed to delete product');
      }
    }
  };

  // Submit form (multi-part form for Cloudinary upload)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess(false);

    const totalImages = existingImages.length + imageFiles.length;
    if (totalImages === 0) {
      setFormError('At least one product image is required');
      return;
    }
    if (totalImages > 4) {
      setFormError('A maximum of 4 product images is allowed');
      return;
    }

    if (formData.discountPrice && parseFloat(formData.discountPrice) >= parseFloat(formData.price)) {
      setFormError('Discount price must be lower than the original price');
      return;
    }

    setFormSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('sku', formData.sku.trim());
      payload.append('name', formData.name.trim());
      payload.append('brand', formData.brand.trim());
      payload.append('description', formData.description.trim());
      payload.append('price', formData.price);
      payload.append('category', formData.category);
      payload.append('isFeatured', formData.isFeatured);
      payload.append('isNewArrival', formData.isNewArrival);
      
      if (formData.discountPrice) {
        payload.append('discountPrice', formData.discountPrice);
      }

      // Convert sizes stock levels to sizes array: [{size: 'M', stock: 10}]
      const sizesArray = Object.keys(sizeStock).map(sz => ({
        size: sz,
        stock: sizeStock[sz]
      }));
      payload.append('sizes', JSON.stringify(sizesArray));

      // Colors
      payload.append('colors', JSON.stringify(colorsList));

      // Existing images to keep (for updates)
      if (editMode) {
        payload.append('existingImages', JSON.stringify(existingImages));
      }

      // Append new files
      imageFiles.forEach(file => {
        payload.append('images', file);
      });

      if (editMode) {
        await adminService.updateProduct(editProductId, payload);
      } else {
        await adminService.createProduct(payload);
      }

      setFormSuccess(true);
      setTimeout(() => {
        setActiveSubTab('products');
        setFormSuccess(false);
      }, 1500);

    } catch (err) {
      setFormError(err.message || 'Failed to save product');
    } finally {
      setFormSubmitting(false);
    }
  };

  const filteredOrders = orders.filter(order => {
    const customerName = order.userId ? order.userId.name.toLowerCase() : 'guest';
    const customerEmail = order.userId ? order.userId.email.toLowerCase() : '';
    const orderId = order._id.toLowerCase();
    const query = ordersSearch.toLowerCase();
    
    const matchesSearch = 
      orderId.includes(query) ||
      customerName.includes(query) ||
      customerEmail.includes(query);

    if (ordersFilter === 'All') return matchesSearch;
    return matchesSearch && order.status === ordersFilter;
  });

  return (
    <main className="admin-view section animate-fade-in">
      <div className="container">
        
        {/* Admin Navigation Banner */}
        <div className="admin-banner glass-card">
          <h1>Admin Control Panel</h1>
          <p>Manage product catalog, check low stock alerts, and upload outfits to Cloudinary.</p>
          
          <div className="admin-nav-tabs">
            <button
              className={`admin-tab-btn ${activeSubTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveSubTab('overview')}
            >
              Overview Dashboard
            </button>
            <button
              className={`admin-tab-btn ${activeSubTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveSubTab('products')}
            >
              Product Inventory
            </button>
            <button
              className={`admin-tab-btn ${activeSubTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveSubTab('orders')}
            >
              Manage Orders
            </button>
            <button className="btn btn-primary admin-add-btn" onClick={openAddForm}>
              <Plus size={16} /> Add Product
            </button>
          </div>
        </div>

        {/* SUBTAB 1: OVERVIEW DASHBOARD */}
        {activeSubTab === 'overview' && (
          <div className="admin-content-area">
            {loadingStats ? (
              <div className="admin-loader-box"><div className="pink-loader"></div></div>
            ) : !stats ? (
              <div className="admin-error-box glass-card">Failed to load statistics.</div>
            ) : (
              <div className="stats-dashboard-layout">
                {/* Stats cards grid */}
                <div className="stats-cards-grid">
                  <div className="stat-card glass-card">
                    <ShoppingBag size={28} className="stat-icon pink" />
                    <div>
                      <h3>{stats.totalProducts}</h3>
                      <p>Total Products</p>
                    </div>
                  </div>
                  <div className="stat-card glass-card">
                    <Users size={28} className="stat-icon blue" />
                    <div>
                      <h3>{stats.totalUsers}</h3>
                      <p>Registered Customers</p>
                    </div>
                  </div>
                  <div className="stat-card glass-card">
                    <FileText size={28} className="stat-icon purple" />
                    <div>
                      <h3>{stats.totalInquiries}</h3>
                      <p>Customer Inquiries</p>
                    </div>
                  </div>
                  <div className="stat-card glass-card">
                    <Check size={28} className="stat-icon green" />
                    <div>
                      <h3>{stats.totalOrders}</h3>
                      <p>Simulated Orders</p>
                    </div>
                  </div>
                </div>

                {/* Low Stock Alerts */}
                <div className="low-stock-panel glass-card">
                  <div className="panel-header">
                    <AlertTriangle size={20} className="alert-yellow-icon" />
                    <h3>Low Inventory Alerts</h3>
                  </div>
                  <p className="panel-subtitle">Outfits with sizes that have 2 or fewer items remaining in stock.</p>

                  {stats.lowStockProducts.length === 0 ? (
                    <div className="low-stock-empty">
                      <Check size={24} className="green-check" />
                      <span>All product sizes are adequately stocked!</span>
                    </div>
                  ) : (
                    <div className="low-stock-table-wrapper">
                      <table className="stats-table">
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>SKU</th>
                            <th>Size Stocks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {stats.lowStockProducts.map(prod => (
                            <tr key={prod._id}>
                              <td className="font-semibold">{prod.name}</td>
                              <td><code className="sku-code">{prod.sku}</code></td>
                              <td>
                                <div className="stock-badges-row">
                                  {prod.sizes.map(sz => (
                                    <span 
                                      key={sz.size} 
                                      className={`stock-badge ${sz.stock === 0 ? 'out-badge' : sz.stock <= 2 ? 'low-badge' : 'ok-badge'}`}
                                    >
                                      {sz.size}: {sz.stock}
                                    </span>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUBTAB 2: PRODUCT INVENTORY LISTING */}
        {activeSubTab === 'products' && (
          <div className="admin-content-area">
            {/* Filter and Search controls */}
            <div className="admin-filters-bar glass-card">
              <form onSubmit={handleSearchSubmit} className="admin-search-wrapper">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search products by name/SKU..."
                  value={productsSearch}
                  onChange={(e) => setProductsSearch(e.target.value)}
                />
                <button type="submit" className="btn btn-primary btn-search-go">Go</button>
              </form>

              <div className="admin-category-selector">
                <select value={productsCategory} onChange={(e) => { setProductsPage(1); setProductsCategory(e.target.value); }}>
                  <option value="All">All Categories</option>
                  {categoriesList.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {loadingProducts ? (
              <div className="admin-loader-box"><div className="pink-loader"></div></div>
            ) : products.length === 0 ? (
              <div className="empty-results-box glass-card">
                <h3>No Inventory Found</h3>
                <p>We couldn't find any products matching your query.</p>
              </div>
            ) : (
              <div className="products-table-panel glass-card">
                <div className="table-responsive">
                  <table className="inventory-table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>SKU</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Size Stocks</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(prod => (
                        <tr key={prod._id}>
                          <td>
                            <img src={prod.image} alt={prod.name} className="table-thumb" />
                          </td>
                          <td>
                            <div className="table-prod-info">
                              <span className="prod-name-title">{prod.name}</span>
                              <div className="prod-tags">
                                {prod.isFeatured && <span className="small-tag featured">Featured</span>}
                                {prod.isNewArrival && <span className="small-tag new-arr">New</span>}
                              </div>
                            </div>
                          </td>
                          <td><code className="sku-code">{prod.sku}</code></td>
                          <td>{prod.category}</td>
                          <td>
                            {prod.discountPrice ? (
                              <div className="table-price-col">
                                <span className="disc-price">₹{prod.discountPrice}</span>
                                <span className="orig-price-strike">₹{prod.price}</span>
                              </div>
                            ) : (
                              <span>₹{prod.price}</span>
                            )}
                          </td>
                          <td>
                            <div className="stock-badges-row">
                              {prod.sizes.map(sz => (
                                <span 
                                  key={sz.size} 
                                  className={`stock-badge ${sz.stock === 0 ? 'out-badge' : sz.stock <= 2 ? 'low-badge' : 'ok-badge'}`}
                                >
                                  {sz.size}: {sz.stock}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td>
                            <div className="table-actions-row">
                              <button className="action-icon-btn edit" onClick={() => openEditForm(prod)} title="Edit product">
                                <Edit size={16} />
                              </button>
                              <button className="action-icon-btn delete" onClick={() => handleDeleteProduct(prod._id)} title="Delete product">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination footer */}
                {pagination.totalPages > 1 && (
                  <div className="pagination-wrapper">
                    <button
                      disabled={productsPage <= 1}
                      onClick={() => setProductsPage(prev => prev - 1)}
                      className="pagination-btn"
                    >
                      Prev
                    </button>
                    <span className="pagination-text">Page {pagination.currentPage} of {pagination.totalPages}</span>
                    <button
                      disabled={productsPage >= pagination.totalPages}
                      onClick={() => setProductsPage(prev => prev + 1)}
                      className="pagination-btn"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* SUBTAB 3: ADD/EDIT PRODUCT FORM */}
        {activeSubTab === 'form' && (
          <div className="admin-content-area">
            <div className="form-container-card glass-card">
              <div className="card-header">
                <h2>{editMode ? `Edit Product: ${formData.name}` : 'Add New Clothing Product'}</h2>
                <button className="edit-btn" onClick={() => setActiveSubTab('products')}>Cancel</button>
              </div>

              {formSuccess && (
                <div className="alert alert-success animate-fade-in">
                  <Check size={18} /> Product saved successfully! Redirecting...
                </div>
              )}

              {formError && (
                <div className="alert alert-danger animate-fade-in">
                  <AlertTriangle size={18} /> {formError}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="admin-input-form">
                
                {/* Basic Details Row */}
                <div className="form-fields-grid">
                  <div className="form-group">
                    <label>Product Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Blossom Satin Midi Dress"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>SKU Code *</label>
                    <input
                      type="text"
                      name="sku"
                      value={formData.sku}
                      onChange={handleFormChange}
                      placeholder="e.g. BC-DRESS-BLOSSOM"
                      required
                    />
                  </div>
                </div>

                <div className="form-fields-grid">
                  <div className="form-group">
                    <label>Category *</label>
                    <select name="category" value={formData.category} onChange={handleFormChange}>
                      {categoriesList.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Brand (Optional)</label>
                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleFormChange}
                      placeholder="e.g. Bhawna Closet Boutique"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleFormChange}
                    placeholder="Provide details about fabrics, texture, styling inspiration, etc..."
                    required
                  ></textarea>
                </div>

                {/* Prices Grid */}
                <div className="form-fields-grid">
                  <div className="form-group">
                    <label>Original Price (INR) *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleFormChange}
                      placeholder="e.g. 2999"
                      min="0"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Discount Price (INR, Optional)</label>
                    <input
                      type="number"
                      name="discountPrice"
                      value={formData.discountPrice}
                      onChange={handleFormChange}
                      placeholder="e.g. 2499"
                      min="0"
                    />
                  </div>
                </div>

                {/* Sizes stock configuration */}
                <div className="sizes-stock-section">
                  <h4>Inventory Stock Levels (Sizes M to XXL) *</h4>
                  <p className="section-note">Specify item stocks for size configuration.</p>
                  
                  <div className="sizes-inputs-grid">
                    {['M', 'L', 'XL', 'XXL'].map(sz => (
                      <div key={sz} className="size-stock-input-box">
                        <label>Size {sz}</label>
                        <input
                          type="number"
                          name={sz}
                          value={sizeStock[sz]}
                          onChange={handleSizeStockChange}
                          min="0"
                          required
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colors section */}
                <div className="colors-input-section">
                  <h4>Color Variants</h4>
                  <p className="section-note">Type color and click add to insert color tags.</p>
                  <div className="colors-adder-row">
                    <input
                      type="text"
                      placeholder="e.g. Blush Pink"
                      value={colorInput}
                      onChange={(e) => setColorInput(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddColor(); } }}
                    />
                    <button type="button" className="btn btn-outline" onClick={handleAddColor}>Add</button>
                  </div>
                  {colorsList.length > 0 && (
                    <div className="colors-chips-list">
                      {colorsList.map(c => (
                        <span key={c} className="color-chip">
                          {c} <button type="button" onClick={() => handleRemoveColor(c)}><X size={12} /></button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Toggles */}
                <div className="form-toggles-row">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="isFeatured"
                      checked={formData.isFeatured}
                      onChange={handleFormChange}
                    />
                    <span>Featured Product</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="isNewArrival"
                      checked={formData.isNewArrival}
                      onChange={handleFormChange}
                    />
                    <span>New Arrival</span>
                  </label>
                </div>

                {/* Images Upload Section */}
                <div className="images-uploader-section">
                  <h4>Product Images (Max 4) *</h4>
                  <p className="section-note">Choose files to upload to Cloudinary. Accepted formats: JPG, PNG, WEBP.</p>

                  <div className="uploader-picker-row">
                    <label className="picker-btn btn btn-outline">
                      <Upload size={16} /> Choose Images
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageFileChange}
                        disabled={existingImages.length + imageFiles.length >= 4}
                        style={{ display: 'none' }}
                      />
                    </label>
                    <span className="total-images-counter">
                      Selected: {existingImages.length + imageFiles.length} of 4
                    </span>
                  </div>

                  {/* Previews grid */}
                  {(existingImages.length > 0 || imagePreviews.length > 0) && (
                    <div className="form-previews-grid">
                      {/* Existing image previews */}
                      {existingImages.map((url, idx) => (
                        <div key={`existing-${idx}`} className="form-preview-card glass-card">
                          <img src={url} alt="existing preview" className="preview-img" />
                          <span className="preview-label existing">Cloud</span>
                          <button type="button" className="remove-preview-btn" onClick={() => handleRemoveExistingImage(url)}>
                            <X size={16} />
                          </button>
                        </div>
                      ))}

                      {/* New files previews */}
                      {imagePreviews.map((url, idx) => (
                        <div key={`new-${idx}`} className="form-preview-card glass-card">
                          <img src={url} alt="new upload preview" className="preview-img" />
                          <span className="preview-label local">Local</span>
                          <button type="button" className="remove-preview-btn" onClick={() => handleRemoveNewImage(idx)}>
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary btn-form-submit" disabled={formSubmitting}>
                    {formSubmitting ? 'Uploading to Cloudinary...' : 'Save Product Details'}
                  </button>
                </div>

              </form>
            </div>
          </div>
        )}

        {/* SUBTAB 4: MANAGE ORDERS */}
        {activeSubTab === 'orders' && (
          <div className="admin-content-area animate-fade-in">
            <div className="orders-dashboard-panel glass-card">
              <div className="panel-header-row">
                <h2>Customer Orders</h2>
                
                {/* Search & Filters */}
                <div className="orders-filters-controls">
                  <div className="admin-search-wrapper" style={{ maxWidth: '280px', position: 'relative' }}>
                    <Search size={18} className="search-icon-field" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                      type="text"
                      placeholder="Search Order ID or Name..."
                      value={ordersSearch}
                      onChange={(e) => setOrdersSearch(e.target.value)}
                      style={{ paddingLeft: '2.5rem', width: '100%' }}
                    />
                  </div>
                  
                  <select 
                    value={ordersFilter} 
                    onChange={(e) => setOrdersFilter(e.target.value)}
                    className="orders-status-select"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {loadingOrders ? (
                <div className="admin-loader-box"><div className="pink-loader"></div></div>
              ) : filteredOrders.length === 0 ? (
                <div className="empty-results-box" style={{ padding: '3rem', textAlign: 'center' }}>
                  <h3>No Orders Found</h3>
                  <p>No customer orders match your search filters.</p>
                </div>
              ) : (
                <div className="orders-list-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="stats-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Products Ordered</th>
                        <th>Amount</th>
                        <th>Payment</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredOrders.map(order => {
                        const customerName = order.userId ? order.userId.name : 'Guest User';
                        const customerEmail = order.userId ? order.userId.email : 'N/A';
                        
                        return (
                          <tr key={order._id}>
                            <td>
                              <code className="order-id-code" title={order._id}>{order._id.substring(order._id.length - 8)}</code>
                            </td>
                            <td>
                              <div className="customer-info-col">
                                <strong style={{ display: 'block', color: 'var(--dark-charcoal)' }}>{customerName}</strong>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{customerEmail}</span>
                              </div>
                            </td>
                            <td>
                              <div className="order-items-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                {order.items.map((item, idx) => (
                                  <div key={idx} className="order-item-list-row" style={{ fontSize: '0.85rem', display: 'flex', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--text-muted)' }}>{item.productId ? item.productId.name : 'Unknown Product'} ({item.size})</span>
                                    <strong style={{ color: 'var(--dark-charcoal)' }}>x{item.quantity}</strong>
                                  </div>
                                ))}
                              </div>
                            </td>
                            <td className="font-bold pink-text" style={{ fontWeight: '700', color: 'var(--primary-pink-dark)' }}>
                              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(order.totalAmount)}
                            </td>
                            <td>
                              <div className="payment-info-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                <span className="payment-method-badge" style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--dark-charcoal)' }}>{order.paymentMethod}</span>
                                <span className={`payment-status-badge ${order.paymentStatus === 'Paid' ? 'paid' : 'unpaid'}`} style={{ fontSize: '0.7rem', fontWeight: '600', color: order.paymentStatus === 'Paid' ? '#28a745' : '#dc3545' }}>
                                  {order.paymentStatus}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="address-text-col" title={order.shippingAddress} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {order.shippingAddress}
                              </div>
                            </td>
                            <td>
                              <span className={`order-status-badge badge-${order.status.toLowerCase()}`}>
                                {order.status}
                              </span>
                            </td>
                            <td>
                              <div className="order-actions-buttons-row" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {order.status === 'Pending' && (
                                  <>
                                    <button 
                                      className="order-btn-accept" 
                                      onClick={() => handleOrderStatusUpdate(order._id, 'Accepted')}
                                    >
                                      Accept
                                    </button>
                                    <button 
                                      className="order-btn-reject" 
                                      onClick={() => handleOrderStatusUpdate(order._id, 'Rejected')}
                                    >
                                      Reject
                                    </button>
                                  </>
                                )}
                                {order.status === 'Accepted' && (
                                  <button 
                                    className="order-btn-ship" 
                                    onClick={() => handleOrderStatusUpdate(order._id, 'Shipped')}
                                  >
                                    Ship Order
                                  </button>
                                )}
                                {order.status === 'Shipped' && (
                                  <button 
                                    className="order-btn-deliver" 
                                    onClick={() => handleOrderStatusUpdate(order._id, 'Delivered')}
                                  >
                                    Deliver Order
                                  </button>
                                )}
                                {['Rejected', 'Cancelled', 'Delivered'].includes(order.status) && (
                                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Completed</span>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      <style>{`
        /* Order status badges */
        .order-status-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .badge-pending { background: #fff3cd; color: #856404; border: 1px solid #ffeeba; }
        .badge-accepted { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
        .badge-rejected { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .badge-processing { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }
        .badge-shipped { background: #cce5ff; color: #004085; border: 1px solid #b8daff; }
        .badge-delivered { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .badge-cancelled { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }

        /* Order buttons */
        .order-btn-accept {
          background: #28a745;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-accept:hover { background: #218838; }
        .order-btn-reject {
          background: #dc3545;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-reject:hover { background: #c82333; }
        .order-btn-ship {
          background: #007bff;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-ship:hover { background: #0069d9; }
        .order-btn-deliver {
          background: #28a745;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-deliver:hover { background: #218838; }

        .panel-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .panel-header-row h2 {
          font-size: 1.5rem;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .orders-filters-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .orders-status-select {
          font-family: var(--font-sans);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
          background: var(--cream-white);
          cursor: pointer;
        }

        .admin-banner {
          background: linear-gradient(135deg, var(--dark-charcoal) 0%, #2b303b 100%);
          padding: 3rem;
          border-radius: 16px;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .admin-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .admin-banner p {
          font-size: 1.05rem;
          color: #adb5bd;
          margin-bottom: 2rem;
        }
        .admin-nav-tabs {
          display: flex;
          gap: 1rem;
          border-top: 1px solid #495057;
          padding-top: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .admin-tab-btn {
          padding: 0.65rem 1.25rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #ced4da;
          border-radius: 8px;
        }
        .admin-tab-btn:hover {
          color: var(--pure-white);
          background: rgba(255,255,255,0.05);
        }
        .admin-tab-btn.active {
          background: var(--primary-pink);
          color: var(--pure-white);
        }
        .admin-add-btn {
          margin-left: auto;
          padding: 0.65rem 1.25rem;
          font-size: 0.85rem;
        }
        
        /* Stats Dashboard Overview */
        .stats-dashboard-layout {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .stats-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .stat-card {
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: var(--pure-white);
        }
        .stat-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-icon.pink { background: var(--soft-pink); color: var(--primary-pink); }
        .stat-icon.blue { background: #e3f2fd; color: #1e88e5; }
        .stat-icon.purple { background: #f3e5f5; color: #8e24aa; }
        .stat-icon.green { background: #e8f5e9; color: #43a047; }
        
        .stat-card h3 {
          font-family: var(--font-sans);
          font-size: 1.8rem;
          line-height: 1.1;
          color: var(--dark-charcoal);
          margin-bottom: 0.15rem;
        }
        .stat-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }
        
        .low-stock-panel {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .panel-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.25rem;
        }
        .panel-header h3 {
          font-family: var(--font-sans);
          font-size: 1.3rem;
          color: var(--dark-charcoal);
        }
        .alert-yellow-icon {
          color: #ffc107;
        }
        .panel-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        
        .low-stock-empty {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #e2f0d9;
          color: #385723;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .low-stock-table-wrapper {
          overflow-x: auto;
        }
        .stats-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .stats-table th {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          padding: 0.75rem 1rem;
          border-bottom: 2px solid var(--border-light);
        }
        .stats-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--border-light);
          font-size: 0.9rem;
        }
        .font-semibold {
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        
        /* Stock Badges */
        .stock-badges-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .stock-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .stock-badge.out-badge { background: #f8d7da; color: #721c24; }
        .stock-badge.low-badge { background: #fff3cd; color: #856404; }
        .stock-badge.ok-badge { background: #e9ecef; color: #495057; }
        
        .sku-code {
          background: var(--light-pink);
          color: var(--primary-pink-dark);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Product Listing Subtab */
        .admin-filters-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          margin-bottom: 2rem;
          background: var(--pure-white);
          gap: 1.5rem;
        }
        .admin-search-wrapper {
          display: flex;
          align-items: center;
          position: relative;
          flex-grow: 1;
          max-width: 480px;
        }
        .admin-search-wrapper .search-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
        }
        .admin-search-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.65rem 1rem 0.65rem 2.5rem;
          border-radius: 8px 0 0 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
        }
        .admin-search-wrapper input:focus {
          border-color: var(--primary-pink);
        }
        .btn-search-go {
          padding: 0.65rem 1.25rem;
          border-radius: 0 8px 8px 0;
          font-size: 0.85rem;
        }
        .admin-category-selector select {
          font-family: var(--font-sans);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
          cursor: pointer;
          background: var(--pure-white);
        }
        
        .products-table-panel {
          padding: 2rem;
          background: var(--pure-white);
        }
        .table-responsive {
          overflow-x: auto;
        }
        .inventory-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .inventory-table th {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 1rem;
          border-bottom: 2px solid var(--border-light);
          letter-spacing: 0.05em;
        }
        .inventory-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--border-light);
          vertical-align: middle;
          font-size: 0.9rem;
        }
        
        .table-thumb {
          width: 48px;
          height: 60px;
          object-fit: cover;
          border-radius: 4px;
          background: var(--light-pink);
        }
        .table-prod-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .prod-name-title {
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .prod-tags {
          display: flex;
          gap: 0.35rem;
        }
        .small-tag {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .small-tag.featured { background: #e3f2fd; color: #1565c0; }
        .small-tag.new-arr { background: var(--soft-pink); color: var(--primary-pink-dark); }
        
        .table-price-col {
          display: flex;
          flex-direction: column;
        }
        .disc-price { font-weight: 700; color: var(--primary-pink-dark); }
        .orig-price-strike { font-size: 0.75rem; text-decoration: line-through; color: var(--text-muted); }
        
        .table-actions-row {
          display: flex;
          gap: 0.5rem;
        }
        .action-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-light);
        }
        .action-icon-btn.edit { color: #007bff; }
        .action-icon-btn.edit:hover { background: #e6f2ff; border-color: #007bff; }
        .action-icon-btn.delete { color: #dc3545; }
        .action-icon-btn.delete:hover { background: #ffebe9; border-color: #dc3545; }
        
        /* Pagination */
        .pagination-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        .pagination-btn {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid var(--border-light);
          border-radius: 6px;
        }
        .pagination-btn:hover:not(:disabled) {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .pagination-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        
        /* Add/Edit Form styling */
        .form-container-card {
          padding: 3rem;
          background: var(--pure-white);
        }
        .admin-input-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .admin-input-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .admin-input-form label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .admin-input-form input[type="text"],
        .admin-input-form input[type="number"],
        .admin-input-form textarea,
        .admin-input-form select {
          font-family: var(--font-sans);
          padding: 0.8rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          background: var(--cream-white);
        }
        .admin-input-form input:focus,
        .admin-input-form textarea:focus,
        .admin-input-form select:focus {
          border-color: var(--primary-pink);
          background: var(--pure-white);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
        }
        
        .section-note {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          margin-top: -0.25rem;
        }
        
        /* Size stocks list */
        .sizes-stock-section {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .sizes-stock-section h4, .colors-input-section h4, .images-uploader-section h4 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.25rem;
        }
        .sizes-inputs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .size-stock-input-box {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        
        /* Colors configuration */
        .colors-input-section {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .colors-adder-row {
          display: flex;
          gap: 0.75rem;
          max-width: 320px;
        }
        .colors-adder-row input {
          flex-grow: 1;
        }
        .colors-chips-list {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.75rem;
        }
        .color-chip {
          background: var(--light-pink);
          color: var(--primary-pink-dark);
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid var(--border-pink);
        }
        .color-chip button {
          color: var(--primary-pink);
          display: flex;
          align-items: center;
        }
        
        /* Toggles */
        .form-toggles-row {
          display: flex;
          gap: 2rem;
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          cursor: pointer;
        }
        .checkbox-label input {
          width: 18px;
          height: 18px;
          accent-color: var(--primary-pink);
        }
        
        /* Image Uploader */
        .images-uploader-section {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .uploader-picker-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .picker-btn {
          cursor: pointer;
          gap: 0.5rem;
          border-radius: 8px;
          padding: 0.65rem 1.25rem;
          font-size: 0.85rem;
        }
        .total-images-counter {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        .form-previews-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .form-preview-card {
          position: relative;
          height: 140px;
          overflow: hidden;
          background: var(--light-pink);
        }
        .preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .preview-label {
          position: absolute;
          bottom: 8px;
          left: 8px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }
        .preview-label.existing { background: #343a40; color: #fff; }
        .preview-label.local { background: var(--primary-pink); color: #fff; }
        
        .remove-preview-btn {
          position: absolute;
          top: 6px;
          right: 6px;
          background: rgba(255,255,255,0.8);
          color: #dc3545;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .remove-preview-btn:hover {
          background: #dc3545;
          color: #fff;
        }
        
        .form-submit-row {
          border-top: 1px dashed var(--border-light);
          padding-top: 2rem;
          margin-top: 1rem;
        }
        .btn-form-submit {
          padding: 0.95rem 2.5rem;
          border-radius: 12px;
          font-size: 1rem;
        }
        
        .admin-loader-box {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4rem 0;
        }
        .admin-error-box {
          padding: 2rem;
          text-align: center;
          color: #dc3545;
        }
        
        @media (max-width: 768px) {
          .form-fields-grid, .sizes-inputs-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .form-previews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .admin-banner {
            padding: 2rem 1.5rem;
          }
          .form-container-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
}
