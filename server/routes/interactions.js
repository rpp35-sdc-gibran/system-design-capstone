const express = require('express');
const router = express.Router();
const controllers = require('../controllers/interactions');

router.post('/', (req, res) => {
   controllers.interactions.post(req, res);
});

module.exports = router;
