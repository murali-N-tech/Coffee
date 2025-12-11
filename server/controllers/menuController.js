// CRUD logic for Menu Items 
const MenuItem = require('../models/MenuItem');

const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ isAvailable: true }).populate('category', 'name slug');
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.create(req.body);
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!menuItem) return res.status(404).json({ message: 'Item not found' });
    res.json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMenuItem = async (req, res) => {
    try {
      const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
      if (!menuItem) return res.status(404).json({ message: 'Item not found' });
      res.json({ message: 'Item removed' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { getMenuItems, createMenuItem, updateMenuItem, deleteMenuItem };