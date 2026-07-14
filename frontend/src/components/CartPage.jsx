import React, { useState } from 'react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Check, AlertCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { orderService } from '../services/orderService';
import { request } from '../services/api';

export default function CartPage({ onContinueShopping, onSelectProductBySlug }) {
  const { user } = useAuth();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  
  // Checkout Steps: 'cart', 'checkout', 'success'
  const [step, setStep] = useState('cart');
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderError, setOrderError] = useState('');
  
  // Placed Order Details
  const [placedOrder, setPlacedOrder] = useState(null);

  // Address Form State
  const [addressForm, setAddressForm] = useState({
    name: user ? user.name : '',
    phone: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'COD'
  });

  const cartTotal = getCartTotal();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressForm(prev => ({ ...prev, [name]: value }));
  };

  const handleQtyChange = async (item, newQty) => {
    const productId = item.productId._id || item.productId;
    try {
      await updateQuantity(productId, item.size, newQty);
    } catch (err) {
      alert(err.message || 'Failed to update quantity');
    }
  };

  const handleRemove = async (item) => {
    const productId = item.productId._id || item.productId;
    await removeFromCart(productId, item.size);
  };

  const handleProceedToCheckout = () => {
    if (!user) {
      window.location.hash = '#login';
      return;
    }
    setOrderError('');
    setStep('checkout');
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!addressForm.name || !addressForm.phone || !addressForm.street || !addressForm.city || !addressForm.state || !addressForm.pincode) {
      setOrderError('Please fill in all shipping details.');
      return;
    }

    setCheckingOut(true);
    setOrderError('');

    const formattedAddress = `${addressForm.name}, Phone: ${addressForm.phone}, Address: ${addressForm.street}, ${addressForm.city}, ${addressForm.state} - ${addressForm.pincode}`;

    const orderData = {
      items: cartItems.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity,
        price: item.productId.discountPrice || item.productId.price,
        size: item.size,
        color: item.color || '',
        name: item.productId.name
      })),
      totalAmount: cartTotal,
      shippingAddress: formattedAddress,
      paymentMethod: addressForm.paymentMethod
    };

    try {
      if (addressForm.paymentMethod === 'COD') {
        const response = await orderService.createOrder(orderData);
        setPlacedOrder(response.order);
        clearCart();
        setStep('success');
      } else {
        // Online Payment Flow (Razorpay)
        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
          throw new Error('Failed to load Razorpay SDK. Please check your internet connection.');
        }

        // 1. Create Razorpay order on backend
        const rzpOrder = await request('/payments/razorpay/order', {
          method: 'POST',
          body: JSON.stringify({
            items: orderData.items,
            totalAmount: orderData.totalAmount,
            shippingAddress: orderData.shippingAddress
          })
        }, false);

        // 2. Open Razorpay Modal
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_live_TDIymjqPZZxw53',
          amount: rzpOrder.amount,
          currency: rzpOrder.currency,
          name: 'Bhawna Closet',
          description: 'Secure Payment for your Order',
          order_id: rzpOrder.id,
          handler: async function (response) {
            try {
              setCheckingOut(true);
              setOrderError('Verifying your payment, please do not close this window...');
              
              // 3. Verify Payment on Backend
              const verifyRes = await request('/payments/razorpay/verify', {
                method: 'POST',
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  shippingDetails: {
                    shippingAddress: orderData.shippingAddress,
                    items: orderData.items
                  }
                })
              }, false);

              setPlacedOrder(verifyRes.order);
              clearCart();
              setStep('success');
            } catch (err) {
              setOrderError(err.message || 'Payment verification failed. Please contact support.');
            } finally {
              setCheckingOut(false);
            }
          },
          prefill: {
            name: addressForm.name,
            contact: addressForm.phone,
            email: user.email
          },
          theme: {
            color: '#f0548a'
          },
          modal: {
            ondismiss: function() {
              setCheckingOut(false);
              setOrderError('Payment cancelled by user.');
            }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (resp) {
          setOrderError(`Payment failed: ${resp.error.description || 'Unknown error'}`);
          setCheckingOut(false);
        });
        rzp.open();
      }
    } catch (err) {
      setOrderError(err.message || 'Failed to place order. Please try again.');
      setCheckingOut(false);
    }
  };

  return (
    <main className="cart-view section animate-fade-in">
      <div className="container">
        
        {/* Step 1: Not Logged In */}
        {!user && (
          <div className="empty-cart-card glass-card">
            <ShoppingBag size={64} className="empty-icon" />
            <h2>Login Required</h2>
            <p>Please log in to your account to manage your shopping cart and place orders.</p>
            <button className="btn btn-primary" onClick={() => window.location.hash = '#login'}>
              Log In Now <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* Step 2: Checkout Success */}
        {user && step === 'success' && placedOrder && (
          <div className="checkout-success-card glass-card">
            <div className="success-icon-circle">
              <Check size={44} />
            </div>
            <h2>Order Placed Successfully!</h2>
            <p className="success-sub">Thank you for shopping with Bhawna Closet. Your order is pending verification.</p>
            
            <div className="order-details-box">
              <div className="detail-row">
                <span>Order ID:</span>
                <strong style={{ wordBreak: 'break-all' }}>{placedOrder._id}</strong>
              </div>
              <div className="detail-row">
                <span>Total Amount:</span>
                <strong className="pink-text">
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(placedOrder.totalAmount)}
                </strong>
              </div>
              <div className="detail-row">
                <span>Payment Method:</span>
                <strong>{placedOrder.paymentMethod} (Pending Verification)</strong>
              </div>
              <div className="detail-row">
                <span>Shipping Address:</span>
                <span className="address-text">{placedOrder.shippingAddress}</span>
              </div>
              <div className="detail-row">
                <span>Order Status:</span>
                <span className="status-badge-pending">Pending Approval</span>
              </div>
            </div>

            <p className="status-note">Our admin will review your order. You can check the approval status in your Account History.</p>

            <button className="btn btn-primary" onClick={onContinueShopping}>
              Continue Shopping <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* Step 3: Cart is Empty */}
        {user && step !== 'success' && cartItems.length === 0 && (
          <div className="empty-cart-card glass-card">
            <ShoppingBag size={52} className="empty-icon" />
            <h2>Your Shopping Cart is Empty</h2>
            <p>You haven't added any gorgeous coordinates or elegant Sakura dresses to your bag yet.</p>
            <button className="btn btn-primary" onClick={onContinueShopping}>
              Shop Collections <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* Step 4: Cart Review List */}
        {user && step === 'cart' && cartItems.length > 0 && (
          <div className="cart-content-wrapper">
            <div className="cart-banner glass-card">
              <h1>Your Shopping Cart</h1>
              <p>Review items in your shopping bag before submitting details.</p>
            </div>

            <div className="cart-grid">
              {/* Items List */}
              <div className="cart-items-panel">
                {cartItems.map((item, idx) => {
                  const product = item.productId;
                  if (!product) return null;

                  const singlePrice = product.discountPrice || product.price;
                  const formattedSinglePrice = new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0
                  }).format(singlePrice);

                  const formattedSubtotal = new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0
                  }).format(singlePrice * item.quantity);

                  // size-specific stock limit
                  const sizeStockInfo = product.sizes.find(s => s.size === item.size);
                  const maxStock = sizeStockInfo ? sizeStockInfo.stock : 0;

                  return (
                    <div key={`${product._id}-${item.size}-${idx}`} className="cart-item-card glass-card">
                      <div className="item-image-wrapper" onClick={() => onSelectProductBySlug(product.slug)}>
                        <img src={product.image} alt={product.name} className="item-image" />
                      </div>

                      <div className="item-details">
                        <h3 className="item-name" onClick={() => onSelectProductBySlug(product.slug)}>
                          {product.name}
                        </h3>
                        <div className="item-meta">
                          <span>Size: <strong>{item.size}</strong></span>
                          {item.color && <span>Color: <strong>{item.color}</strong></span>}
                          <span>SKU: {product.sku}</span>
                        </div>
                        <div className="item-price-info">
                          <span className="single-price">{formattedSinglePrice}</span>
                          <span className="price-multiplier">x {item.quantity}</span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="item-qty-controls">
                        <button
                          className="qty-btn"
                          onClick={() => handleQtyChange(item, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => handleQtyChange(item, item.quantity + 1)}
                          disabled={item.quantity >= maxStock}
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Total price & remove */}
                      <div className="item-total-col">
                        <span className="subtotal-value">{formattedSubtotal}</span>
                        <button className="remove-item-btn" onClick={() => handleRemove(item)} title="Remove item">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Checkout Summary panel */}
              <div className="cart-summary-panel glass-card">
                <h3>Order Summary</h3>
                <div className="summary-rows">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(cartTotal)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span className="shipping-value">Free Shipping</span>
                  </div>
                  <div className="summary-row divider">
                    <span>Estimated Total</span>
                    <span className="total-value">
                      {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(cartTotal)}
                    </span>
                  </div>
                </div>

                <div className="checkout-note">
                  <AlertCircle size={16} className="note-icon" />
                  <span>Shipping is free! Click checkout to enter shipping address details.</span>
                </div>

                <button className="btn btn-primary btn-checkout" onClick={handleProceedToCheckout}>
                  Proceed to Checkout <ArrowRight size={18} />
                </button>

                <button className="btn-continue-shopping-text" onClick={onContinueShopping}>
                  Or Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Checkout Shipping Form & Payment */}
        {user && step === 'checkout' && cartItems.length > 0 && (
          <div className="checkout-content-wrapper">
            <button className="back-link-btn" onClick={() => setStep('cart')} style={{ marginBottom: '2rem' }}>
              <ArrowLeft size={18} /> Back to Bag
            </button>

            <div className="cart-banner glass-card" style={{ marginBottom: '3rem' }}>
              <h1>Delivery &amp; Payment Details</h1>
              <p>Please enter your shipping address and select a payment method.</p>
            </div>

            {orderError && (
              <div className="order-error-alert">
                <AlertCircle size={18} />
                <span>{orderError}</span>
              </div>
            )}

            <form onSubmit={handlePlaceOrder} className="checkout-grid">
              {/* Shipping Form & Payment */}
              <div className="checkout-form-panel glass-card">
                <h3>Shipping Address</h3>
                
                <div className="form-row-double">
                  <div className="checkout-field">
                    <label htmlFor="chk-name">Full Name</label>
                    <input
                      id="chk-name"
                      type="text"
                      name="name"
                      value={addressForm.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Bhawna Bajaj"
                      required
                    />
                  </div>

                  <div className="checkout-field">
                    <label htmlFor="chk-phone">Phone Number</label>
                    <input
                      id="chk-phone"
                      type="tel"
                      name="phone"
                      value={addressForm.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit mobile number"
                      required
                    />
                  </div>
                </div>

                <div className="checkout-field">
                  <label htmlFor="chk-street">Street Address &amp; House/Flat No.</label>
                  <input
                    id="chk-street"
                    type="text"
                    name="street"
                    value={addressForm.street}
                    onChange={handleInputChange}
                    placeholder="Apartment, building, street address"
                    required
                  />
                </div>

                <div className="form-row-triple">
                  <div className="checkout-field">
                    <label htmlFor="chk-city">City</label>
                    <input
                      id="chk-city"
                      type="text"
                      name="city"
                      value={addressForm.city}
                      onChange={handleInputChange}
                      placeholder="Gurgaon"
                      required
                    />
                  </div>

                  <div className="checkout-field">
                    <label htmlFor="chk-state">State</label>
                    <input
                      id="chk-state"
                      type="text"
                      name="state"
                      value={addressForm.state}
                      onChange={handleInputChange}
                      placeholder="Haryana"
                      required
                    />
                  </div>

                  <div className="checkout-field">
                    <label htmlFor="chk-pincode">Pin Code</label>
                    <input
                      id="chk-pincode"
                      type="text"
                      name="pincode"
                      value={addressForm.pincode}
                      onChange={handleInputChange}
                      placeholder="122018"
                      required
                    />
                  </div>
                </div>

                <hr className="checkout-hr" />

                <h3>Payment Options</h3>
                <div className="payment-options-list">
                  <label className={`payment-option-label ${addressForm.paymentMethod === 'COD' ? 'active-payment' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="COD"
                      checked={addressForm.paymentMethod === 'COD'}
                      onChange={handleInputChange}
                    />
                    <div className="payment-label-text">
                      <strong>Cash on Delivery (COD)</strong>
                      <span>Pay with cash when your outfit is delivered.</span>
                    </div>
                  </label>

                  <label className={`payment-option-label ${addressForm.paymentMethod === 'Online' ? 'active-payment' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Online"
                      checked={addressForm.paymentMethod === 'Online'}
                      onChange={handleInputChange}
                    />
                    <div className="payment-label-text">
                      <strong>Online UPI / Card / NetBanking</strong>
                      <span>Pay securely online via Razorpay.</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Side Summary */}
              <div className="cart-summary-panel glass-card">
                <h3>Summary &amp; Items</h3>
                
                <div className="checkout-items-preview-list">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="checkout-item-preview-row">
                      <span className="item-prev-name">{item.productId.name} ({item.size})</span>
                      <span className="item-prev-qty">x{item.quantity}</span>
                      <span className="item-prev-sub">
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(
                          (item.productId.discountPrice || item.productId.price) * item.quantity
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', margin: '1.25rem 0' }} />

                <div className="summary-rows" style={{ marginBottom: '1.5rem' }}>
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(cartTotal)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span className="shipping-value">Free Shipping</span>
                  </div>
                  <div className="summary-row divider">
                    <span>Final Total</span>
                    <span className="total-value">
                      {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(cartTotal)}
                    </span>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-checkout" disabled={checkingOut}>
                  {checkingOut ? 'Submitting Order...' : 'Place Order (COD)'} <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        )}

      </div>

      <style>{`
        /* Cart Page specific styles */
        .cart-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 3rem;
        }
        .cart-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
          font-family: var(--font-serif);
        }
        .cart-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
          margin: 0;
        }

        .cart-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 2.5rem;
          align-items: start;
        }

        .cart-items-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cart-item-card {
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          gap: 1.5rem;
          padding: 1.5rem;
          background: var(--pure-white);
          align-items: center;
        }

        .item-image-wrapper {
          width: 80px;
          height: 100px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid var(--border-light);
        }

        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .item-image-wrapper:hover .item-image {
          transform: scale(1.08);
        }

        .item-details {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .item-name {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--dark-charcoal);
          cursor: pointer;
          margin: 0;
        }
        .item-name:hover {
          color: var(--primary-pink);
        }

        .item-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        .item-price-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .single-price {
          font-weight: 700;
          color: var(--dark-charcoal);
          font-size: 0.95rem;
        }
        .price-multiplier {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Quantity controls */
        .item-qty-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid var(--border-light);
          border-radius: 20px;
          padding: 0.4rem 0.75rem;
          background: var(--cream-white);
        }
        .qty-btn {
          color: var(--dark-charcoal);
          padding: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qty-btn:hover:not(:disabled) {
          color: var(--primary-pink);
        }
        .qty-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .qty-value {
          font-size: 0.9rem;
          font-weight: 600;
          min-width: 20px;
          text-align: center;
          color: var(--dark-charcoal);
        }

        /* Total column */
        .item-total-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
          min-width: 100px;
        }
        .subtotal-value {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--primary-pink-dark);
        }
        .remove-item-btn {
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }
        .remove-item-btn:hover {
          color: #dc3545;
        }

        /* Summary panel */
        .cart-summary-panel {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .cart-summary-panel h3 {
          font-size: 1.4rem;
          color: var(--dark-charcoal);
          margin: 0;
          margin-bottom: 1.5rem;
          border-bottom: 1px dashed var(--border-light);
          padding-bottom: 1rem;
          font-family: var(--font-serif);
        }
        .summary-rows {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .summary-row.divider {
          border-top: 1px solid var(--border-light);
          padding-top: 1.25rem;
          margin-top: 0.5rem;
        }
        .shipping-value {
          color: #28a745;
          font-weight: 600;
        }
        .total-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--dark-charcoal);
        }

        .checkout-note {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 1.5rem 0;
          background: var(--light-pink);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-pink);
        }
        .note-icon {
          color: var(--primary-pink);
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .btn-checkout {
          width: 100%;
          padding: 1rem;
          border-radius: 30px;
          font-size: 1rem;
        }

        .btn-continue-shopping-text {
          width: 100%;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
          margin-top: 1rem;
          transition: color var(--transition-fast);
        }
        .btn-continue-shopping-text:hover {
          color: var(--primary-pink-hover);
          text-decoration: underline;
        }

        /* Empty Cart View */
        .empty-cart-card {
          text-align: center;
          padding: 5rem 2rem;
          max-width: 600px;
          margin: 4rem auto;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .empty-icon {
          color: var(--primary-pink);
        }
        .empty-cart-card h2 {
          font-size: 2rem;
          color: var(--dark-charcoal);
          margin: 0;
          font-family: var(--font-serif);
        }
        .empty-cart-card p {
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* Success Card */
        .checkout-success-card {
          max-width: 650px;
          margin: 3rem auto;
          padding: 3.5rem;
          text-align: center;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .success-icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #e2f9e9;
          color: #28a745;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #a3e8b4;
        }
        .checkout-success-card h2 {
          font-size: 2.2rem;
          color: #28a745;
          margin: 0;
          font-family: var(--font-serif);
        }
        .success-sub {
          color: var(--text-muted);
          font-size: 1rem;
          margin: 0;
        }
        .order-details-box {
          width: 100%;
          background: var(--cream-white);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin: 0.5rem 0;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          font-size: 0.9rem;
          gap: 1.5rem;
        }
        .detail-row span {
          color: var(--text-muted);
        }
        .detail-row strong {
          color: var(--dark-charcoal);
        }
        .pink-text {
          color: var(--primary-pink-dark) !important;
        }
        .address-text {
          text-align: right;
          max-width: 70%;
          font-weight: 500;
          color: var(--dark-charcoal);
        }
        .status-badge-pending {
          background: #fff3cd;
          color: #856404;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid #ffeeba;
        }
        .status-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
          max-width: 90%;
          margin: 0;
        }

        /* Checkout Form View */
        .order-error-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #f8d7da;
          color: #721c24;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          border: 1px solid #f5c6cb;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .checkout-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 2.5rem;
          align-items: start;
        }
        .checkout-form-panel {
          padding: 2.5rem;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .checkout-form-panel h3 {
          font-size: 1.3rem;
          color: var(--dark-charcoal);
          margin: 0;
          font-family: var(--font-serif);
        }
        .form-row-double {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .form-row-triple {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 1.5rem;
        }
        .checkout-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .checkout-field label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .checkout-field input {
          font-family: var(--font-sans);
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          outline: none;
          font-size: 0.9rem;
          background: var(--cream-white);
        }
        .checkout-field input:focus {
          border-color: var(--primary-pink);
          background: var(--pure-white);
        }

        .checkout-hr {
          border: none;
          border-top: 1px solid var(--border-light);
          margin: 0.5rem 0;
        }

        /* Payment selection */
        .payment-options-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .payment-option-label {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          cursor: pointer;
          background: var(--cream-white);
          transition: all var(--transition-fast);
        }
        .payment-option-label input[type="radio"] {
          margin-top: 0.3rem;
          accent-color: var(--primary-pink);
        }
        .payment-option-label.active-payment {
          border-color: var(--primary-pink);
          background: var(--light-pink);
        }
        .payment-label-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .payment-label-text strong {
          font-size: 0.95rem;
          color: var(--dark-charcoal);
        }
        .payment-label-text span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .disabled-payment-option {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Items Preview List on Side */
        .checkout-items-preview-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          max-height: 250px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        .checkout-item-preview-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          gap: 1rem;
        }
        .item-prev-name {
          color: var(--dark-charcoal);
          font-weight: 500;
          flex-grow: 1;
        }
        .item-prev-qty {
          color: var(--text-muted);
        }
        .item-prev-sub {
          color: var(--dark-charcoal);
          font-weight: 600;
        }

        /* Back to bag button */
        .back-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
          transition: transform var(--transition-fast);
        }
        .back-link-btn:hover {
          transform: translateX(-4px);
        }

        @media (max-width: 992px) {
          .cart-grid, .checkout-grid {
            grid-template-columns: 1fr;
          }
          .cart-item-card {
            grid-template-columns: auto 1fr;
            gap: 1.25rem;
          }
          .item-qty-controls {
            grid-row: 2;
            grid-column: 1 / span 2;
            width: fit-content;
          }
          .item-total-col {
            grid-row: 2;
            grid-column: 2;
            align-items: flex-end;
          }
        }
        @media (max-width: 576px) {
          .form-row-double, .form-row-triple {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .cart-banner {
            padding: 2rem 1.25rem !important;
            margin-bottom: 1.5rem !important;
          }
          .cart-banner h1 {
            font-size: 1.8rem !important;
          }
          .cart-summary-panel, .checkout-form-panel {
            padding: 1.25rem !important;
          }
          .checkout-success-card {
            padding: 1.5rem 1rem !important;
          }
          .cart-item-card {
            padding: 1rem !important;
            gap: 1rem !important;
          }
          .item-name {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </main>
  );
}
