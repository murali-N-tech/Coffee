const express = require('express');
const router = express.Router();
const { getMenuItems } = require('../controllers/menuController');
const { getCategories } = require('../controllers/categoryController');
const { getSettings } = require('../controllers/settingsController'); // Import here

router.get('/menu', getMenuItems);
router.get('/categories', getCategories);
router.get('/settings', getSettings); // Add this line

module.exports = router;