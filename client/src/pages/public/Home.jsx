// Public Home page 
import HeroSection from '../../components/public/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* Example Feature Section */}
      <section className="py-20 px-6 bg-cream text-center">
        <h2 className="text-4xl text-coffee-900 font-bold mb-12">Our Specialties</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-5xl mb-4">☕</div>
              <h3 className="text-2xl font-bold text-coffee-800 mb-2">Classic Filter Coffee</h3>
              <p className="text-gray-600">Brewed with premium Arabica and Robusta beans for that authentic taste.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;