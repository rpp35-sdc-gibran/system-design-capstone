const express = require('express');
const router = express.Router();
const controllers = require('../controllers/ratingsAndReviews.js');

//handles getting product reviews for single product
router.get('/', (req, res) => {
   controllers.reviews.getProductReviews(req, res);
});
//handles posting product reviews for single product
router.post('/', (req, res) => {
   controllers.reviews.postProductReviews(req, res);
});
//handles getting product reviews Metadata for single product
router.get('/meta', (req, res) => {
   controllers.reviews.getReviewMetadata(req, res);
});
//handles makrking a review as helpful
router.post('/helpful', (req, res) => {
   controllers.reviews.markReviewAsHelpful(req, res);
});
//handles reporting a review
router.post('/report', (req, res) => {
   controllers.reviews.reportReview(req, res);
});
router.post('/interactions', (req, res) => {
   controllers.reviews.postInteraction(req, res);
});
module.exports = router;
