// components/UniversalCart.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import './UniversalCart.css';

const UniversalCart = () => {
  const {
    cart,
    showCart,
    setShowCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    formatPrice
  } = useCart();

  return (
    <>
      {/* Cart toggle is now in the Navbar */}

      {/* Cart Sidebar */}
      <div className={`universal-cart-sidebar ${showCart ? 'cart-open' : ''}`}>
        <div className="cart-header">
          <h2>Shopping Cart ({getTotalItems()})</h2>
          <button className="close-cart" onClick={() => setShowCart(false)}>×</button>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.alt || item.name || item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name || item.title}</h4>
                  {item.colors && <p className="cart-item-colors">{item.colors}</p>}
                  <p className="cart-item-price">{item.priceDisplay}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>×</button>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <strong>Total: {formatPrice(getTotalPrice())}</strong>
            </div>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        )}
      </div>

      {/* Overlay */}
      {showCart && <div className="cart-overlay" onClick={() => setShowCart(false)}></div>}
    </>
  );
};

export default UniversalCart;