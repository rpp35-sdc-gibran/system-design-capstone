const express = require('express');
const router = express.Router();
const controllers = require('../controllers/questionsAnswers');

//=============================//
// QUESTIONS:
//=============================//
router.get('/questions', (req, res) => {
  controllers.getQuestionsByProductID(req, res);
});

router.put('/markQuestionHelpful', (req, res) => {
  controllers.markQuestionHelpfulByQuestionID(req, res);
})

router.put('/reportQuestion', (req, res) => {
  controllers.reportQuestionByQuestionID(req, res);
})

router.post('/addQuestion', (req, res) => {
  controllers.postQuestionByProductID(req,res);
})

//=============================//
// ANSWERS
//=============================//
router.get('/answers', (req, res) => {
  controllers.getAnswersByQuestionID(req, res);
})

router.put('/markAnswerHelpful', (req, res) => {
  controllers.markAnswerHelpfulByAnswerID(req, res);
})

router.put('/reportAnswer', (req, res) => {
  controllers.reportAnswerByAnswerID(req, res);
})

router.post('/addAnswer', (req, res) => {
  controllers.postAnswerByQuestionID(req, res)
})

module.exports = router;
