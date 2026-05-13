import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login feature dummy implementation successful!');
  };

  return (
    <div className="py-12 bg-background min-h-[calc(100vh-160px)] fade-in flex items-center justify-center">
      <div className="max-w-md w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-secondary font-serif mb-6">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              required 
              className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-primary focus:border-primary"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-primary focus:border-primary"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="submit" className="w-full btn-primary py-3">Login</button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            Don't have an account? <Link to="/register" className="text-primary hover:underline cursor-pointer">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
