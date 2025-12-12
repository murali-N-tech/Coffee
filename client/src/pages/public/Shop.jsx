import { useState, useEffect } from 'react';
import { FiShoppingBag, FiCheck, FiPackage, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import api from '../../services/api';

const Shop = () => {
  const [dynamicProducts, setDynamicProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. STATIC PRODUCTS (Hardcoded Standard Items)
  const staticProducts = [
    {
      _id: 'static-1',
      name: "Classic Blend (80/20)",
      price: 250,
      weight: "250g",
      tag: "Best Seller",
      description: "The perfect morning starter. 80% Coffee, 20% Chicory for that traditional strong taste and thick texture.",
      imageURL: "https://res.cloudinary.com/dkpjimiip/image/upload/v1765564120/Gemini_Generated_Image_683edf683edf683e_sppyh1.png"
    },
    {
      _id: 'static-2',
      name: "Pure Coffee Gold Blend",
      price: 300,
      weight: "250g",
      tag: "Premium",
      description: "100% Arabica & Robusta mix. Zero chicory. For the purists who enjoy the raw, intense notes of coffee beans.",
      imageURL: "https://res.cloudinary.com/dkpjimiip/image/upload/v1765564465/Gemini_Generated_Image_btbdi0btbdi0btbd_atzxzk.png"
    },
    {
      _id: 'static-3',
      name: "CFC Honey",
      price: 850,
      weight: "500g",
      tag: "Natural",
      description: "Experience the rich taste of 100% pure, unfiltered honey brought to you by Chennapatnam Filter Coffee. Sourced from the finest combs, our honey is amber-hued, smooth, and naturally sweet—just the way nature intended.",
      imageURL: "https://res.cloudinary.com/dkpjimiip/image/upload/v1765564787/Gemini_Generated_Image_8n2dpy8n2dpy8n2d_inwbn6.png"
    }
  ];

  // 2. FETCH DYNAMIC PRODUCTS (From Admin/Database)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/products');
        setDynamicProducts(data);
      } catch (error) {
        console.error("Failed to load dynamic products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // 3. MERGE DATA (Static first, then Dynamic)
  const allProducts = [...staticProducts, ...dynamicProducts];

  // WhatsApp Order Logic
  const handleOrder = (productName) => {
    const message = `Hi Chennna Patanam, I would like to order the ${productName}. Please confirm availability.`;
    const url = `https://wa.me/919492807547?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-cream min-h-screen pb-20">
      
      {/* Header */}
      <div className="relative bg-coffee-900 py-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 px-4">
             <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Retail Store</span>
             <h1 className="text-4xl md:text-6xl font-bold font-serif mt-4 mb-6">Shop Authentic Coffee</h1>
             <p className="text-coffee-200 text-lg max-w-xl mx-auto font-light">
               Bring the heritage of Chennna Patanam home. Freshly ground powders and traditional brewing kits.
             </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        
        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product, idx) => (
            <motion.div 
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-transparent hover:border-gold/30 flex flex-col group"
            >
              {/* Image Area */}
              <div className="h-64 relative overflow-hidden bg-coffee-50">
                <img 
                  src={product.imageURL || 'https://via.placeholder.com/400x300'} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-gold text-coffee-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {product.tag}
                  </span>
                )}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-coffee-900 font-serif leading-tight">{product.name}</h3>
                  <span className="text-xl font-bold text-gold">₹{product.price}</span>
                </div>
                
                {/* Weight Badge */}
                <div className="flex items-center text-xs font-bold text-coffee-400 mb-4 bg-coffee-50 w-fit px-2 py-1 rounded">
                    <FiPackage className="mr-2" />
                    <span>{product.weight || "Standard Pack"}</span>
                </div>

                <p className="text-gray-500 text-sm mb-6 flex-1 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8 text-sm text-gray-400">
                    <div className="flex items-center"><FiCheck className="text-green-500 mr-2"/> Freshly Ground</div>
                    <div className="flex items-center"><FiCheck className="text-green-500 mr-2"/> 100% Authentic</div>
                </div>

                <button 
                  onClick={() => handleOrder(product.name)}
                  className="w-full py-4 bg-coffee-900 text-white font-bold rounded-xl hover:bg-gold hover:text-coffee-900 transition-all flex items-center justify-center space-x-2 shadow-lg group-hover:shadow-xl"
                >
                  <FiShoppingBag />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading State for Dynamic items */}
        {loading && (
             <div className="text-center py-10 text-gray-400 animate-pulse">
                Checking for new arrivals...
             </div>
        )}

        {/* Bulk Order Section */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 bg-white border-2 border-dashed border-gold/30 rounded-3xl p-10 text-center relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold opacity-10 rounded-full blur-2xl"></div>
            <h3 className="text-3xl font-serif font-bold text-coffee-900 mb-4">Planning an Event?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We supply fresh decoction and bulk coffee powder for weddings, corporate events, and parties. Let us handle the brewing.
            </p>
            <button className="bg-coffee-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gold hover:text-coffee-900 transition-all shadow-xl inline-flex items-center gap-2">
                Contact for Wholesale <FiArrowRight />
            </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Shop;