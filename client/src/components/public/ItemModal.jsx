import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiInfo, FiTag, FiCheckCircle } from 'react-icons/fi';

const ItemModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full text-coffee-900 hover:bg-gold transition shadow-lg"
          >
            <FiX size={24} />
          </button>

          {/* Left: Image */}
          <div className="h-64 md:h-full bg-coffee-50 relative">
            <img 
              src={item.imageURL || 'https://via.placeholder.com/600'} 
              alt={item.name}
              className="w-full h-full object-cover" 
            />
            {item.isFeatured && (
               <div className="absolute top-6 left-6 bg-gold text-coffee-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                 Bestseller
               </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="p-8 md:p-12 overflow-y-auto">
            <div className="mb-2 flex items-center space-x-2 text-coffee-500 text-sm uppercase tracking-widest font-bold">
               <span>{item.category?.name}</span>
               {item.vegNonVeg === 'Veg' && <span className="text-green-600 border border-green-600 px-1 rounded-[2px] text-[10px]">VEG</span>}
               {item.vegNonVeg === 'Non-Veg' && <span className="text-red-600 border border-red-600 px-1 rounded-[2px] text-[10px]">NON-VEG</span>}
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-4">{item.name}</h2>
            <p className="text-2xl font-bold text-gold mb-6">₹{item.price}</p>

            <div className="prose prose-stone text-gray-600 mb-8">
               <p>{item.description}</p>
            </div>

            {/* Tags & Allergens */}
            <div className="space-y-4 border-t border-gray-100 pt-6">
               {item.tags && item.tags.length > 0 && (
                 <div className="flex items-start">
                   <FiTag className="mt-1 mr-3 text-gold" />
                   <div className="flex flex-wrap gap-2">
                     {item.tags.map(tag => (
                       <span key={tag} className="bg-coffee-50 text-coffee-700 px-2 py-1 rounded text-xs border border-coffee-100">{tag}</span>
                     ))}
                   </div>
                 </div>
               )}
               
               {item.allergens && item.allergens.length > 0 && (
                 <div className="flex items-start text-gray-500 text-sm">
                   <FiInfo className="mt-1 mr-3" />
                   <span>Contains: {item.allergens.join(', ')}</span>
                 </div>
               )}
            </div>

            <div className="mt-8 bg-coffee-50 p-4 rounded-lg flex items-center text-coffee-800 text-sm">
               <FiCheckCircle className="mr-3 text-gold text-xl" />
               <span>Freshly prepared on order. Customization available at counter.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ItemModal;