// Menu Item Schema 
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  imageURL: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false }, // "Best Seller" or "Special"
  tags: [String],
  allergens: [String],
  vegNonVeg: { type: String, enum: ['Veg', 'Non-Veg', 'Egg'], default: 'Veg' },
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);