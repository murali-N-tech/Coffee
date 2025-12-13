import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
// Logo from assets/images folder
import logo from '../../assets/images/cfc-logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-coffee-900/95 backdrop-blur-md shadow-xl py-2'
          : 'bg-gradient-to-b from-black/60 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* ================= LOGO BLOCK ================= */}
          <Link to="/" className="group flex items-center gap-3">
            
            {/* LOGO IMAGE - CIRCULAR STYLE */}
            <div className="relative">
                <img 
                  src={logo} 
                  alt="CFC Logo" 
                  // rounded-full: Makes it circular
                  // object-cover: Ensures image fills the circle without stretching
                  // h-14 w-14: Equal height and width for a perfect circle
                  // border-2 border-gold: Adds a premium ring around it
                  className="h-14 w-14 rounded-full object-cover border-2 border-gold shadow-lg transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 bg-white" 
                />
            </div>
            
            {/* Text Block */}
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-white tracking-wide leading-none">
                CHENNA <span className="text-gold">PATNAM</span>
              </span>
              <span className="text-[10px] text-coffee-200 uppercase tracking-[0.2em]">Filter Coffee</span>
            </div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group py-2"
              >
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-gold' : 'text-coffee-100 group-hover:text-white'
                }`}>
                  {link.name}
                </span>
                {/* Animated Underline */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}

            {/* Shop CTA Button */}
            <Link 
              to="/menu" 
              className="flex items-center gap-2 px-5 py-2.5 bg-gold text-coffee-900 rounded-full font-bold text-sm shadow-lg hover:bg-white hover:text-coffee-900 transition-all transform hover:scale-105 active:scale-95"
            >
              <FiShoppingBag />
              <span>Show menu</span>
            </Link>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <div className="md:hidden flex items-center">
             {/* Shop Icon Mobile */}
            <Link to="/shop" className="mr-4 text-gold hover:text-white transition">
              <FiShoppingBag size={22} />
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold transition focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full bg-coffee-900 z-40 flex flex-col items-center justify-center space-y-8 overflow-hidden"
          >
            {/* Close Button inside Overlay */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white"
            >
              <FiX size={32} />
            </button>

            {/* Links */}
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-serif font-bold tracking-wide ${
                    location.pathname === link.path ? 'text-gold' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="pt-8"
            >
               <Link 
                 to="/shop" 
                 onClick={() => setIsOpen(false)}
                 className="px-8 py-3 bg-gold text-coffee-900 rounded-full font-bold text-lg shadow-xl"
               >
                 Order Coffee
               </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;