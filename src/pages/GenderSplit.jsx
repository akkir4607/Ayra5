import React from 'react';
import image3 from '../images/10.jpg';
import image4 from '../images/11.jpg';
import { Link } from 'react-router-dom';

const GenderSplit = () => {
  return (
    <div className="w-full h-screen flex">
      {/* For Her Section */}
      <div className="relative w-1/2 h-full overflow-hidden group cursor-pointer">
        <img 
          src={image4} 
          alt="For Her Collection" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0  group-hover:bg-opacity-10 transition-all duration-500"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-6xl font-light mb-4 tracking-wide">For Her</h2>
          
          <Link to="/forher" className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
  Discover
</Link>
        </div>
      </div>

      {/* For Him Section */}
      <div className="relative w-1/2 h-full overflow-hidden group cursor-pointer">
        <img 
          src={image3}  
          alt="For Him Collection" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0  group-hover:bg-opacity-10 transition-all duration-500"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-6xl font-light mb-4 tracking-wide">For Him</h2>
          <Link to="/forhim" className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
  Discover
</Link>
        </div>
      </div>
    </div>
  );
};

export default GenderSplit;