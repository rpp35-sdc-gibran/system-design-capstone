const express = require('express');
const router = express.Router();
const controllers = require('../controllers/ratingsAndReviews.js');


//handles getting product reviews for single product
router.get('/', (req, res) => {
  console.log('requesting reviews for productId: ')
  controllers.reviews.getProductReviews(req, res);
});
//handles posting product reviews for single product
router.post('/:product_id', (req, res) => {
  controllers.reviews.postProductReviews(req, res);
});
//handles getting product reviews Metadata for single product
router.post('/meta/:product_id', (req, res) => {
  controllers.reviews.getReviewMetadata(req, res);
});
//handles makrking a review as helpful
router.put('/helpful/:review_id', (req, res) => {
  controllers.reviews.markReviewAsHelpful(req, res);
});
//handles reporting a review
router.put('/report/:review_id', (req, res) => {
  controllers.reviews.reportReview(req, res);
})
module.exports = router;
