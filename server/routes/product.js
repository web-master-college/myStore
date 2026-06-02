const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/', productController.getAllProducts);


module.exports = router;
// router.get('/one', productController.getAllProducts);