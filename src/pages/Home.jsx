// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import shoppingGirl from '../images/shopping-girl.jpg';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import './home.css';
import GenderSplit from './GenderSplit';
import ScrollVelocity from './ScrollVelocity';
import videoFile from '../images/122.mp4';
import DiorFooter from './DiorFooter';
import { useCart } from '../contexts/CartContext';

const Home = () => {
  const navigate = useNavigate();
  // Use global cart context instead of local state
  const { addToCart } = useCart();

  const products = [
    {
      id: 25,
      title: "Women's Handbags",
      name: "Women's Handbags",
      subtitle: "Premium Italian Leather Collection",
      price: 185000,
      priceDisplay: '₹1,85,000.00',
      image: image1,
      category: "handbags",
      alt: "Women's luxury handbag",
      reference: "HB001WL2400_BLK_52",
      colors: "+ 3 colors",
      description: "This exquisite handbag represents the pinnacle of Italian craftsmanship. Crafted from the finest premium leather, it features meticulous attention to detail and timeless design. The spacious interior and elegant silhouette make it perfect for both day and evening occasions. Each piece is carefully constructed by skilled artisans using traditional techniques passed down through generations."
    },
    {
      id: 26,
      title: "Women's Wallets and Small Leather Goods",
      name: "Women's Wallets and Small Leather Goods",
      subtitle: "Compact Luxury Essentials",
      price: 45000,
      priceDisplay: '₹45,000.00',
      image: image2,
      category: "wallets",
      alt: "Women's luxury wallet",
      reference: "WL002SL2400_BRN_28",
      colors: "+ 2 colors",
      description: "A perfect blend of functionality and elegance, this compact wallet features multiple card slots, a secure coin compartment, and premium leather construction. The sophisticated design complements any handbag while providing organized storage for all your essentials."
    },
    {
      id: 27,
      title: "Women's Shoes",
      name: "Women's Shoes",
      subtitle: "Italian Crafted Footwear",
      price: 125000,
      priceDisplay: '₹1,25,000.00',
      image: image1,
      category: "shoes",
      alt: "Women's luxury shoes",
      reference: "SH003IL2400_BLK_38",
      colors: "+ 4 colors",
      description: "Step into luxury with these meticulously crafted Italian shoes. Made from the finest leather and featuring exceptional comfort technology, these shoes offer both style and substance. The elegant silhouette and superior construction ensure lasting beauty and comfort."
    },
    {
      id: 28,
      title: "Perfume",
      name: "Signature Fragrance",
      subtitle: "Eau de Parfum 100ml",
      price: 8500,
      priceDisplay: '₹8,500.00',
      image: image2,
      category: "perfume",
      alt: "Luxury perfume",
      reference: "PF001EP2400_100_ML",
      colors: "100ml",
      description: "A captivating fragrance that embodies elegance and sophistication. This signature scent features top notes of bergamot and jasmine, heart notes of rose and peony, and base notes of sandalwood and musk. Each bottle is a work of art, designed to complement your personal style."
    },
    {
      id: 29,
      title: "Perfume Collection",
      name: "Luxury Fragrance Set",
      subtitle: "Travel Size Collection",
      price: 12000,
      priceDisplay: '₹12,000.00',
      image: image1,
      category: "perfume",
      alt: "Luxury perfume collection",
      reference: "PF002TS2400_SET_3",
      colors: "3 piece set",
      description: "Discover our most beloved fragrances in this elegant travel collection. Perfect for the sophisticated individual who appreciates variety and convenience. Each miniature bottle contains the same premium quality as our full-size offerings."
    },
    {
      id: 30,
      title: "Premium Perfume",
      name: "Exclusive Edition",
      subtitle: "Limited Release Eau de Parfum",
      price: 15000,
      priceDisplay: '₹15,000.00',
      image: image2,
      category: "perfume",
      alt: "Premium luxury perfume",
      reference: "PF003EX2400_150_ML",
      colors: "150ml",
      description: "An exclusive fragrance created for the discerning connoisseur. This premium edition features rare ingredients sourced from around the world, creating a unique and memorable olfactory experience that speaks to your refined taste."
    },
    {
      id: 31,
      title: "Signature Perfume",
      name: "House Signature",
      subtitle: "Classic Eau de Parfum",
      price: 18000,
      priceDisplay: '₹18,000.00',
      image: image1,
      category: "perfume",
      alt: "Signature luxury perfume",
      reference: "PF004HS2400_100_ML",
      colors: "100ml",
      description: "Our house signature fragrance represents decades of perfumery expertise. This timeless scent has been carefully crafted to create a lasting impression, with complex layers that evolve beautifully throughout the day."
    },
    {
      id: 32,
      title: "Limited Edition Perfume",
      name: "Anniversary Collection",
      subtitle: "Commemorative Eau de Parfum",
      price: 25000,
      priceDisplay: '₹25,000.00',
      image: image2,
      category: "perfume",
      alt: "Limited edition luxury perfume",
      reference: "PF005AC2400_200_ML",
      colors: "200ml",
      description: "A special commemorative fragrance created to celebrate our heritage. This limited edition piece features an exclusive blend of the finest ingredients, housed in a collector's bottle. Only a select number have been produced, making this a truly special addition to any collection."
    }
  ];

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { 
      state: { product: product } 
    });
  };

  return (
    <>
      <div>
       
        
        {/* Add image here */}
        <img className="fade-in-fwd"
          src={shoppingGirl} 
          alt="Happy girl with shopping bags" 
        />
        
        {/* Product Grid Section */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-light text-center mb-8 text-gray-800">
            Explore a Selection of the Maison's Creations
          </h2>
          
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer product-card-home"
                onClick={() => handleProductClick(product)}
              >
                <div className="relative overflow-hidden bg-gradient-to-br hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-pink-100/30 to-yellow-100/30"></div>
                  <div className="relative h-full flex items-center justify-center p-4">
                    <img 
                      src={product.image}
                      alt={product.alt}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Add to Cart Button */}
                    <button 
                      className='add-to-cart-btn-home' 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      aria-label='Add to cart'
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="product-info-home">
                  <h3 className="text-sm font-medium text-center text-gray-800 group-hover:text-gray-600 transition-colors duration-200">
                    {product.title}
                  </h3>
                  <p className="product-price-home">{product.priceDisplay}</p>
                </div>
              </div>
            ))}
          </div>

          <div></div>
          
          <ScrollVelocity className='hello text-6xl mt-5'
            texts={['AYRA AYRA', 'AYRA AYRA']} 
          />
          <h2 className="text-2xl font-light text-center mb-8 mt-8 text-gray-800">
            Explore a Selection of the Maison's Creations
          </h2>
          {/* Gender Split Section */}
          <GenderSplit />
        </div>
        
        <div className="video-container">
          {/* Video/Background */}
          <video 
            className="video-element"
            autoPlay 
            muted 
            loop
            playsInline
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Text Overlay */}
          <div className="text-overlay">
            <div className="text-content">
              <p className="subtitle">
                Show
              </p>
              <h1 className="main-title">
                Summer 2026
              </h1>
              <p className="subtitle bottom">
                Discover
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-light text-center mb-8 mt-8 text-gray-800">
          Explore a Selection of the Maison's Creations
        </h2>
        
        <DiorFooter />
      </div>
    </>
  );
};

export default Home;