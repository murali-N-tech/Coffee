// Footer component 
import { FiCoffee, FiInstagram, FiFacebook, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-coffee-900 text-coffee-100 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <FiCoffee className="h-6 w-6 text-gold" />
            <span className="font-serif text-xl font-bold text-white">Chennna Patanam</span>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            Brewing memories one cup at a time. Authentic filter coffee and traditional snacks in the heart of Gudivada.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-serif text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/menu" className="hover:text-gold transition">Menu</a></li>
            <li><a href="/about" className="hover:text-gold transition">Our Story</a></li>
            <li><a href="/contact" className="hover:text-gold transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-serif text-lg mb-4">Visit Us</h3>
          <p className="flex items-start text-sm mb-2">
            <FiMapPin className="mr-2 mt-1 text-gold" />
            12-34, Main Road, Near Bus Stand, <br /> Gudivada, AP 521301
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gold hover:text-white"><FiInstagram size={20} /></a>
            <a href="#" className="text-gold hover:text-white"><FiFacebook size={20} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-12 pt-8 border-t border-coffee-800 opacity-50">
        © {new Date().getFullYear()} Chennna Patanam Filter Coffee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;