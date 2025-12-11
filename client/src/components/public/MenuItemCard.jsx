import { motion } from 'framer-motion';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

const MenuItemCard = ({ item, onClick }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onClick={() => onClick(item)}
      // INCREASED HEIGHT to h-48 for a bigger, premium card
      className="group relative bg-[#F9F5F0] rounded-3xl p-8 h-48 flex items-center justify-between cursor-pointer border border-transparent hover:border-gold/50 shadow-md hover:shadow-2xl transition-all duration-300 w-full"
    >
      {/* Left Side: Name & Price */}
      <div className="flex-1 pr-20 z-10 flex flex-col justify-center h-full">
        <div className="flex flex-col items-start gap-2">
           {item.isFeatured && (
             <span className="bg-gold text-coffee-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-1 shadow-sm">
               Best Seller
             </span>
           )}
           {/* BIGGER FONT */}
           <h3 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 group-hover:text-coffee-600 transition-colors leading-none drop-shadow-sm">
             {item.name}
           </h3>
        </div>

        <div className="flex items-center mt-4 gap-6">
            {/* BIGGER PRICE */}
            <span className="text-3xl md:text-4xl font-bold text-coffee-800">₹{item.price}</span>
            
            <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center gap-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
               Add <FiArrowRight size={16} />
            </span>
        </div>
      </div>

      {/* Right Side: MASSIVE IMAGE */}
      {/* w-56 h-56 (224px) - Overlaps significantly */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 shrink-0 pointer-events-none">
         {/* Shadow Blob */}
         <div className="absolute inset-4 bg-coffee-900/20 rounded-full blur-2xl transform translate-y-6 scale-75 group-hover:scale-95 transition-transform duration-500"></div>
         
         {/* The Image */}
         <img 
           src={item.imageURL || 'https://via.placeholder.com/300'} 
           alt={item.name} 
           className="w-full h-full object-cover rounded-full border-[6px] border-white shadow-2xl group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500 ease-out"
         />
      </div>

      {/* Floating Plus Button */}
      <div className="absolute bottom-4 right-40 bg-white text-coffee-900 p-3 rounded-full shadow-xl border border-gray-100 group-hover:bg-gold group-hover:text-white transition-colors duration-300 z-20">
        <FiPlus size={24} />
      </div>

    </motion.div>
  );
};

export default MenuItemCard;