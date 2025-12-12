import { useState, useEffect } from 'react';
import HeroSection from '../../components/public/HeroSection';
import CoffeeExperience from '../../components/public/CoffeeExperience';
import OutletGallery from '../../components/public/OutletGallery';
import { FiShoppingBag, FiStar, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);

  // 1. STATIC PRODUCTS (The Core Items you want to show)
  const staticProducts = [
    {
      _id: 'static-1',
      name: "Classic Blend (80/20)",
      price: 250,
      tag: "Best Seller",
      // Using the Cloudinary links generated for you
      imageURL: "https://res.cloudinary.com/dkpjimiip/image/upload/v1765564120/Gemini_Generated_Image_683edf683edf683e_sppyh1.png"
    },
    {
      _id: 'static-2',
      name: "Pure Coffee Gold Blend",
      price: 300,
      tag: "Premium",
      imageURL: "https://res.cloudinary.com/dkpjimiip/image/upload/v1765564465/Gemini_Generated_Image_btbdi0btbdi0btbd_atzxzk.png"
    },
    {
      _id: 'static-3',
      name: "CFC Honey",
      price: 850,
      tag: "Natural",
      imageURL: "https://res.cloudinary.com/dkpjimiip/image/upload/v1765564787/Gemini_Generated_Image_8n2dpy8n2dpy8n2d_inwbn6.png"
    }
  ];

  // 2. Fetch & Merge Logic
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/products');
        
        // Combine Static items FIRST, then add any dynamic items from DB
        const allProducts = [...staticProducts, ...data];
        
        // Only show the top 3 items on the Home page
        setProducts(allProducts.slice(0, 3));
      } catch (error) {
        console.error("Failed to load DB products, showing static only.");
        // Fallback: Show static products if API fails
        setProducts(staticProducts);
      }
    };
    fetchProducts();
  }, []);

  const signatureCoffees = [
    { 
      name: "Classic Chennapatnam Filter Kaapi", 
      desc: "The original gold standard. Served in a traditional brass davara tumbler.", 
      image: "https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      name: "Bellam Coffee", 
      desc: "A healthy twist. Sweetened with organic jaggery for a caramel-like richness.", 
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      name: "Sukku Coffee", 
      desc: "Infused with dry ginger and spices. A soothing remedy for the throat.", 
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      name: "First Decoction Coffee", 
      desc: "Pure, strong, and intense. For true connoisseurs who love the kick.", 
      image: "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?q=80&w=800&auto=format&fit=crop" 
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* SECTION 1: Why Chennapatnam? */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-coffee-900 font-bold font-serif">Why Chennapatnam Filter Coffee?</h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {['100% Premium Coffee Beans', 'Slow-roasted for Aroma', 'Traditional Decoction', 'Fresh Milk, Perfect Foam', 'Loved Across Telugu States'].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-b-4 border-gold"
              >
                <FiStar className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-coffee-800 text-sm md:text-base">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Premium Experience */}
      <CoffeeExperience />

      {/* SECTION 3: Signature Coffees */}
      <section className="py-24 px-6 bg-coffee-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div>
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Menu Highlights</span>
                <h2 className="text-4xl font-serif font-bold text-coffee-900 mt-2">Signature Coffees</h2>
             </div>
             <Link to="/menu" className="text-coffee-600 font-bold hover:text-gold transition mt-4 md:mt-0 flex items-center group">
                View Full Menu <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatureCoffees.map((coffee, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-transparent hover:border-gold/30 transition-all duration-300"
              >
                <div className="h-56 overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                   <img 
                     src={coffee.image} 
                     alt={coffee.name} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                   />
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-8 right-6 bg-gold text-coffee-900 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-20 group-hover:rotate-12 transition-transform">
                     <span className="text-2xl">☕</span>
                  </div>
                  <h3 className="text-xl font-bold text-coffee-900 mb-3 font-serif leading-tight">{coffee.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{coffee.desc}</p>
                  <Link to="/menu" className="text-xs font-bold text-gold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                     Order Now <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Retail Store Preview (UPDATED) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Retail Store</span>
          <h2 className="text-4xl font-serif font-bold text-coffee-900 mt-2 mb-4">Bring the Tradition Home</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Shop our authentic coffee powders and brew the perfect cup in your own kitchen.</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {products.map((item) => (
              <div key={item._id} className="border border-coffee-100 rounded-xl p-6 relative group hover:border-gold transition bg-cream/30">
                {item.tag && (
                  <span className="absolute top-4 right-4 bg-coffee-100 text-coffee-800 text-xs font-bold px-2 py-1 rounded shadow-sm">{item.tag}</span>
                )}
                
                {/* Product Image Container */}
                <div className="h-48 bg-white rounded-lg mb-6 overflow-hidden shadow-inner relative flex items-center justify-center p-4">
                   <img 
                     src={item.imageURL || 'https://via.placeholder.com/300'} 
                     alt={item.name} 
                     className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
                
                <h3 className="text-xl font-bold text-coffee-900 font-serif line-clamp-1">{item.name}</h3>
                <p className="text-gold font-bold text-lg mt-2">₹{item.price}</p>
                
                <Link to="/shop" className="mt-4 block w-full py-2 border-2 border-coffee-900 text-coffee-900 font-bold rounded hover:bg-coffee-900 hover:text-white transition">
                   View Details
                </Link>
              </div>
            ))}
          </div>
          
          <Link to="/shop" className="inline-flex items-center gap-2 text-coffee-900 font-bold border-b-2 border-gold hover:text-gold transition pb-1">
             Visit Full Shop <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* SECTION 5: Outlet Gallery */}
      <OutletGallery />

      {/* SECTION 6: Our Promise */}
      <section className="bg-coffee-900 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-8">Our Promise to You</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['Fresh', 'Authentic', 'Consistent', 'Made with Love'].map((promise, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xl font-light">
                <FiCheckCircle className="text-gold" />
                <span>{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;