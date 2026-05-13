import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-accent">SmartFlooring</span>
            <p className="mt-4 text-gray-400 text-sm">
              Premium flooring and sanitary products for modern interiors. Quality you can step on.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition">Shop All</Link></li>
              <li><Link to="/calculator" className="hover:text-white transition">Price Calculator</Link></li>
              <li><Link to="/booking" className="hover:text-white transition">Book Installation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/shop?category=wood" className="hover:text-white transition">Wooden Flooring</Link></li>
              <li><Link to="/shop?category=vinyl" className="hover:text-white transition">Luxury Vinyl</Link></li>
              <li><Link to="/shop?category=tiles" className="hover:text-white transition">Ceramic Tiles</Link></li>
              <li><Link to="/shop?category=sanitary" className="hover:text-white transition">Sanitary Wares</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>alutra aparment zirakpur ,punjab -india</li>
              <li>mjain3425@gmail.com</li>
              <li>9416234840</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Smart Flooring & Sanitary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
