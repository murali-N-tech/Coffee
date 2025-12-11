import { FiHeart, FiUsers, FiAward } from 'react-icons/fi';

const About = () => {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-coffee-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-hero-pattern bg-cover bg-center"></div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Our Story</h1>
            <p className="text-coffee-200 text-lg max-w-2xl mx-auto px-4">Celebrating the original taste of South Indian Filter Coffee.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Story Section */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-t-4 border-gold mb-16">
          <h2 className="text-3xl font-bold text-coffee-900 mb-6 font-serif">A Journey of Flavor</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="font-bold text-coffee-800">Chennapatnam Filter Coffee</span> was created with a singular purpose: to bring the authentic, nostalgic taste of traditional filter kaapi to the modern world.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In a world of instant mixes and machine brews, we stood still to look back at our roots. We realized that true flavor comes from patience—the patience of slow-roasting beans, the patience of dripping decoction, and the patience of mixing it with frothy milk in a tumbler.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, we are more than just a coffee shop. We are a space where culture meets conversation, one cup at a time.
          </p>
        </div>

        {/* Vision & Values */}
        <div className="grid md:grid-cols-2 gap-10">
            <div>
                <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed bg-white p-6 rounded-lg shadow-sm">
                    To bring real filter kaapi culture to people everywhere, ensuring that the art of traditional South Indian brewing is preserved, celebrated, and shared with the world.
                </p>
            </div>
            
            <div>
                <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-4">Our Values</h3>
                <ul className="space-y-4">
                    <li className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <div className="bg-coffee-100 p-2 rounded-full mr-4 text-coffee-800"><FiAward /></div>
                        <span className="font-semibold text-coffee-900">Authenticity in every sip</span>
                    </li>
                    <li className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <div className="bg-coffee-100 p-2 rounded-full mr-4 text-coffee-800"><FiHeart /></div>
                        <span className="font-semibold text-coffee-900">Quality ingredients, no compromise</span>
                    </li>
                    <li className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <div className="bg-coffee-100 p-2 rounded-full mr-4 text-coffee-800"><FiUsers /></div>
                        <span className="font-semibold text-coffee-900">Customer-first approach</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;