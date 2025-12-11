import { useState, useEffect } from 'react';
import { FiShoppingBag, FiCheck, FiPackage } from 'react-icons/fi';
import { motion } from 'framer-motion';
import api from '../../services/api'; // Import API

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH REAL PRODUCTS FROM DB
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleOrder = (productName) => {
    const message = `Hi Chennapatnam Coffee, I would like to order the ${productName}. Please confirm availability.`;
    const url = `https://wa.me/919492807547?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (loading) return <div className="min-h-screen flex justify-center items-center">Loading Shop...</div>;

  return (
    <div className="bg-cream min-h-screen pb-20">
      {/* Header */}
      <div className="bg-coffee-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
             <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Shop Coffee</h1>
             <p className="text-coffee-200 text-lg">Bring the tradition home.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product._id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-coffee-100 flex flex-col"
            >
              {/* Image Area */}
              <div className="h-64 relative bg-coffee-50">
                <img 
                  src={product.imageURL || 'https://via.placeholder.com/400x300'} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-gold text-coffee-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-coffee-900 font-serif">{product.name}</h3>
                  <span className="text-lg font-bold text-coffee-600">₹{product.price}</span>
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-2">
                    <FiPackage className="text-gold" />
                    <span>{product.weight}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6 text-sm text-gray-500">
                    <div className="flex items-center"><FiCheck className="text-gold mr-2"/> Freshly Ground</div>
                    <div className="flex items-center"><FiCheck className="text-gold mr-2"/> Sealed for Aroma</div>
                </div>

                <button 
                  onClick={() => handleOrder(product.name)}
                  className="w-full py-3 bg-coffee-900 text-white font-bold rounded-lg hover:bg-gold hover:text-coffee-900 transition-colors flex items-center justify-center space-x-2"
                >
                  <FiShoppingBag />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
            <div className="text-center py-20">
                <h3 className="text-2xl text-coffee-800 font-serif">Products coming soon!</h3>
            </div>
        )}

        {/* Bulk Order Section */}
        <div className="mt-20 bg-gold/10 border border-gold rounded-xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-2">Looking for Bulk Orders?</h3>
            <p className="text-gray-700 mb-6">We supply fresh decoction and powder for events, weddings, and corporate offices.</p>
            <button className="bg-coffee-900 text-white px-8 py-3 rounded-full hover:bg-coffee-800 transition">
                Contact for Wholesale
            </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;