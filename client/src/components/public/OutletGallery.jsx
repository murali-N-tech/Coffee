const OutletGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000", // Cafe interior
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000", // Coffee cup close up
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000", // Barista pouring
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000"  // Customers
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-widest font-bold text-sm">Ambiance</span>
          <h2 className="text-3xl font-serif font-bold text-coffee-900 mt-2">Life at Chennapatnam</h2>
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