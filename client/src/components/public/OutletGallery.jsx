const OutletGallery = () => {
  const images = [
    "https://res.cloudinary.com/dkpjimiip/image/upload/v1765565558/IMG_20251121_212431_akg0ei.jpg", // Cafe interior
    "https://res.cloudinary.com/dkpjimiip/image/upload/v1765565675/IMG_20251029_141504_mgywcp.jpg", // Coffee cup close up
    "https://res.cloudinary.com/dkpjimiip/image/upload/v1765565825/IMG_20251213_001400_eny7c3.jpg", // Barista pouring
    "https://res.cloudinary.com/dkpjimiip/image/upload/v1765565992/IMG-20251201-WA0013_1_wgur7p.jpg"  // Customers
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-widest font-bold text-sm">Ambiance</span>
          <h2 className="text-3xl font-serif font-bold text-coffee-900 mt-2">Life at Chennapatnam Filter Coffee Gudivada</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-500 h-64 ${idx % 2 === 0 ? 'md:mt-8' : ''}`}>
              <img 
                src={img} 
                alt="Outlet Gallery" 
                className="w-full h-full object-cover hover:scale-110 transition duration-700" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutletGallery;