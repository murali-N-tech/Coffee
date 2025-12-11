import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Our Menu', path: '/menu' },
        { name: 'Shop Coffee', path: '/shop' },
        { name: 'About Us', path: '/about' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'FAQs', path: '#' },
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-coffee-900 text-white relative mt-20">
      
      {/* ================= NEWSLETTER SECTION (Curved Top) ================= */}
      <div className="absolute -top-16 left-0 w-full px-4">
        <div className="max-w-6xl mx-auto bg-gold rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 mb-6 md:mb-0 md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-coffee-900 mb-2">Join the Coffee Club</h3>
            <p className="text-coffee-800 font-medium">Get 10% off your first order & exclusive offers.</p>
          </div>
          
          <div className="relative z-10 w-full md:w-1/2 flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full px-6 py-4 rounded-full bg-white text-coffee-900 border-2 border-transparent focus:border-coffee-900 focus:outline-none shadow-inner placeholder-gray-400"
            />
            <button className="bg-coffee-900 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-coffee-900 transition-all shadow-lg flex items-center gap-2 group">
              Join <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
               <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-coffee-900 font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">
                 C
               </div>
               <span className="font-serif text-2xl font-bold tracking-wide">Chennna Patanam</span>
            </Link>
            <p className="text-coffee-200 leading-relaxed text-sm">
              Brewing heritage since 2010. We bring the authentic taste of South Indian filter coffee to your cup, roasted and brewed with passion.
            </p>
            <div className="flex space-x-4 pt-2">
              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-coffee-900 transition-all duration-300 backdrop-blur-sm border border-white/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-serif font-bold text-gold mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      to={link.path} 
                      className="text-coffee-200 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-serif font-bold text-gold mb-6">Contact</h4>
            <ul className="space-y-4 text-coffee-200">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-gold shrink-0" />
                <span> Eluru-Gudivada road, Gudivada,<br/>Andhra Pradesh, 521301</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-gold shrink-0" />
                <span>+91 95425 40529</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-gold shrink-0" />
                <span>ChennapattnamFilter@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= COPYRIGHT BAR ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-coffee-300">
          <p>&copy; {currentYear} Chennna Patanam Filter Coffee. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-gold transition-colors">Privacy</a>
             <a href="#" className="hover:text-gold transition-colors">Terms</a>
             <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;