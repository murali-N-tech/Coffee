import { useEffect, useState } from 'react';
import { getMenuItems, getCategories } from '../../services/menuService';
import MenuItemCard from '../../components/public/MenuItemCard';
import ItemModal from '../../components/public/ItemModal';
import Loader from '../../components/common/Loader';
import { FiSearch, FiCoffee } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menuData, categoryData] = await Promise.all([getMenuItems(), getCategories()]);
        setItems(menuData);
        setCategories([{ _id: 'all', name: 'All' }, ...categoryData]);
      } catch (error) {
        console.error("Failed to load menu", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter Logic
  const filteredItems = items.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category?.name === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) return <div className="h-screen flex items-center justify-center bg-cream"><Loader /></div>;

  return (
    <div className="min-h-screen bg-cream pb-20">
      
      {/* 1. Rich Header */}
      <div className="relative bg-coffee-900 pt-32 pb-16 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-hero-pattern bg-cover bg-center"></div>
        <div className="relative z-10 px-4">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Culinary Collection</span>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mt-2 mb-4">Our Menu</h1>
            <p className="text-coffee-200 max-w-xl mx-auto text-lg font-light">
                Explore our carefully curated selection of traditional brews and savory delights.
            </p>
        </div>
      </div>

      {/* 2. Sticky Controls Bar (Categories + Search) */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-coffee-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Horizontal Scrollable Categories */}
                <div className="flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar space-x-2 md:space-x-4 flex-1">
                    {categories.map((cat) => (
                        <button
                            key={cat._id}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                                activeCategory === cat.name
                                ? 'bg-coffee-900 text-gold border-coffee-900 shadow-md transform scale-105'
                                : 'bg-transparent text-coffee-600 border-transparent hover:bg-coffee-50 hover:border-coffee-100'
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search menu..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full border border-transparent focus:bg-white focus:border-gold focus:ring-0 outline-none transition-all text-sm"
                    />
                </div>
            </div>
        </div>
      </div>

      {/* 3. The Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Section Title (Dynamic) */}
        <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-2xl font-serif font-bold text-coffee-900">{activeCategory}</h2>
            <div className="h-[1px] bg-coffee-100 flex-1"></div>
            <span className="text-gray-400 text-sm">{filteredItems.length} items</span>
        </div>

        {/* Animated Grid */}
        {/* Increased gap-y-20 to accommodate the huge pop-out images */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20 min-h-[50vh] px-4 py-12">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <MenuItemCard 
                key={item._id} 
                item={item} 
                onClick={(i) => setSelectedItem(i)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 opacity-50">
             <FiCoffee size={64} className="mb-4 text-coffee-300" />
             <p className="text-xl font-serif text-coffee-800">No items found.</p>
             <p className="text-sm">Try adjusting your search or category.</p>
          </div>
        )}
      </div>

      {/* 4. Detail Modal */}
      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

    </div>
  );
};

export default Menu;
