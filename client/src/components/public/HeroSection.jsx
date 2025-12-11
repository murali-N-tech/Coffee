import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-[90vh] bg-hero-pattern bg-cover bg-center bg-fixed">
      {/* Dark Overlay with slightly stronger contrast for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm md:text-base">
            Authentic Chennapatnam Filter Coffee
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 leading-tight font-serif">
            Taste the <span className="text-gold italic">Tradition</span>
          </h1>
          <p className="text-coffee-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Brewed with passion, perfected with heritage. Bringing the true South Indian filter coffee experience to every cup.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/menu" 
              className="px-8 py-3 bg-gold text-coffee-900 font-bold rounded-full hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg"
            >
              Explore Menu
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-coffee-900 transition"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;