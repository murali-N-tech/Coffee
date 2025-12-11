const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: String, required: true }, // e.g., "250g", "1kg"
  imageURL: { type: String, required: true },
  tag: { type: String }, // e.g., "Best Seller", "New"
  inStock: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);