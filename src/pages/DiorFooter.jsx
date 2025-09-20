import React, { useState } from 'react';
import './DiorFooter.css';

const DiorFooter = ({ onNavigateToContact }) => {
  const [email, setEmail] = useState('');
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubmit = () => {
    if (email) {
      console.log('Newsletter signup:', email);
      // Handle newsletter signup logic here
    }
  };

  const handleContactClick = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      // If no navigation handler is provided, you can implement default behavior
      console.log('Navigate to contact page');
    }
  };

  return (
    <div className="dior-footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h1 className="newsletter-title">
          Inspire me with all the latest ARYA news
        </h1>
        
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="* E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />
          <button
            onClick={handleSubmit}
            className="confirm-button"
          >
            Confirm
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-grid">
          {/* Dior Boutiques */}
          <div className="footer-column">
            <h3 className="column-title">AYRA Gift</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Tshirts</a></li>
              <li><a href="#" className="footer-link">Hoodies</a></li>
            </ul>
          </div>

          {/* Client Services */}
          <div className="footer-column">
            <h3 className="column-title">Client Services</h3>
            <ul className="footer-links">
              <li>
                <button 
                  onClick={handleContactClick}
                  className={`dropdown-button contact-button ${openSections.contact ? 'active' : ''}`}
                >
                  Contact 
                  <span className="chevron">▼</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => toggleSection('faq')}
                  className={`dropdown-button ${openSections.faq ? 'active' : ''}`}
                >
                  FAQ 
                  <span className="chevron">▼</span>
                </button>
              </li>
            </ul>
          </div>

          {/* The House Of Dior */}
          <div className="footer-column">
            <h3 className="column-title">The House Of AYRA</h3>
            <ul className="footer-links">
              <li>
                <button 
                  onClick={() => toggleSection('sustainability')}
                  className={`dropdown-button ${openSections.sustainability ? 'active' : ''}`}
                >
                  AYRA Sustainability 
                  <span className="chevron">▼</span>
                </button>
              </li>
              <li><a href="#" className="footer-link">Ethics & Compliance</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
            </ul>
          </div>

          {/* Legal Terms */}
          <div className="footer-column">
            <h3 className="column-title">Legal Terms</h3>
            <ul className="footer-links">
              <li>
                <button 
                  onClick={() => toggleSection('legal')}
                  className={`dropdown-button ${openSections.legal ? 'active' : ''}`}
                >
                  Legal Terms 
                  <span className="chevron">▼</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => toggleSection('privacy')}
                  className={`dropdown-button ${openSections.privacy ? 'active' : ''}`}
                >
                  Privacy Notice 
                  <span className="chevron">▼</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => toggleSection('sitemap')}
                  className={`dropdown-button ${openSections.sitemap ? 'active' : ''}`}
                >
                  Sitemap 
                  <span className="chevron">▼</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Brand Section */}
        <div className="footer-bottom">
          {/* Social Media */}
          <div className="social-section">
            <p className="social-label">Follow Us</p>
            <div className="social-links">
              <a href="#" className="social-link">Tiktok</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">X</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Pinterest</a>
              <a href="#" className="social-link">Snapchat</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Podcasts</a>
            </div>
          </div>

          {/* Dior Logo & Location */}
          <div className="brand-section">
            <div className="dior-logo">AYRA</div>
            <div className="location-selector">
              <span className="location-label">Country / Region</span>
              <span className="location-value">India (English)</span>
              <span className="location-arrow">▶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiorFooter;
