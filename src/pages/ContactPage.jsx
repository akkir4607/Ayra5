import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    country: 'India',
    language: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [expandedSections, setExpandedSections] = useState({
    call: false,
    appointment: false,
    faq: false,
    write: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const faqItems = [
    { title: "ABOUT THE AYRA.COM SITE", id: "about" },
    { title: "THE AYRA SELECTION", id: "selection" },
    { title: "CLIENT SERVICE CENTER", id: "service" }
  ];

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-description">
          AYRA Client Service Center is available Monday to Sunday from 11am to 7:30pm (IST).
          <br />
          Our Client Advisors will be delighted to assist you and provide personalized advice. For
          <br />
          Fragrance and beauty assistance, please click here.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-sections">
          {/* Call us Section */}
          <div className="contact-section">
            <h2 className="section-title">Call us</h2>
            <p className="section-description">Our Client Advisors would be delighted to assist you.</p>
            <p className="phone-info">
              You may contact us at <span className="phone-number">+91 8000503392</span>
            </p>
            <p className="service-hours">Service available from Monday to Sunday from 11am to 7:30pm (IST).</p>
          </div>

          {/* In-Store Appointment Section */}
          <div className="contact-section">
            <h2 className="section-title">In-Store Appointment</h2>
            <p className="section-description">
              AYRA invites you to arrange an appointment with a Sales Associate for a personal consultation.
            </p>
            <button className="appointment-button">Book An Appointment</button>
          </div>

          {/* FAQ Section */}
          <div className="contact-section faq-section">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-items">
              {faqItems.map((item) => (
                <div key={item.id} className="faq-item">
                  <button 
                    className="faq-button"
                    onClick={() => toggleSection(item.id)}
                  >
                    {item.title}
                    <span className="faq-arrow">▶</span>
                  </button>
                </div>
              ))}
            </div>
            <button className="see-all-faqs">See All FAQs</button>
          </div>
        </div>

        {/* Write us Section */}
        <div className="write-us-section">
          <h2 className="section-title">Write us</h2>
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="* Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="* First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
                <label className="form-label">Country / Region</label>
              </div>
              <div className="form-group">
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="* Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group phone-group">
                <div className="phone-prefix">
                  <span className="flag-icon">🇮🇳</span>
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telephone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input phone-input"
                />
              </div>
            </div>

            <div className="form-group">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Order Support">Order Support</option>
                <option value="Product Information">Product Information</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows="6"
              />
            </div>

            <div className="character-count">
              360 remaining characters. Please note, only latin language characters are recognized. Use of other language characters or emojis may not be recognized.
            </div>

            <button type="button" onClick={handleSubmit} className="send-button">Send</button>

            <div className="required-note">
              * All fields marked with an asterisk are required
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;