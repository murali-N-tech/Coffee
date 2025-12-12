import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiAward, FiCheck } from 'react-icons/fi';
// Ensure your logo is saved as cfc-logo.png in src/assets/
import logo from '../../assets/images/cfc-logo.png'; 

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const timelineEvents = [
    { year: "2010", title: "The Beginning", desc: "Started as a small home-kitchen venture by Andaal Awwa." },
    { year: "2015", title: "First Outlet", desc: "Opened our first official stall in Gudivada, serving 100 cups a day." },
    { year: "2018", title: "The Roast Mastery", desc: "Established our own roastery to control bean quality perfectly." },
    { year: "2023", title: "Chenna Patanam Reborn", desc: "Rebranded to spread our authentic taste across the state." },
  ];

  const stats = [
    { label: "Years of Legacy", value: "15+" },
    { label: "Cups Served Daily", value: "2000+" },
    { label: "Happy Customers", value: "50k+" },
    { label: "Secret Recipes", value: "12" },
  ];

  return (
    <div className="bg-cream min-h-screen overflow-x-hidden">
      
      {/* ================= 1. PARALLAX HERO ================= */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background Image - Dark Coffee Beans */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Coffee Background"
          />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="relative z-20 text-center px-4 max-w-4xl"
        >
          <span className="text-gold uppercase tracking-[0.4em] font-bold text-sm md:text-base mb-4 block">Since 2010</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            More Than Just <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">Coffee</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            A tribute to tradition, a celebration of culture, and a legacy brewed in every cup.
          </p>
        </motion.div>
      </div>

      {/* ================= 2. THE LEGEND OF ANDAAL (Grandma Story) ================= */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image/Logo Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl transform -translate-x-10"></div>
            <div className="relative bg-white p-8 rounded-t-[10rem] rounded-b-3xl shadow-2xl border-b-8 border-gold text-center">
                {/* LOGO IMAGE */}
                <img 
                  src={logo} 
                  alt="Andaal Awwa" 
                  className="w-48 h-48 mx-auto rounded-full border-4 border-coffee-100 shadow-inner mb-6 object-cover bg-white" 
                />
                <h3 className="font-serif text-3xl font-bold text-coffee-900">Andaal Awwa</h3>
                <p className="text-gold font-bold uppercase text-xs tracking-widest mt-2">The Soul of Our Coffee</p>
                <div className="mt-6 text-gray-600 italic font-serif">
                  "Coffee isn't a drink, it's a hug in a cup."
                </div>
            </div>
          </motion.div>

          {/* Right: The Story Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-bold uppercase tracking-widest text-sm">Our Origin</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mt-4 mb-8">From the House of Andaal</h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                Decades ago, in a small traditional kitchen, <strong>Andaal Awwa (Grandma)</strong> perfected a secret blend of coffee beans. She didn't use machines; she used intuition. She knew exactly when the roast was ready by the aroma that filled the house.
              </p>
              <p>
                Friends and neighbors would line up just for a sip of her morning brew. She believed that good coffee required three things: <strong>Patience, Purity, and Love.</strong>
              </p>
              <p>
                Today, <strong>Chennna Patanam</strong> carries that same legacy forward. Every bean we roast, every decoction we drip, and every cup we serve follows the strict standards set by Awwa herself.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <div className="flex items-center gap-2 text-coffee-900 font-bold">
                 <div className="bg-gold p-1 rounded-full"><FiCheck size={14} className="text-white"/></div>
                 <span>Traditional Brass Filter</span>
              </div>
              <div className="flex items-center gap-2 text-coffee-900 font-bold">
                 <div className="bg-gold p-1 rounded-full"><FiCheck size={14} className="text-white"/></div>
                 <span>Hand-Selected Beans</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 3. LIVE STATS STRIP ================= */}
      <div className="bg-coffee-900 py-16 text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-6xl font-bold font-serif text-gold mb-2">{stat.value}</div>
              <div className="text-coffee-200 uppercase tracking-widest text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= 4. OUR VALUES (Floating Cards) ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
              <span className="text-gold font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
              <h2 className="text-4xl font-serif font-bold text-coffee-900 mt-2">What We Stand For</h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: FiAward, title: "Uncompromised Quality", desc: "We discard any batch that doesn't meet our gold standard. If it's not perfect, we don't serve it." },
                { icon: FiHeart, title: "Rooted in Tradition", desc: "We refuse to automate the art. We still use traditional methods that machines simply cannot replicate." },
                { icon: FiUsers, title: "Community First", desc: "We are not just a business; we are a gathering place. A spot for conversations, laughter, and connection." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-cream p-10 rounded-3xl group hover:bg-coffee-900 transition-colors duration-500 cursor-pointer shadow-lg border border-transparent hover:border-gold"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gold text-3xl shadow-lg mb-6 group-hover:bg-gold group-hover:text-coffee-900 transition-colors">
                    <item.icon />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-coffee-100 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ================= 5. HISTORY TIMELINE ================= */}
      <section className="py-24 px-6 bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
           {/* Center Line */}
           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-coffee-200 transform md:-translate-x-1/2"></div>
           
           <div className="space-y-12">
             {timelineEvents.map((event, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
               >
                 {/* Content Side */}
                 <div className="md:w-1/2 pl-12 md:pl-0 md:px-12 mb-4 md:mb-0 text-left md:text-right">
                    <div className={`${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-6xl font-bold text-coffee-100 absolute -top-4 -z-10 select-none opacity-50">{event.year}</span>
                      <h4 className="text-xl font-bold text-coffee-900 mt-4">{event.title}</h4>
                      <p className="text-gray-600 mt-2 text-sm">{event.desc}</p>
                    </div>
                 </div>

                 {/* Dot on Line */}
                 <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow transform -translate-x-1/2 z-10"></div>

                 {/* Empty Side (Spacer) */}
                 <div className="md:w-1/2"></div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* ================= 6. FINAL CTA ================= */}
      <section className="py-20 text-center px-4">
        <h2 className="text-4xl font-serif font-bold text-coffee-900 mb-6">Experience the Legacy</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Come visit us and taste the coffee that has been loved by generations.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000" 
          className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl h-64 md:h-96 object-cover hover:scale-[1.01] transition-transform duration-700" 
          alt="Coffee Table Setting" 
        />
      </section>

    </div>
  );
};

export default About;