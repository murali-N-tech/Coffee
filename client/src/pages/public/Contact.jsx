// Public Contact page 
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="min-h-screen bg-coffee-50 py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-coffee-900 mb-6 font-serif">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <FiMapPin className="text-gold w-6 h-6 mt-1 mr-4" />
              <div>
                <h4 className="font-bold text-gray-800">Address</h4>
                <p className="text-gray-600">12-34, Main Road, Near Bus Stand,<br/>Gudivada, Andhra Pradesh, 521301</p>
              </div>
            </div>
            <div className="flex items-center">
              <FiPhone className="text-gold w-6 h-6 mr-4" />
              <div>
                <h4 className="font-bold text-gray-800">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center">
              <FiMail className="text-gold w-6 h-6 mr-4" />
              <div>
                <h4 className="font-bold text-gray-800">Email</h4>
                <p className="text-gray-600">hello@chennapatanam.com</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            {/* Google Map Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.664426532452!2d80.99!3d16.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI2JzI0LjAiTiA4MMKwNTknMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" height="250" style={{border:0}} allowFullScreen="" loading="lazy" className="rounded-lg"
            ></iframe>
          </div>
        </div>

        <div className="bg-coffee-900 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center text-center">
          <h2 className="text-3xl font-serif mb-4">Opening Hours</h2>
          <div className="space-y-4 text-lg">
            <div className="border-b border-coffee-700 pb-2">
              <span className="block text-gold text-sm uppercase tracking-widest">Monday - Friday</span>
              <span>7:00 AM - 9:00 PM</span>
            </div>
            <div className="border-b border-coffee-700 pb-2">
              <span className="block text-gold text-sm uppercase tracking-widest">Saturday - Sunday</span>
              <span>8:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;