const express = require('express');
const router = express.Router();
const controllers = require('../controllers/products');

router.get('/', (req, res) => {
  controllers.products.get(req, res);
});

module.exports = router;
