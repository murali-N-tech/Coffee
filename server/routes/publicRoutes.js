const express = require('express');
const router = express.Router();
const { getMenuItems } = require('../controllers/menuController');
const { getCategories } = require('../controllers/categoryController');
const { getSettings } = require('../controllers/settingsController'); 
const { getProducts } = require('../controllers/productController');
const { sendContactEmail } = require('../controllers/contactController');

router.get('/menu', getMenuItems);
router.get('/categories', getCategories);
router.get('/settings', getSettings); 
router.get('/products', getProducts);
router.post('/contact', sendContactEmail);

module.exports = router;