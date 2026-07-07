import React, { useState } from 'react';
import { Send, Check, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');
    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrorMsg(data.message || 'Error sending message.');
      }
    } catch (err) {
      setErrorMsg('Connection error. Please call us directly at 9266991136.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-grid">
        {/* Left Side: Store Info */}
        <div className="store-info-panel glass-card">
          <h3>Bhawna Closet</h3>
          <p className="panel-desc">
            Visit our physical boutique in Gurgaon or get in touch for custom stitching, sizing availability, or direct orders.
          </p>

          <div className="info-list">
            <div className="info-item">
              <div className="icon-badge">
                <MapPin size={18} />
              </div>
              <div>
                <h4>Our Location</h4>
                <p>Shop no R6/020 Sec 67 M3M Urbana Gurgaon, Haryana</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-badge">
                <Phone size={18} />
              </div>
              <div>
                <h4>Call Us</h4>
                <p><a href="tel:9266991136">9266991136</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-badge">
                <Mail size={18} />
              </div>
              <div>
                <h4>Email Address</h4>
                <p><a href="mailto:bhawnacloset.in@gmail.com">bhawnacloset.in@gmail.com</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-badge">
                <Clock size={18} />
              </div>
              <div>
                <h4>Store Hours</h4>
                <p>11:00 AM - 9:00 PM (Tuesday Closed)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="form-panel glass-card">
          <h3>Send Us a Message</h3>
          <p className="panel-desc">Have a question? Fill in the details below and our styling team will reach out to you.</p>

          {success ? (
            <div className="contact-success-box animate-fade-in">
              <div className="success-icon">
                <Check size={32} />
              </div>
              <h4>Message Sent Successfully!</h4>
              <p>Thank you for reaching out to Bhawna Closet. We will get back to you shortly.</p>
              <button className="btn btn-primary" onClick={() => setSuccess(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="actual-form">
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-row-contact">
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit number"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enquire about custom sizes, fabrics, styles..."
                  required
                ></textarea>
              </div>

              {errorMsg && <p className="contact-error">{errorMsg}</p>}

              <button type="submit" className="btn btn-primary btn-send-message" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Contact Form Styles */}
      <style>{`
        .contact-form-wrapper {
          width: 100%;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 2.5rem;
        }
        
        .store-info-panel {
          padding: 2.5rem;
          background: linear-gradient(135deg, var(--pure-white) 0%, var(--light-pink) 100%);
        }
        .store-info-panel h3 {
          font-size: 1.8rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.75rem;
        }
        .panel-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .icon-badge {
          background: var(--pure-white);
          color: var(--primary-pink-dark);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          flex-shrink: 0;
          border: 1px solid var(--border-pink);
        }
        .info-item h4 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.2rem;
        }
        .info-item p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .info-item a {
          color: var(--text-muted);
        }
        .info-item a:hover {
          color: var(--primary-pink);
        }
        
        .form-panel {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .form-panel h3 {
          font-size: 1.8rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.75rem;
        }
        
        .actual-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-row-contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .form-group input, .form-group textarea {
          font-family: var(--font-sans);
          padding: 0.85rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
          background: var(--cream-white);
        }
        .btn-send-message {
          align-self: flex-start;
          border-radius: 10px;
          padding: 0.85rem 2rem;
        }
        .contact-error {
          color: red;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        /* Success Presentation Box */
        .contact-success-box {
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .success-icon {
          width: 64px;
          height: 64px;
          background: #d4edda;
          color: #155724;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #c3e6cb;
          margin-bottom: 0.5rem;
        }
        .contact-success-box h4 {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          color: #155724;
        }
        .contact-success-box p {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 320px;
          margin-bottom: 1.5rem;
        }

        /* Responsive Contact */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 576px) {
          .form-row-contact {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .form-panel, .store-info-panel {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
