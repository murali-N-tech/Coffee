// Public Menu page 
import { useEffect, useState } from 'react';
import { getMenuItems, getCategories } from '../../services/menuService';
import MenuItemCard from '../../components/public/MenuItemCard';
import MenuGrid from '../../components/public/MenuGrid';
import Loader from '../../components/common/Loader'; // Assume you have a simple spinner

const Menu = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menuData, categoryData] = await Promise.all([getMenuItems(), getCategories()]);
        setItems(menuData);
        setCategories([{ _id: 'all', name: 'All' }, ...categoryData]);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load menu", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category?.name === activeCategory);

  if (loading) return <div className="h-screen flex items-center justify-center"><h1 className="text-2xl text-coffee-600 animate-pulse">Brewing Menu...</h1></div>;

  return (
    <div className="min-h-screen bg-coffee-50 pb-20">
      <div className="bg-coffee-900 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
        <p className="text-coffee-200">Freshly brewed coffee and delicious snacks.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.name
                  ? 'bg-coffee-600 text-white shadow-lg scale-105'
                  : 'bg-white text-coffee-600 border border-coffee-200 hover:bg-coffee-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <MenuGrid items={filteredItems} />

        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No items found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;