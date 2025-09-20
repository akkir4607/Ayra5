// pages/Products.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { useCart } from '../contexts/CartContext';
import './Products.css';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import DiorFooter from './DiorFooter';

const Products = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Add this hook

  const products = [
    {
      id: 1,
      name: "SINGLE-BREASTED SUIT IN LIGHT VIRGIN WOOL",
      colors: "+ 3 colors",
      image: image1,
      alt: "Black suit jacket and trousers",
      price: 2400,
      subtitle: "Premium Italian Wool Blend",
      reference: "SB001WL2400_BLK_52",
      description: "This single-breasted suit exemplifies sophisticated tailoring with its clean lines and contemporary cut. Crafted from premium light virgin wool, it offers exceptional comfort and breathability while maintaining a sharp, professional appearance. The jacket features a modern slim fit with notched lapels, while the matching trousers have a flat front design for a sleek silhouette."
    },
    {
      id: 2,
      name: "LINEN SHIRT WITH EAGLE EMBROIDERY",
      colors: "+ 2 colors", 
      image: image2,
      alt: "White linen shirt",
      price: 890,
      subtitle: "100% Pure Linen with Hand Embroidery",
      reference: "LS002EE890_WHT_M",
      description: "Experience luxury with this pristine white linen shirt featuring intricate eagle embroidery. Made from 100% pure linen, this shirt offers unparalleled comfort and breathability. The detailed eagle embroidery adds a distinctive touch of elegance, making it perfect for both casual and semi-formal occasions."
    },
    {
      id: 3,
      name: "ASV THREE-PACK OF JERSEY T-SHIRTS WITH GR...",
      colors: "1 color",
      image: image1,
      alt: "Pack of three t-shirts in different colors",
      price: 320,
      subtitle: "Premium Cotton Jersey Blend",
      reference: "TP003JE320_MIX_L",
      description: "This premium three-pack offers exceptional value with versatile jersey t-shirts perfect for everyday wear. Made from a soft cotton blend, these shirts provide comfort and durability. Each pack includes carefully selected color combinations that work seamlessly with any wardrobe."
    },
    {
      id: 4,
      name: "REVERSIBLE BELT WITH BUCKLE",
      colors: "1 color",
      image: image2,
      alt: "Reversible leather belt with buckle",
      price: 650,
      subtitle: "Italian Leather with Signature Buckle",
      reference: "RB004LB650_BRN_95",
      description: "Crafted from premium Italian leather, this reversible belt offers two looks in one accessory. The sophisticated buckle design complements both casual and formal attire, while the reversible feature provides versatility for different styling options."
    },
    {
      id: 5,
      name: "SINGLE-BREASTED SUIT IN LIGHT VIRGIN WOOL",
      colors: "+ 3 colors",
      image: image1,
      alt: "Black suit jacket and trousers",
      price: 2400,
      subtitle: "Premium Italian Wool Blend",
      reference: "SB005WL2400_BLK_52",
      description: "This single-breasted suit exemplifies sophisticated tailoring with its clean lines and contemporary cut. Crafted from premium light virgin wool, it offers exceptional comfort and breathability while maintaining a sharp, professional appearance."
    },
    {
      id: 6,
      name: "LINEN SHIRT WITH EAGLE EMBROIDERY",
      colors: "+ 2 colors", 
      image: image2,
      alt: "White linen shirt",
      price: 890,
      subtitle: "100% Pure Linen with Hand Embroidery",
      reference: "LS006EE890_WHT_M",
      description: "Experience luxury with this pristine white linen shirt featuring intricate eagle embroidery. Made from 100% pure linen, this shirt offers unparalleled comfort and breathability."
    },
    {
      id: 7,
      name: "ASV THREE-PACK OF JERSEY T-SHIRTS WITH GR...",
      colors: "1 color",
      image: image1,
      alt: "Pack of three t-shirts in different colors",
      price: 320,
      subtitle: "Premium Cotton Jersey Blend",
      reference: "TP007JE320_MIX_L",
      description: "This premium three-pack offers exceptional value with versatile jersey t-shirts perfect for everyday wear. Made from a soft cotton blend, these shirts provide comfort and durability."
    },
    {
      id: 8,
      name: "REVERSIBLE BELT WITH BUCKLE",
      colors: "1 color",
      image: image2,
      alt: "Reversible leather belt with buckle",
      price: 650,
      subtitle: "Italian Leather with Signature Buckle",
      reference: "RB008LB650_BRN_95",
      description: "Crafted from premium Italian leather, this reversible belt offers two looks in one accessory. The sophisticated buckle design complements both casual and formal attire."
    }
  ];

  // Handle product click to navigate to detail page
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  // Handle add to cart (prevent event bubbling)
  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent navigation when clicking add to cart
    addToCart(product);
  };

  return (
    <>
      {/* Products Grid */}
      <div className="product-grid">
        {products.map(product => (
          <div 
            key={`${product.id}-${product.name}`} 
            className="product-card"
            onClick={() => handleProductClick(product)} // Add click handler
            style={{ cursor: 'pointer' }} // Add pointer cursor
          >
            <div className="product-image">
              <img src={product.image} alt={product.alt} />
              <button 
                className="add-to-cart-btn" 
                onClick={(e) => handleAddToCart(e, product)} // Update to prevent bubbling
              >
                +
              </button>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-colors">{product.colors}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      <DiorFooter />
    </>
  );
};

export default Products;