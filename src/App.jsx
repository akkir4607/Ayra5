// App.jsx - TEST VERSION (Don't hide cursor yet)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import IOSCursor from './components/IOSCursor'; // Import iOS Cursor
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ForHer from "./pages/ForHer"
import ForHim from './pages/ForHim';
import About from './pages/About';
import Login from './pages/Login';
import './App.css';

function App() {
  // Now hide the default cursor
  React.useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);
  
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <IOSCursor /> {/* Add iOS Cursor component */}
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/forher" element={<ForHer />} />
              <Route path="/forhim" element={<ForHim />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <CartSidebar />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
