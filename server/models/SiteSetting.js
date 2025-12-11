// models/SiteSetting.js
const mongoose = require('mongoose');

const siteSettingSchema = new mongoose.Schema({
  hero: {
    title: { type: String, default: 'Welcome to Chennna Patanam' },
    tagline: { type: String, default: 'Authentic Filter Coffee & More' },
  },
  contact: {
    address: { type: String, default: 'Gudivada, Andhra Pradesh' },
    phone: { type: String, default: '+91 0000000000' },
    email: { type: String, default: 'contact@example.com' },
    instagram: { type: String, default: '' },
    mapsLink: { type: String, default: '' },
  },
  hours: {
    weekdays: { type: String, default: '9 AM - 9 PM' },
    weekends: { type: String, default: '10 AM - 10 PM' },
  },
  announcement: {
    active: { type: Boolean, default: false },
    text: { type: String, default: '' },
  }
}, { timestamps: true });

module.exports = mongoose.model('SiteSetting', siteSettingSchema);