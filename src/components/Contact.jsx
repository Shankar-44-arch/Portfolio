import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Send } from 'lucide-react';
import { socialLinks, personalInfo } from '../data';
import '../styles/Contact.css';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${socialLinks.email}`, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000); // Clear success message after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section section-primary">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="section-header">
          <h2>Let's connect.</h2>
          <p>
            Whether for backend engineering opportunities, open-source collaborations, or just to say hi, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Details */}
          <div className="contact-card details-card">
            <h3>Contact Details</h3>
            
            <div className="contact-list">
              <a href={`mailto:${socialLinks.email}`} className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{socialLinks.email}</span>
                </div>
              </a>



              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon-wrapper">
                  <LinkedinIcon size={18} />
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">in/shankar-k-g</span>
                </div>
              </a>

              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon-wrapper">
                  <GithubIcon size={18} />
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/Shankar-44-arch</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Send Message Form */}
          <div className="contact-card form-card">
            <h3>Send a message.</h3>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">YOUR NAME *</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS *</label>
                  <input type="email" id="email" name="email" placeholder="john@techcorp.com" required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">SUBJECT / TOPIC</label>
                <input type="text" id="subject" name="subject" placeholder="Backend System Architecture Collaboration" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">MESSAGE *</label>
                <textarea id="message" name="message" rows="4" placeholder="Detail your inquiry, API requirements, or project scope..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'} <Send size={16} />
              </button>
              {status === 'error' && (
                <p style={{ color: '#ff6b6b', marginTop: '1rem', fontSize: '0.9rem' }}>
                  Oops! There was a problem submitting your form.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
