// Menu Grid component 
import MenuItemCard from './MenuItemCard';

const MenuGrid = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-serif text-coffee-800">No items found</h3>
        <p className="text-gray-500">Try selecting a different category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <MenuItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default MenuGrid;