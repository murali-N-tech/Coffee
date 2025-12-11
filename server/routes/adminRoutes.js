// Protected routes (e.g., /api/v1/admin/menu) 
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/rbacMiddleware');
const { loginUser, registerUser } = require('../controllers/authController');
const { createMenuItem, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');
const { createCategory } = require('../controllers/categoryController');
const { upload, uploadImage } = require('../controllers/mediaController');
const { updateSettings } = require('../controllers/settingsController');
const { createProduct, deleteProduct } = require('../controllers/productController');

router.post('/login', loginUser);
router.post('/register', registerUser);

router.route('/categories')
  .post(protect, authorize('Owner', 'Manager'), createCategory);

router.route('/menu')
  .post(protect, authorize('Owner', 'Manager', 'Content Editor'), createMenuItem);

router.route('/menu/:id')
  .put(protect, authorize('Owner', 'Manager', 'Content Editor'), updateMenuItem)
  .delete(protect, authorize('Owner', 'Manager'), deleteMenuItem);

router.post('/upload', protect, upload.single('image'), uploadImage);
router.put('/settings', protect, authorize('Owner', 'Manager'), updateSettings);
router.route('/products')
  .post(protect, authorize('Owner', 'Manager'), createProduct);

router.route('/products/:id')
  .delete(protect, authorize('Owner', 'Manager'), deleteProduct);

module.exports = router;