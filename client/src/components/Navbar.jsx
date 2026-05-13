import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold text-primary tracking-tight">SmartFlooring</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition font-medium">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-primary transition font-medium">Shop</Link>
            <Link to="/calculator" className="text-gray-700 hover:text-primary transition font-medium">Calculator</Link>
            <Link to="/booking" className="text-gray-700 hover:text-primary transition font-medium">Booking</Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="text-gray-600 hover:text-primary transition">
              <User size={24} />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-primary transition relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Home</Link>
            <Link to="/shop" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Shop</Link>
            <Link to="/calculator" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Calculator</Link>
            <Link to="/booking" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Booking</Link>
            <Link to="/login" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
