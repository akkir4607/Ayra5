// pages/ProductDetail.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './ProductDetail.css';
import DiorFooter from './DiorFooter';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('description');

  // Get product data from location state
  const product = location.state?.product;

  // If no product data, redirect back to products
  if (!product) {
    navigate('/products');
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Show confirmation or navigate to cart
  };

  const handleBackToProducts = () => {
    navigate('/products');
  };

  return (
    <div className="product-detail">
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={handleBackToProducts}>
          ← Back to Products
        </button>

        {/* Brand Header */}
        <header className="brand-header">
          <h1 className="brand-name">AYRA</h1>
        </header>

        {/* Product Section */}
        <div className="product-section">
          {/* Product Image */}
          <div className="product-image-container">
            <div className="product-image">
              <img 
                src={product.image} 
                alt={product.alt || product.name}
                className="product-img"
              />
              <span className="new-badge">New</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="product-details">
            <div className="product-info">
              <h2 className="product-title">{product.name}</h2>
              <p className="product-subtitle">{product.subtitle}</p>
              <p className="product-reference">Reference: {product.reference}</p>
              
              <div className="price-section">
                <span className="price">${product.price}</span>
              </div>

              <div className="colors-section">
                <p className="colors-text">{product.colors}</p>
              </div>

              <div className="action-buttons">
                <button className="btn btn-outline">
                  Find your size guide
                </button>
                <button className="btn btn-primary" onClick={handleAddToCart}>
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
      
      <DiorFooter />
    </div>
  );
};

export default ProductDetail;