import { useState } from 'react'; // Removed useEffect since we don't need to fetch anymore
import MenuItemCard from '../../components/public/MenuItemCard';
import ItemModal from '../../components/public/ItemModal';
import { FiSearch, FiCoffee } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  // 1. STATIC CATEGORIES (Updated to match the menu board)
  const categories = [
    { _id: 'all', name: 'All' },
    { _id: 'hot-coffee', name: 'Hot Coffee' },
    { _id: 'hot-milk', name: 'Hot Milk' },
    { _id: 'tea', name: 'Tea' },
    { _id: 'cold-milk', name: 'Cold Milk' },
    { _id: 'cold-coffee', name: 'Cold Coffee' },
    { _id: 'milkshake', name: 'Milkshake' },
    { _id: 'mojito', name: 'Mojito' },
    { _id: 'lassi', name: 'Lassi' },
    { _id: 'snacks', name: 'Snacks' },
    { _id: 'fries', name: 'Fries & Starters' },
  ];

  // 2. STATIC MENU ITEMS (Complete list from your image)
  const staticMenuItems = [
    // --- HOT COFFEE ---
    { _id: '101', name: 'Filter Coffee', price: 25, category: { name: 'Hot Coffee' }, description: 'Authentic South Indian filter coffee.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765556603/IMG-20251211-WA0015_cqryrg.jpg', isFeatured: true },
    { _id: '102', name: 'Thati Bellam Coffee', price: 30, category: { name: 'Hot Coffee' }, description: 'Healthy coffee with palm jaggery.', imageURL: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800' },
    { _id: '103', name: 'Sukku Coffee', price: 35, category: { name: 'Hot Coffee' }, description: 'Dry ginger coffee for immunity.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765556543/Sukku_coffee_gfjtk7.png' },
    { _id: '104', name: 'Black Coffee', price: 25, category: { name: 'Hot Coffee' }, description: 'Strong black coffee without milk.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765556603/IMG-20251211-WA0011_wkfjqi.jpg' },

    // --- HOT MILK ---
    { _id: '201', name: 'Hot Milk', price: 15, category: { name: 'Hot Milk' }, description: 'Fresh hot milk.', imageURL: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800' },
    { _id: '202', name: 'Sukku Milk', price: 25, category: { name: 'Hot Milk' }, description: 'Hot milk infused with dry ginger.', imageURL: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=800' },
    { _id: '203', name: 'Horlicks', price: 25, category: { name: 'Hot Milk' }, description: 'Classic malt drink.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765556964/Gemini_Generated_Image_f4lwi4f4lwi4f4lw_s7bcel.png' },
    { _id: '204', name: 'Boost', price: 25, category: { name: 'Hot Milk' }, description: 'Energy boost drink.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765557314/Gemini_Generated_Image_tw2djktw2djktw2d_vwjxuk.png' },
    { _id: '205', name: 'Badam Milk', price: 25, category: { name: 'Hot Milk' }, description: 'Hot almond flavored milk.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765557491/Gemini_Generated_Image_3q86lm3q86lm3q86_nutuhp.png' },
    { _id: '206', name: 'Ragi Malt', price: 25, category: { name: 'Hot Milk' }, description: 'Healthy finger millet drink.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765557706/Gemini_Generated_Image_rpqrgbrpqrgbrpqr_qcdf6s.png' },
    { _id: '207', name: 'Hot Chocolate', price: 40, category: { name: 'Hot Milk' }, description: 'Rich and creamy hot chocolate.', imageURL: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800' },

    // --- TEA ---
    { _id: '301', name: 'Sp. Tea', price: 15, category: { name: 'Tea' }, description: 'Special Elachi tea.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765556611/IMG-20251211-WA0019_yhk4je.jpg' },
    { _id: '302', name: 'Bellam Tea', price: 20, category: { name: 'Tea' }, description: 'Tea sweetened with jaggery.', imageURL: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800' },
    { _id: '303', name: 'Badam Tea', price: 25, category: { name: 'Tea' }, description: 'Tea with almond flavor.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765556602/IMG-20251211-WA0007_to3hot.jpg' },
    { _id: '304', name: 'Lemon Tea', price: 25, category: { name: 'Tea' }, description: 'Zesty lemon tea.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765558068/Gemini_Generated_Image_3xyuc93xyuc93xyu_tzizwk.png' },
    { _id: '305', name: 'Green Tea', price: 25, category: { name: 'Tea' }, description: 'Healthy green tea.', imageURL: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800' },
    { _id: '306', name: 'Spl. Masala Green Tea', price: 25, category: { name: 'Tea' }, description: 'Green tea with spices.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765558211/Gemini_Generated_Image_w6vmtew6vmtew6vm_uvn9mp.png' },
    { _id: '307', name: 'Black Tea', price: 25, category: { name: 'Tea' }, description: 'Strong black tea.', imageURL: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800' },

    // --- COLD MILK ---
    { _id: '401', name: 'Spl. Rose Milk', price: 75, category: { name: 'Cold Milk' }, description: 'Refreshing rose flavored milk.', imageURL: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?q=80&w=800' },
    { _id: '402', name: 'Spl. Badam Milk', price: 75, category: { name: 'Cold Milk' }, description: 'Chilled almond milk.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765558792/Gemini_Generated_Image_zb7mf5zb7mf5zb7m_gyvmic.png' },
    { _id: '403', name: 'Spl. Pista Milk', price: 75, category: { name: 'Cold Milk' }, description: 'Chilled pistachio milk.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765556602/IMG-20251211-WA0005_nzi1yt.jpg' },

    // --- COLD COFFEE ---
    { _id: '501', name: 'Cold Coffee', price: 130, category: { name: 'Cold Coffee' }, description: 'Classic chilled coffee.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765556603/IMG-20251211-WA0016_g4fapm.jpg' },
    { _id: '502', name: 'Chocolate Cold Coffee', price: 150, category: { name: 'Cold Coffee' }, description: 'Cold coffee with chocolate syrup.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765556603/IMG-20251211-WA0013_x7oz5h.jpg' },
    { _id: '503', name: 'Caramel Cold Coffee', price: 150, category: { name: 'Cold Coffee' }, description: 'Cold coffee with caramel drizzle.', imageURL: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800' },
    { _id: '504', name: 'Nutella Cold Coffee', price: 150, category: { name: 'Cold Coffee' }, description: 'Rich Nutella blended coffee.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765559205/Gemini_Generated_Image_gm55lcgm55lcgm55_xbkz42.png' },

    // --- MILKSHAKE ---
    { _id: '601', name: 'Chocolate Milkshake', price: 110, category: { name: 'Milkshake' }, description: 'Thick chocolate shake.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765556603/IMG-20251211-WA0013_x7oz5h.jpg' },
    { _id: '602', name: 'Mango Milkshake', price: 110, category: { name: 'Milkshake' }, description: 'Seasonal mango shake.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765558605/mango_pt0vco.jpg' },
    { _id: '603', name: 'Strawberry Milkshake', price: 110, category: { name: 'Milkshake' }, description: 'Sweet strawberry shake.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765558605/straberry_l5ldpt.jpg' },
    { _id: '604', name: 'Badam Milkshake', price: 110, category: { name: 'Milkshake' }, description: 'Rich almond shake.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765558792/Gemini_Generated_Image_zb7mf5zb7mf5zb7m_gyvmic.png' },
    { _id: '605', name: 'Vanilla Milkshake', price: 110, category: { name: 'Milkshake' }, description: 'Classic vanilla shake.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765558605/Vinella_ap9elw.jpg' },
    { _id: '606', name: 'Blackcurrant Milkshake', price: 120, category: { name: 'Milkshake' }, description: 'Berry flavored shake.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765558605/staraberry_vtmucn.jpg' },
    { _id: '607', name: 'Blue Berry Milkshake', price: 120, category: { name: 'Milkshake' }, description: 'Exotic blueberry shake.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765559650/Gemini_Generated_Image_yuo1mgyuo1mgyuo1_frvktj.png' },
    { _id: '608', name: 'Spl. Rose Milkshake', price: 120, category: { name: 'Milkshake' }, description: 'Premium rose shake.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765559809/Gemini_Generated_Image_gbxr1ngbxr1ngbxr_hf2sps.png' },
    { _id: '609', name: 'Spl. Pista Milkshake', price: 120, category: { name: 'Milkshake' }, description: 'Premium pistachio shake.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765559950/licensed-image_fqwqng.jpg' },
    { _id: '610', name: 'Oreo Milkshake', price: 140, category: { name: 'Milkshake' }, description: 'Crunchy Oreo blend.', imageURL: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800' },
    { _id: '611', name: 'Kit Kat Milkshake', price: 140, category: { name: 'Milkshake' }, description: 'Kit Kat chocolate blend.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765560173/Gemini_Generated_Image_78vg2e78vg2e78vg_avdbct.png' },
    { _id: '612', name: 'Raspberry Milkshake', price: 140, category: { name: 'Milkshake' }, description: 'Tangy raspberry shake.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765560358/Gemini_Generated_Image_r38rv0r38rv0r38r_ueasov.png' },

    // --- MOJITO ---
    { _id: '701', name: 'Masala Lemonade', price: 70, category: { name: 'Mojito' }, description: 'Spiced lemon soda.', imageURL: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800' },
    { _id: '702', name: 'Tango Mango', price: 70, category: { name: 'Mojito' }, description: 'Mango flavored refreshing drink.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765560543/Gemini_Generated_Image_9zo90j9zo90j9zo9_teo18y.png' },
    { _id: '703', name: 'Kala Khatta Slush', price: 70, category: { name: 'Mojito' }, description: 'Tangy icy slush.', imageURL: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800' },
    { _id: '704', name: 'Chilli Guava Slush', price: 70, category: { name: 'Mojito' }, description: 'Spicy guava slush.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765560689/Gemini_Generated_Image_k334esk334esk334_xn5z3o.png' },
    { _id: '705', name: 'Watermelon Slush', price: 70, category: { name: 'Mojito' }, description: 'Refreshing watermelon slush.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765560835/Gemini_Generated_Image_n799f6n799f6n799_h4hg8l.png' },
    { _id: '706', name: 'Green Apple', price: 80, category: { name: 'Mojito' }, description: 'Green apple cooler.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765560970/Gemini_Generated_Image_f0irijf0irijf0ir_befj7v.png' },
    { _id: '707', name: 'Virgin Mojito', price: 80, category: { name: 'Mojito' }, description: 'Classic mint and lemon mojito.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765561189/Gemini_Generated_Image_6mzu5j6mzu5j6mzu_cp1zoy.png' },
    { _id: '708', name: 'Ocean Blue', price: 80, category: { name: 'Mojito' }, description: 'Blue lagoon cooler.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765561348/Gemini_Generated_Image_ox82oox82oox82oo_vwxltt.png' },

    // --- LASSI ---
    { _id: '801', name: 'Lassi', price: 40, category: { name: 'Lassi' }, description: 'Sweet yogurt drink.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765561674/Gemini_Generated_Image_n600run600run600_icjnxr.png' },
    { _id: '802', name: 'Black Current Lassi', price: 50, category: { name: 'Lassi' }, description: 'Lassi with blackcurrant twist.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765561819/Gemini_Generated_Image_1pux9o1pux9o1pux_w5zpnh.png' },
    { _id: '803', name: 'Strawberry Lassi', price: 50, category: { name: 'Lassi' }, description: 'Strawberry flavored lassi.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765561960/Gemini_Generated_Image_fugi5jfugi5jfugi_li2qnr.png' },
    { _id: '804', name: 'Mango Lassi', price: 50, category: { name: 'Lassi' }, description: 'Mango flavored lassi.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765560484/Gemini_Generated_Image_eapoj7eapoj7eapo_ymywfr.png' },

    // --- SNACKS ---
    { _id: '901', name: 'Corn Samosa', price: 12, category: { name: 'Snacks' }, description: 'Crispy corn filled samosa.', imageURL: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800' },
    { _id: '902', name: 'Punjabi Samosa (3 Pcs)', price: 40, category: { name: 'Snacks' }, description: 'Classic potato filled samosa.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765614178/Gemini_Generated_Image_vvau82vvau82vvau_ff55dn.png' },
    { _id: '903', name: 'Sweet Corn', price: 50, category: { name: 'Snacks' }, description: 'Steamed sweet corn.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765562477/Screenshot_2025-12-12_232916_h3fxo6.png' },
    { _id: '904', name: 'Masala Corn', price: 60, category: { name: 'Snacks' }, description: 'Spicy masala sweet corn.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765614323/Gemini_Generated_Image_tzwd3mtzwd3mtzwd_v3cz65.png' },

    // --- FRIES & STARTERS ---
    { _id: '905', name: 'French Fries', price: 80, category: { name: 'Fries & Starters' }, description: 'Classic salted fries.', imageURL: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=800' },
    { _id: '906', name: 'Peri Peri French Fries', price: 90, category: { name: 'Fries & Starters' }, description: 'Spicy peri peri fries.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765614735/Gemini_Generated_Image_93nq0n93nq0n93nq_1_uu00u2.png' },
    { _id: '907', name: 'Veg Nuggets (5 Pcs)', price: 80, category: { name: 'Fries & Starters' }, description: 'Crispy vegetable nuggets.', imageURL: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800' },
    { _id: '908', name: 'Chicken Nuggets (5 Pcs)', price: 90, category: { name: 'Fries & Starters' }, description: 'Crispy chicken nuggets.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765563376/c9306c74-42d8-4b9e-bde1-1d5a632d99e8_dfb1333d-c4fa-4ae2-8408-b373712584f6_hhvpj5.avif' },
    { _id: '909', name: 'Veggie Stix (6 Pcs)', price: 80, category: { name: 'Fries & Starters' }, description: 'Crispy veg sticks.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765563177/Gemini_Generated_Image_5z6m845z6m845z6m_bt0mtg.png' },
    { _id: '910', name: 'Jalapeno Cheese Balls (8 Pcs)', price: 80, category: { name: 'Fries & Starters' }, description: 'Cheesy jalapeno bites.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765562952/Gemini_Generated_Image_hjtsh5hjtsh5hjts_tucn3f.png' },
    { _id: '912', name: 'Chicken Popcorn (14 Pcs)', price: 100, category: { name: 'Fries & Starters' }, description: 'Bite-sized chicken popcorn.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765563475/c16ffbea-f2bf-4e50-a73c-bf7e3378bfd3_fffdf018-5323-4245-b137-e525c0dabf9c_x9iehh.avif' },
    { _id: '913', name: 'Chicken Lollipops (5 Pcs)', price: 150, category: { name: 'Fries & Starters' }, description: 'Spicy chicken lollipops.', imageURL: 'https://res.cloudinary.com/dkpjimiip/image/upload/v1765563280/Gemini_Generated_Image_ldukbnldukbnlduk_elnpgy.png' },
  ];

  // State
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter Logic
  const filteredItems = staticMenuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category.name === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = q === '' || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

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
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20 min-h-[50vh] px-4 py-12">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <MenuItemCard 
                key={item._id} 
                item={item} 
                onClick={() => setSelectedItem(item)} 
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
