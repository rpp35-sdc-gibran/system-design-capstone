const express = require('express');
const router = express.Router();
const controllers = require('../controllers/questionsAnswers');

router.get('/questions', (req, res) => {
  controllers.getQuestionsByProductID(req, res);
});

module.exports = router;