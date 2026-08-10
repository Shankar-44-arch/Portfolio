import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
import { socialLinks } from '../data';
import '../styles/Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact-section section-primary bg-grid-pattern">
      <div className="container contact-container">
        <h2>Let's Connect</h2>
        <p className="contact-subtext">
          I am currently looking for summer internship opportunities. Feel free to reach out via email or LinkedIn.
        </p>

        <div className="contact-actions">
          <a href={`mailto:${socialLinks.email}`} className="btn btn-primary btn-large">
            <Mail size={20} />
            Send Email
          </a>
          <button className="btn btn-outline btn-large" onClick={handleCopyEmail}>
            {copied ? <Check size={20} className="text-green-500" /> : <Mail size={20} />}
            {copied ? 'Copied!' : 'Copy Email'}
          </button>
        </div>

        <div className="social-links">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <LinkedinIcon size={28} />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <GithubIcon size={28} />
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
            <TwitterIcon size={28} />
          </a>
          <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile" className="leetcode-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
