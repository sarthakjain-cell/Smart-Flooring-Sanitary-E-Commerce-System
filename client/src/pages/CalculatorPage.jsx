import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CalculatorPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [includeInstallation, setIncludeInstallation] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!selectedProductId || !length || !width) return;

    const product = products.find(p => p._id === selectedProductId);
    if (!product) return;

    const sqFt = parseFloat(length) * parseFloat(width);
    const materialCost = sqFt * product.pricePerSqFt;
    const installationCost = includeInstallation ? (sqFt * product.installationPricePerSqFt) : 0;
    const subtotal = materialCost + installationCost;
    const gst = subtotal * 0.18; // 18% GST
    const total = subtotal + gst;

    setResult({
      sqFt: sqFt.toFixed(2),
      materialCost: materialCost.toFixed(2),
      installationCost: installationCost.toFixed(2),
      subtotal: subtotal.toFixed(2),
      gst: gst.toFixed(2),
      total: total.toFixed(2)
    });
  };

  return (
    <div className="py-12 bg-background min-h-[calc(100vh-160px)] fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-secondary mb-4">Smart Price Calculator</h1>
          <p className="text-gray-600">Estimate your flooring project cost instantly.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          
          {/* Input Form */}
          <div className="p-8 md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200">
            <form onSubmit={handleCalculate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Material</label>
                <select 
                  className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-primary focus:border-primary"
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  required
                >
                  <option value="">-- Choose a product --</option>
                  {products.map(p => (
                    <option key={p._id} value={p._id}>{p.title} (${p.pricePerSqFt}/sq.ft)</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Room Length (ft)</label>
                  <input 
                    type="number" 
                    step="0.01"
                    className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-primary focus:border-primary"
                    placeholder="e.g. 12"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Room Width (ft)</label>
                  <input 
                    type="number" 
                    step="0.01"
                    className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-primary focus:border-primary"
                    placeholder="e.g. 15"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="install"
                  className="h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary"
                  checked={includeInstallation}
                  onChange={(e) => setIncludeInstallation(e.target.checked)}
                />
                <label htmlFor="install" className="ml-2 block text-sm text-gray-700">
                  Include Professional Installation
                </label>
              </div>

              <button type="submit" className="w-full btn-primary">Calculate Estimate</button>
            </form>
          </div>

          {/* Results Area */}
          <div className="p-8 md:w-1/2 bg-gray-50 flex flex-col justify-center">
            {result ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary mb-4 border-b pb-2">Estimated Breakdown</h3>
                
                <div className="flex justify-between text-gray-600">
                  <span>Total Area:</span>
                  <span className="font-semibold text-secondary">{result.sqFt} sq.ft</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Material Cost:</span>
                  <span className="font-semibold text-secondary">${result.materialCost}</span>
                </div>

                {includeInstallation && (
                  <div className="flex justify-between text-gray-600">
                    <span>Installation Cost:</span>
                    <span className="font-semibold text-secondary">${result.installationCost}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600 pt-2 border-t">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-secondary">${result.subtotal}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>GST (18%):</span>
                  <span className="font-semibold text-secondary">${result.gst}</span>
                </div>

                <div className="flex justify-between text-xl font-bold text-primary pt-4 border-t border-gray-300">
                  <span>Total Estimate:</span>
                  <span>${result.total}</span>
                </div>

                <p className="text-xs text-gray-400 mt-4 text-center">
                  *This is an estimate. Final prices may vary based on site inspection.
                </p>
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <p>Fill out the form to see your price estimate.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
