import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const { data } = await axios.get(`${API_URL}/api/products`);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="py-12 bg-background min-h-screen fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-secondary mb-8 font-serif">Our Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product._id} className="card-premium flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</p>
                <h3 className="text-lg font-bold text-secondary mb-1">{product.title}</h3>
                <p className="text-primary font-bold mb-3">${product.pricePerSqFt} <span className="text-xs text-gray-500 font-normal">/ sq.ft</span></p>
                <Link to={`/product/${product._id}`} className="mt-auto w-full btn-outline text-center">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
