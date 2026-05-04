'use client';

import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { supabase } from '../createClient'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log("input changed", {name, value});
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log('New form data after update:', formData);
    
    // Clear error message when user starts typing
    if (errorMessage) setErrorMessage('');
  };

  // Validate form before submission
  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required');
      return false;
    }
    
    if (!formData.email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    
    if (!formData.message.trim()) {
      setErrorMessage('Message is required');
      return false;
    }
    
    if (formData.message.trim().length < 10) {
      setErrorMessage('Message must be at least 10 characters');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate before submitting
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      console.log('Submitting to Supabase:', formData);
      
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            message: formData.message.trim(),
            created_at: new Date().toISOString(),
            status: 'unread'
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        
        // Handle specific Supabase errors
        if (error.code === '42501') {
          setErrorMessage('Permission denied. Please check Row Level Security settings.');
        } else if (error.code === '42P01') {
          setErrorMessage('Database table not found. Please run the setup SQL.');
        } else {
          setErrorMessage(error.message || 'Failed to save your message. Please try again.');
        }
        
        setSubmitStatus('error');
      } else {
        console.log('Successfully saved to Supabase:', data);
        setSubmitStatus('success');
        
        // Clear form on success
        setFormData({ 
          name: '', 
          email: '', 
          message: '' 
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section className="contact-section" id='contact'>
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge">Get in touch</span>
        <h2 className="contact-title">{"Let's Work Together"}</h2>
          <div className="contact-underline"></div>
          <p className="contact-subtitle">
            {"Have a project in mind or just want to say hello? I'll get back to you within 24 hours."}
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
                <a href="mailto:mathewsonialaodoyo@gmail.com">mathewsonialaodoyo@gmail.com</a>
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
              <a href="https://github.com/mathewsoniala" className="social-link" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/mathews-oniala-a82927274" className="social-link" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com/OnialaMathews" className="social-link" aria-label="Twitter">
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>
            
            {/* Display validation errors */}
            {errorMessage && (
              <p className="error-message" style={{ marginTop: '15px' }}>
                {errorMessage}
              </p>
            )}
            
            {/* Display success/error status */}
            {submitStatus === 'success' && (
              <p className="success-message" style={{ marginTop: '15px' }}>
                {"✓ Message sent successfully! I'll get back to you soon."}
              </p>
            )}
            
            {submitStatus === 'error' && !errorMessage && (
              <p className="error-message" style={{ marginTop: '15px' }}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;