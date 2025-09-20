import React from 'react';
import './forhim.css';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import { useCart } from '../contexts/CartContext';

const ForHim = () => {
  // Use global cart context instead of local state
  const { addToCart } = useCart();

  const products = [
    {
      id: 9, // Changed IDs to avoid conflicts with Products page
      name: 'Keepall Bandouliere 25',
      price: 220000,
      priceDisplay: '₹2,20,000.00',
      image: image1,
      alt: 'Black Keepall bag with monogram pattern'
    },
    {
      id: 10,
      name: 'Keepall 25 Cargo',
      price: 271000,
      priceDisplay: '₹2,71,000.00',
      image: image2,
      alt: 'Brown monogram cargo bag with orange handles'
    },
    {
      id: 11,
      name: 'Keepall Bandouliere 25',
      price: 220000,
      priceDisplay: '₹2,20,000.00',
      image: image1,
      alt: 'Black Keepall bag with monogram pattern'
    },
    {
      id: 12,
      name: 'Keepall 25 Cargo',
      price: 271000,
      priceDisplay: '₹2,71,000.00',
      image: image2,
      alt: 'Brown monogram cargo bag with orange handles'
    },
    {
      id: 13,
      name: 'Keepall Bandouliere 25',
      price: 220000,
      priceDisplay: '₹2,20,000.00',
      image: image1,
      alt: 'Black Keepall bag with monogram pattern'
    },
    {
      id: 14,
      name: 'Keepall 25 Cargo',
      price: 271000,
      priceDisplay: '₹2,71,000.00',
      image: image2,
      alt: 'Brown monogram cargo bag with orange handles'
    },
    {
      id: 15,
      name: 'Keepall Bandouliere 25',
      price: 220000,
      priceDisplay: '₹2,20,000.00',
      image: image1,
      alt: 'Black Keepall bag with monogram pattern'
    },
    {
      id: 16,
      name: 'Keepall 25 Cargo',
      price: 271000,
      priceDisplay: '₹2,71,000.00',
      image: image2,
      alt: 'Brown monogram cargo bag with orange handles'
    },
  ];

  return (
    <>
      <div className='forher-container'>
        <h1 className='forher-title'>For Him Collection</h1>
        <div className='products-grid'>
          {products.map((product) => (
            <div key={product.id} className='product-card'>
              <div className='product-image-container'>
                <img 
                  src={product.image} 
                  alt={product.alt}
                  className='product-image'
                />
                <button 
                  className='add-to-cart-btn' 
                  onClick={() => addToCart(product)}
                  aria-label='Add to cart'
                >
                  +
                </button>
                
                 
              </div>
              <div className='product-info'>
                <h3 className='product-name'>{product.name}</h3>
                <p className='product-price'>{product.priceDisplay}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ForHim;