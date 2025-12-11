// Public About page 
const About = () => {
  return (
    <div className="py-20 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-coffee-900 text-center mb-8 font-serif">Our Story</h1>
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-t-4 border-gold">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to <span className="font-bold text-coffee-800">Chennna Patanam Filter Coffee</span>. 
            Born from a passion for authentic South Indian traditions, we started as a small stall in Gudivada with a simple mission: 
            to serve the perfect cup of filter kaapi.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We source our beans directly from the lush estates of Coorg and Chikmagalur, roasting them to a medium-dark perfection 
            that balances strength with aroma. Our brewing method is traditional—using brass filters and the precise "degree" milk.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
             <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000" className="rounded-lg h-48 w-full object-cover" alt="Cafe Interior" />
             <img src="https://images.unsplash.com/photo-1511537632536-b74c2769373d?q=80&w=1000" className="rounded-lg h-48 w-full object-cover" alt="Coffee Pouring" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;