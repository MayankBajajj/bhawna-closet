import React, { useState } from 'react';
import { X, Send, Check } from 'lucide-react';

export default function ProductDetailModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `Hi, I am interested in inquiring about/ordering the "${product.name}" in size S.`
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.price);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSizeClick = (size) => {
    setFormData((prev) => ({
      ...prev,
      message: `Hi, I am interested in inquiring about/ordering the "${product.name}" in size ${size}.`
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');
    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          productId: product._id
        })
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
      } else {
        setErrorMsg(data.message || 'Failed to submit inquiry.');
      }
    } catch (err) {
      setErrorMsg('Connection error. Please try calling us directly at 9266991136.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Left Column: Product Image */}
          <div className="modal-image-wrapper">
            <img src={product.image} alt={product.name} className="modal-image" />
          </div>

          {/* Right Column: Details & Inquiry Form */}
          <div className="modal-details">
            <span className="modal-category">{product.category}</span>
            <h2 className="modal-title">{product.name}</h2>
            <div className="modal-price">{formattedPrice}</div>
            
            <p className="modal-desc">{product.description}</p>

            <div className="modal-sizes-section">
              <h4>Available Sizes (Click to select)</h4>
              <div className="modal-size-list">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className="modal-size-badge"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="modal-inquiry-box">
              <h4>Instant Store Inquiry</h4>
              <p className="inquiry-subtitle">
                Submit this form to enquire about stock availability, custom fitting, or placing an order. We will reach back to you shortly!
              </p>

              {success ? (
                <div className="inquiry-success-message animate-fade-in">
                  <Check size={20} />
                  <span>Your inquiry has been successfully sent! We will contact you soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message/Special Requests"
                    required
                  ></textarea>

                  {errorMsg && <p className="inquiry-error">{errorMsg}</p>}

                  <button
                    type="submit"
                    className="btn btn-primary btn-submit-inquiry"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Send Inquiry'} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Specific CSS */}
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(30, 34, 41, 0.4);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
          overflow-y: auto;
        }
        .modal-container {
          position: relative;
          width: 100%;
          max-width: 950px;
          border-radius: 20px;
          overflow: hidden;
          background: var(--pure-white);
          max-height: 90vh;
          overflow-y: auto;
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .modal-close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--light-pink);
          color: var(--primary-pink-dark);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .modal-close-btn:hover {
          background: var(--primary-pink);
          color: var(--pure-white);
        }
        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
        }
        
        .modal-image-wrapper {
          height: 100%;
          min-height: 480px;
          background: var(--light-pink);
        }
        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .modal-details {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }
        .modal-category {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--primary-pink);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .modal-title {
          font-size: 2rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }
        .modal-price {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
          margin-bottom: 1.25rem;
        }
        .modal-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .modal-sizes-section {
          margin-bottom: 1.75rem;
        }
        .modal-sizes-section h4 {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }
        .modal-size-list {
          display: flex;
          gap: 0.5rem;
        }
        .modal-size-badge {
          border: 1px solid var(--border-light);
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 6px;
          background: var(--cream-white);
          color: var(--dark-charcoal);
        }
        .modal-size-badge:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
        }
        
        .modal-inquiry-box {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .modal-inquiry-box h4 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.25rem;
        }
        .inquiry-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
          line-height: 1.4;
        }
        
        .inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .inquiry-form input, .inquiry-form textarea {
          font-family: var(--font-sans);
          padding: 0.7rem 0.9rem;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          outline: none;
          font-size: 0.85rem;
          transition: border var(--transition-fast);
        }
        .inquiry-form input:focus, .inquiry-form textarea:focus {
          border-color: var(--primary-pink);
          background: var(--cream-white);
        }
        .btn-submit-inquiry {
          padding: 0.65rem 1.5rem;
          font-size: 0.85rem;
          border-radius: 8px;
          align-self: flex-start;
          gap: 0.4rem;
        }
        .inquiry-success-message {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #d4edda;
          color: #155724;
          padding: 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid #c3e6cb;
        }
        .inquiry-error {
          font-size: 0.8rem;
          color: red;
          font-weight: 500;
        }

        /* Responsive Modal */
        @media (max-width: 850px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-image-wrapper {
            height: 300px;
            min-height: auto;
          }
          .modal-details {
            padding: 1.5rem;
          }
          .modal-container {
            max-height: 95vh;
          }
        }
      `}</style>
    </div>
  );
}
