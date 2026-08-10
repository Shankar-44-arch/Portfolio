import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer section-secondary">
      <div className="container footer-container">
        <div className="footer-status">
          <span className="status-indicator"></span>
          All systems operational
        </div>
        
        <div className="footer-copyright">
          &copy; {currentYear} shankar.dev(). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
