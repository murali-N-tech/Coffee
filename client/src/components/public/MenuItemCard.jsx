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
      className="group relative bg-[#F9F5F0] rounded-3xl p-6 sm:p-8 h-auto sm:h-48 flex flex-col sm:flex-row items-center sm:justify-between cursor-pointer border border-transparent hover:border-gold/50 shadow-md hover:shadow-2xl transition-all duration-300 w-full mt-16 sm:mt-8 mb-6 mx-2"
    >
      {/* 1. Left Side: Name & Price */}
      {/* Increased pt-16 (64px) to pt-20 (80px) to clear the image completely on mobile */}
      <div className="flex-1 w-full sm:w-auto z-10 flex flex-col justify-center h-full pt-20 sm:pt-0 sm:pr-20 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start gap-2">
           {item.isFeatured && (
             <span className="bg-gold text-coffee-900 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-1 shadow-sm">
               Best Seller
             </span>
           )}
           <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-coffee-900 group-hover:text-coffee-600 transition-colors leading-tight drop-shadow-sm">
             {item.name}
           </h3>
        </div>

        <div className="flex items-center justify-center sm:justify-start mt-4 gap-6">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-coffee-800">₹{item.price}</span>
            
            <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center gap-1 opacity-100 sm:opacity-0 sm:-translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-300">
               Add <FiArrowRight size={16} />
            </span>
        </div>
      </div>

      {/* 2. Right Side: MASSIVE IMAGE */}
      {/* Mobile: Reduced size to w-36 h-36 (144px) to prevent overlap */}
      {/* Desktop: Kept large w-56 h-56 */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-right-8 sm:top-1/2 sm:-translate-y-1/2 w-36 h-36 sm:w-56 sm:h-56 shrink-0 pointer-events-none">
         {/* Shadow Blob */}
         <div className="absolute inset-4 bg-coffee-900/20 rounded-full blur-2xl transform translate-y-6 scale-75 group-hover:scale-95 transition-transform duration-500"></div>
         
         {/* The Image */}
         <img 
           src={item.imageURL || 'https://via.placeholder.com/300'} 
           alt={item.name} 
           className="w-full h-full object-cover rounded-full border-[4px] sm:border-[6px] border-white shadow-2xl group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500 ease-out"
         />
      </div>

      {/* Floating Plus Button (Mobile: Bottom Right corner of card) */}
      <div className="absolute bottom-4 right-4 sm:right-40 bg-white text-coffee-900 p-3 rounded-full shadow-xl border border-gray-100 group-hover:bg-gold group-hover:text-white transition-colors duration-300 z-20">
        <FiPlus size={20} />
      </div>

    </motion.div>
  );
};

export default MenuItemCard;