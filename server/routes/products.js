const express = require('express');
const router = express.Router();
const controllers = require('../controllers/products');

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

//handles getting product reviews for single product
router.get('/:product_id/reviews', (req, res) => {
   controllers.reviews.getProductReviews(req, res);
});

//handles getting related product ids of single product
router.get('/:product_id/related', (req, res) => {
   controllers.products.getRelatedItems(req, res);
});

module.exports = router;
