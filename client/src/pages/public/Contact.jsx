import { useState, useEffect } from 'react';
import { FiPhone, FiMapPin, FiMail, FiClock, FiSend, FiInstagram, FiFacebook } from 'react-icons/fi';
import { motion } from 'framer-motion';
import api from '../../services/api';

const Contact = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  // DEFAULT MAP (Fallback if admin hasn't set one yet)
  const defaultMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.664197354163!2d80.9936848751438!3d16.44185208429396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3605c487375275%3A0x6a0c5c641882d92d!2sGudivada%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1709900000000";

  // 1. FETCH REAL SETTINGS FROM DATABASE
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data } = await api.get('/settings');
        setSettings(data);
      } catch (error) {
        console.error("Failed to load settings", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  // 2. Helper: Check if Open (Simple logic based on hour)
  const isOpenNow = () => {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 22; // 7 AM to 10 PM
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      await api.post('/contact', formData);
      setFormStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error("Email failed", error);
      alert('Failed to send message.');
      setFormStatus('error');
      // optionally revert to idle after some time
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  if (loading) return <div className="min-h-screen flex justify-center items-center bg-cream">Loading...</div>;

  // 3. DEFINE CARDS USING REAL DATA
  const contactCards = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Call Us",
      value: settings?.contact?.phone || "+91 00000 00000",
      link: `tel:${settings?.contact?.phone || ''}`,
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Us",
      value: settings?.contact?.email || "hello@chennapatanam.com",
      link: `mailto:${settings?.contact?.email || ''}`,
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Visit Us",
      value: settings?.contact?.address || "Gudivada, Andhra Pradesh",
      link: "#map",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-cream pb-20 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-coffee-900 py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-coffee-900"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">24/7 Support</span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mt-2 mb-6">Let's Start a Conversation</h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        
        {/* ================= DYNAMIC CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactCards.map((card, idx) => (
            <motion.a 
              href={card.link}
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-transparent hover:border-gold/30 transition-all flex flex-col items-center text-center group cursor-pointer"
            >
              <div className={`p-4 rounded-full mb-4 ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-900 mb-2">{card.title}</h3>
              <p className="text-gray-500 font-medium group-hover:text-gold transition-colors">{card.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* ================= FORM ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-coffee-100"
          >
            <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-2">Send a Message</h2>
            <p className="text-gray-500 mb-8">We usually reply within a few hours.</p>

            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center">
                <h3 className="font-bold text-xl mb-2">Message Sent! ☕</h3>
                <p>Thank you. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-coffee-50 rounded-xl px-4 py-3 outline-none focus:border-gold border border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-coffee-50 rounded-xl px-4 py-3 outline-none focus:border-gold border border-transparent"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-coffee-50 rounded-xl px-4 py-3 outline-none focus:border-gold border border-transparent"
                  required
                />
                <textarea
                  rows="4"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-coffee-50 rounded-xl px-4 py-3 outline-none focus:border-gold border border-transparent"
                  required
                ></textarea>
                
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-coffee-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-gold hover:text-coffee-900 transition-all"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* ================= INFO & MAP ================= */}
          <div className="space-y-8">
            {/* Live Status Card */}
            <div className="bg-coffee-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-serif font-bold">Opening Hours</h3>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase ${isOpenNow() ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    <span className={`w-2 h-2 rounded-full ${isOpenNow() ? 'bg-green-500 animate-ping' : 'bg-red-500'}`}></span>
                    {isOpenNow() ? 'Open Now' : 'Closed'}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-coffee-100">Mon - Fri</span>
                    <span className="font-bold text-gold">{settings?.hours?.weekdays || "7:00 AM - 9:00 PM"}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-coffee-100">Sat - Sun</span>
                    <span className="font-bold text-gold">{settings?.hours?.weekends || "8:00 AM - 10:00 PM"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div id="map" className="h-80 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <iframe
                src={settings?.contact?.mapsLink || defaultMap}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {[FiInstagram, FiFacebook].map((Icon, i) => (
                <a key={i} href={settings?.social?.[i] || '#'} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-coffee-900 hover:bg-gold hover:text-white transition-all shadow-md hover:scale-110">
                  <Icon size={24} />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
