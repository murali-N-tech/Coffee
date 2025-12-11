// CRUD logic for Categories 
const Category = require('../models/Category');

const getCategories = async (req, res) => {
  const categories = await Category.find({ isHidden: false }).sort({ displayOrder: 1 });
  res.json(categories);
};

const createCategory = async (req, res) => {
  const { name, slug, displayOrder } = req.body;
  try {
    const category = await Category.create({ name, slug, displayOrder });
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getCategories, createCategory };