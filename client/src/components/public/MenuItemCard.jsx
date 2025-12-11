// Menu Item Card component 
import { motion } from 'framer-motion';

const MenuItemCard = ({ item }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-coffee-100 group"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={item.imageURL || 'https://via.placeholder.com/300'} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.isFeatured && (
          <span className="absolute top-3 left-3 bg-gold text-coffee-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            Best Seller
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-coffee-900 font-serif">{item.name}</h3>
          <span className="text-lg font-semibold text-coffee-600">₹{item.price}</span>
        </div>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags?.map((tag, idx) => (
            <span key={idx} className="text-xs bg-coffee-50 text-coffee-600 px-2 py-1 rounded border border-coffee-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;