import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiMapPin, FiPhone, FiMail, FiArrowRight, FiLock, FiArrowUp, FiCoffee } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/cfc-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);

  // Handle Scroll to Top Visibility
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Discover',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Our Menu', path: '/menu' },
        { name: 'Retail Shop', path: '/shop' },
        { name: 'Our Story', path: '/about' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Bulk Orders', path: '/contact' }, // Directs to contact for wholesale
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Use', path: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-coffee-900 text-white relative mt-32">
      
      {/* ================= 1. FLOATING NEWSLETTER CARD ================= */}
      <div className="absolute -top-20 left-0 w-full px-4 z-20">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gold rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          {/* Decorative Pattern */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute -left-10 -top-10 w-32 h-32 bg-coffee-900 opacity-5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 mb-6 md:mb-0 md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-coffee-900 mb-2 flex items-center justify-center md:justify-start gap-2">
              <FiCoffee /> Join the Coffee Club
            </h3>
            <p className="text-coffee-800 font-medium opacity-90">Get updates on new blends & 10% off your first order.</p>
          </div>
          
          <div className="relative z-10 w-full md:w-1/2 flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-6 py-4 rounded-full bg-white text-coffee-900 border-2 border-transparent focus:border-coffee-900 focus:outline-none shadow-inner placeholder-gray-400 transition-all"
            />
            <button className="bg-coffee-900 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-coffee-900 transition-all shadow-lg flex items-center justify-center gap-2 group whitespace-nowrap">
              Subscribe <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ================= 2. MAIN FOOTER CONTENT ================= */}
      <div className="pt-40 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
               <img src={logo} alt="Chennna Patanam" className="w-12 h-12 rounded-xl object-cover shadow-lg group-hover:rotate-6 transition-transform" />
               <div className="flex flex-col">
                 <span className="font-serif text-2xl font-bold tracking-wide leading-none">Chennna <span className="text-gold">Patanam</span></span>
                 <span className="text-[10px] text-coffee-300 uppercase tracking-widest">Filter Coffee</span>
               </div>
            </Link>
            <p className="text-coffee-200 leading-relaxed text-sm pr-4">
              Brewing heritage since 2010. We bring the authentic taste of South Indian filter coffee to your cup, roasted and brewed with passion.
            </p>
            <div className="flex space-x-3 pt-2">
              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-coffee-900 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-serif font-bold text-white mb-6 relative inline-block">
                {column.title}
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      to={link.path} 
                      className="text-coffee-200 hover:text-gold transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                    >
                      <FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-gold size-3" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT COLUMN */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold rounded-full"></span>
            </h4>
            <ul className="space-y-5 text-coffee-200 text-sm">
              <li className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-full text-gold shrink-0 mt-1">
                  <FiMapPin />
                </div>
                <span>12-34, Main Road, Near Bus Stand,<br/>Gudivada, Andhra Pradesh, 521301</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-full text-gold shrink-0">
                  <FiPhone />
                </div>
                <span className="font-bold text-white hover:text-gold cursor-pointer transition">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-full text-gold shrink-0">
                  <FiMail />
                </div>
                <span className="hover:text-gold cursor-pointer transition">hello@chennapatanam.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= 3. BOTTOM BAR ================= */}
      <div className="bg-coffee-950 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs text-coffee-300">
          <p>&copy; {currentYear} Chennna Patanam Filter Coffee. All rights reserved.</p>
          
          <div className="flex items-center space-x-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-gold transition-colors">Terms & Conditions</a>
             
             {/* SECRET ADMIN BUTTON */}
             <Link 
               to="/admin/login" 
               className="text-coffee-800 hover:text-gold transition-colors p-2"
               title="Admin Access"
             >
                <FiLock size={12} />
             </Link>
          </div>
        </div>
      </div>

      {/* ================= 4. SCROLL TO TOP BUTTON ================= */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gold text-coffee-900 p-3 rounded-full shadow-2xl hover:bg-white transition-colors z-40 border-4 border-coffee-900"
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  );
};

export default Footer;