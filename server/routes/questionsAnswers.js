const express = require('express');
const router = express.Router();
const controllers = require('../controllers/questionsAnswers');

router.get('/questions', (req, res) => {
  controllers.getQuestionsByProductID(req, res);
});

router.get('/answers', (req, res) => {
  controllers.getAnswersByQuestionID(req, res);
})

router.put('/markQuestionHelpful', (req, res) => {
  controllers.markQuestionHelpfulByQuestionID(req, res);
})

router.put('/markAnswerHelpful', (req, res) => {
  controllers.markAnswerHelpfulByAnswerID(req, res);
})

module.exports = router;
