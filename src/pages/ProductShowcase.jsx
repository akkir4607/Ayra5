import React, { useState } from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: 1,
    name: "Premium Cotton T-Shirt",
    subtitle: "Soft Organic Cotton Blend",
    price: "₹2,499.00",
    reference: "REF123ABC456_SIZE_M",
    image: "/api/placeholder/600/800",
    description: "Experience ultimate comfort with our premium cotton t-shirt. Crafted from 100% organic cotton with a modern fit, this versatile piece features a classic crew neck and is perfect for both casual and semi-formal occasions. The breathable fabric ensures all-day comfort while maintaining its shape after multiple washes.",
    isNew: true
  };

  return (
    <div className="product-showcase">
      <div className="container">
        {/* Brand Header */}
        <header className="brand-header">
          <h1 className="brand-name">YOUR BRAND</h1>
        </header>

        {/* Product Section */}
        <div className="product-section">
          {/* Product Image */}
          <div className="product-image-container">
            <div className="product-image">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-img"
              />
              {product.isNew && (
                <span className="new-badge">New</span>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="product-details">
            <div className="product-info">
              <h2 className="product-title">{product.name}</h2>
              <p className="product-subtitle">{product.subtitle}</p>
              <p className="product-reference">Reference: {product.reference}</p>
              
              <div className="price-section">
                <span className="price">{product.price}</span>
              </div>

              <div className="action-buttons">
                <button className="btn btn-outline">
                  Find your size guide
                </button>
                <button className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="tabs-section">
              <div className="tabs-nav">
                <button 
                  className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'sizing' ? 'active' : ''}`}
                  onClick={() => setActiveTab('sizing')}
                >
                  Size & Fit
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'availability' ? 'active' : ''}`}
                  onClick={() => setActiveTab('availability')}
                >
                  Contact & In-Store Availability
                </button>
              </div>

              <div className="tab-content">
                {activeTab === 'description' && (
                  <div className="tab-panel">
                    <p className="description-text">{product.description}</p>
                    <button className="see-more-btn">See more</button>
                  </div>
                )}
                
                {activeTab === 'sizing' && (
                  <div className="tab-panel">
                    <p className="sizing-text">
                      This item runs true to size. For the best fit, we recommend consulting our size guide. 
                      The model is wearing size M and is 6'0" tall with a 38" chest.
                    </p>
                  </div>
                )}
                
                {activeTab === 'availability' && (
                  <div className="tab-panel">
                    <p className="availability-text">
                      Contact our customer service team for product availability and store locations. 
                      Available in select boutiques worldwide.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;