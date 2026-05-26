import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(100);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const { data } = await axios.get(`${API_URL}/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCartHandler = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemExists = cartItems.find((item) => item.product === product._id);

    if (itemExists) {
      itemExists.qty = Number(itemExists.qty) + Number(qty);
    } else {
      cartItems.push({
        product: product._id,
        title: product.title,
        image: product.image,
        price: product.pricePerSqFt,
        qty: Number(qty)
      });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${qty} sq.ft of ${product.title} successfully added to your cart!`);
  };

  if (!product.title) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="py-12 bg-white min-h-screen fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="text-primary hover:underline mb-6 inline-block">&larr; Back to Shop</Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-xl overflow-hidden shadow-lg h-96 md:h-auto">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold text-secondary mb-4 font-serif">{product.title}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl font-bold text-primary">${product.pricePerSqFt} <span className="text-sm text-gray-500 font-normal">/ sq.ft</span></span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Installation: ${product.installationPricePerSqFt} / sq.ft</span>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>
            
            <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Stock Availability:</span>
                <span className={product.stock > 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              {product.stock > 0 && (
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Required Sq.Ft:</span>
                  <input 
                    type="number" 
                    min="10" 
                    value={qty} 
                    onChange={(e) => setQty(e.target.value)}
                    className="w-24 border-gray-300 rounded-md shadow-sm p-2 border focus:ring-primary focus:border-primary text-center"
                  />
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button 
                onClick={addToCartHandler}
                className={`flex-1 btn-primary ${product.stock === 0 && 'opacity-50 cursor-not-allowed'}`}
                disabled={product.stock === 0}
              >
                Add to Cart
              </button>
              <Link to="/booking" className="flex-1 btn-outline text-center">
                Book Installation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
