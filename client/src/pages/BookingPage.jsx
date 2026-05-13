import React, { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    date: '',
    address: '',
    squareFeet: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request sent successfully! We will contact you shortly.');
  };

  return (
    <div className="py-12 bg-background min-h-[calc(100vh-160px)] fade-in flex items-center justify-center">
      <div className="max-w-md w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary font-serif">Book Installation</h2>
            <p className="text-gray-500 mt-2">Schedule our expert team to your location</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <input 
                type="date" 
                required 
                className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-primary focus:border-primary"
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Square Feet</label>
              <input 
                type="number" 
                required 
                placeholder="e.g. 500"
                className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-primary focus:border-primary"
                value={formData.squareFeet}
                onChange={e => setFormData({...formData, squareFeet: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Installation Address</label>
              <textarea 
                required 
                rows="3"
                className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-primary focus:border-primary"
                placeholder="Full address details..."
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
              ></textarea>
            </div>
            
            <button type="submit" className="w-full btn-primary py-3 text-lg">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
