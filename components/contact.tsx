'use client';

import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


function Contact() {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="contact-section" id='contact'>
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge">Get in touch</span>
          <h2 className="contact-title">Let's Work Together</h2>
          <div className="contact-underline"></div>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hello? I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left side – contact info & social */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <a href="mailto:hello@mathewsonialaodoyo.com">hello@mathewsonialaodoyo.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                    <FontAwesomeIcon icon={faPhone} />
                </span>
                <a href="tel:+254705751676">+254 705 751 676</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="contact-social">
              <a href="#" className="social-link" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>

          {/* Right side – contact form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>
            {submitStatus === 'success' && (
              <p className="success-message">✓ Message sent! I will reply soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="error-message">✗ Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;