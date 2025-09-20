import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext"; // Import the cart context
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get cart functions and state
  const { getTotalItems, setShowCart } = useCart();

  const handleCartClick = () => {
    setShowCart(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <div className="navbar-logo">
          <Link to="/">ShopLogo</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </button>

        {/* Links */}
        <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
          <div className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'navbar-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </div>
          <div className="navbar-item">
            <Link 
              to="/products" 
              className={`navbar-link ${location.pathname === '/products' ? 'navbar-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </div>
          <div className="navbar-item">
            <Link 
              to="/about" 
              className={`navbar-link ${location.pathname === '/about' ? 'navbar-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
          <div className="navbar-item">
            <Link 
              to="/login" 
              className={`navbar-link ${location.pathname === '/login' ? 'navbar-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
          
          {/* Cart link for mobile */}
          <div className="navbar-item navbar-item-mobile-only">
            <button 
              className="navbar-link cart-link-mobile"
              onClick={handleCartClick}
            >
              Cart ({getTotalItems()})
            </button>
          </div>
        </div>

        {/* Cart icon for desktop */}
        <div className="navbar-cart">
          <button 
            className="cart-button"
            onClick={handleCartClick}
          >
            <svg 
              className="cart-icon" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 6L5 21h14M9 19a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" 
              />
            </svg>
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;