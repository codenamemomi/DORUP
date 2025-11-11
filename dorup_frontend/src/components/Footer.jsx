// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Dorup</h3>
            <p>Redefining Housing, Hospitality & Payments in Nigeria</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Services</h4>
              <a href="#">Rent Homes</a>
              <a href="#">Book Hotels</a>
              <a href="#">Pay Bills</a>
            </div>
            
            <div className="link-group">
              <h4>Company</h4>
              <a href="/about">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
            
            <div className="link-group">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Dorup. All rights reserved. Making Nigerian living seamless.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;