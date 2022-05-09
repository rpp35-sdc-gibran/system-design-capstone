const express = require('express');
const router = express.Router();
const controllers = require('../controllers/products');

console.log('controllers:', controllers);
//handles getting all products
router.get('/', (req, res) => {
  controllers.products.get(req, res);
});

//handles getting information for single product
router.get('/:product_id', (req, res) => {
  controllers.products.getProductInformation(req, res);
});

//handles getting product styles for single product
router.get('/:product_id/styles', (req, res) => {
  controllers.products.getProductStyles(req, res);
});

module.exports = router;
