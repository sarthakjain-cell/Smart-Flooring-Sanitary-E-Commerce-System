import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const { data } = await axios.get(`${API_URL}/api/products`);
        setProducts(data.slice(0, 3)); // Only show top 3 on home
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Premium Flooring"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight font-serif">
            Transform Your Space <br /> With Premium Flooring
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Discover our exclusive collection of wood, vinyl, and ceramic tiles. Quality materials and expert installation services at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
            <Link to="/shop" className="btn-primary">Shop Collection</Link>
            <Link to="/calculator" className="bg-white text-secondary px-6 py-2 rounded-md hover:bg-gray-100 transition duration-300 font-medium tracking-wide border border-transparent">Calculate Cost</Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">Featured Materials</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product._id} className="card-premium flex flex-col h-full group">
                <div className="relative h-64 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 text-sm font-semibold text-primary rounded-full shadow">
                    ${product.pricePerSqFt} / sq.ft
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{product.category}</p>
                  <h3 className="text-xl font-bold text-secondary mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{product.description}</p>
                  <Link to={`/product/${product._id}`} className="mt-auto text-primary font-medium hover:text-secondary transition flex items-center">
                    View Details <span className="ml-2">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">Expert Installation Services</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            We don't just sell flooring; we make sure it's installed perfectly. Book our professional team for a hassle-free experience.
          </p>
          <Link to="/booking" className="btn-primary border border-primary hover:bg-transparent hover:text-primary hover:border-primary transition">Book Installation</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
