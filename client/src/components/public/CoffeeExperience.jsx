import { motion } from 'framer-motion';
import { FiCoffee, FiSun, FiLayers, FiDroplet, FiCheck } from 'react-icons/fi';

const steps = [
  {
    id: 1,
    title: "Bean Selection",
    desc: "We source premium Arabica and Robusta beans from high-altitude plantations known for rich flavor.",
    icon: <FiLayers className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Slow Roasting",
    desc: "Roasted in small, controlled batches to preserve aroma and character, unlike mass production.",
    icon: <FiSun className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Perfect Grinding",
    desc: "Beans are ground to the specific traditional South Indian texture that extracts deep flavor.",
    icon: <FiCoffee className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Decoction Magic",
    desc: "Our baristas prepare decoction fresh throughout the day using authentic metal filters.",
    icon: <FiDroplet className="w-8 h-8" />
  },
  {
    id: 5,
    title: "The Final Pour",
    desc: "Foamy hot milk meets rich decoction, poured in a classic dabara-tumbler for the perfect finish.",
    icon: <FiCheck className="w-8 h-8" />
  }
];

const CoffeeExperience = () => {
  return (
    <section className="py-20 bg-coffee-900 text-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="w-96 h-96 bg-gold rounded-full blur-3xl absolute -top-20 -left-20"></div>
         <div className="w-96 h-96 bg-gold rounded-full blur-3xl absolute bottom-0 right-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-bold">The Chennapatnam Way</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3">Discover the Art Behind Every Cup</h2>
          <p className="text-coffee-200 mt-4 max-w-2xl mx-auto">
            At Chennapatnam Filter Coffee, every cup goes through a signature 5-step craft process.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-coffee-800 -z-10 transform -translate-y-1/2"></div>

            {steps.map((step, index) => (
                <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center text-center group"
                >
                    <div className="w-20 h-20 rounded-full bg-coffee-800 border-2 border-gold flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-coffee-900 transition-colors duration-300 shadow-lg relative z-10">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-coffee-200 leading-relaxed">
                        {step.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeExperience;