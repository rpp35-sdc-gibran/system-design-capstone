const express = require('express');
const router = express.Router();
const controllers = require('../controllers/cart');

router.get('/', (req, res) => {
   controllers.cart.get(req, res);
});

router.post('/', (req, res) => {
   controllers.cart.store(req, res);
});

module.exports = router;
