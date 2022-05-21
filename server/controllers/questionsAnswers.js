const GITHUB_API_TOKEN = require('../config/config.js').GITHUB_API_TOKEN.token;
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions';
const axios = require('axios');

const getQuestionsByProductID = (req, res) => {
  axios
    .get(url, {
      headers: { Authorization: GITHUB_API_TOKEN },
      params: { product_id: req.query.product_id },
    })
    .then((results) => {
      res.send(results.data);
    })
    .catch((error) => {
      res.status(404).send('Error getting questions', error);
    });
};

const getAnswersByQuestionID = (req, res) => {
  axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${req.query.question_id}/answers`,
      {
        headers: { Authorization: GITHUB_API_TOKEN },
      }
    )
    .then((results) => {
      console.log('SUCCESS getting answers by question_id', results);
      res.send(results.data);
    })
    .catch((error) => {
      res.status(404).send('Error getting answers', error);
    });
};

const markQuestionHelpfulByQuestionID = (req, res) => {
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${req.body.question_id}/helpful`,
    headers: { Authorization: GITHUB_API_TOKEN },
    data: { data: null },
  })
    .then((results) => {
      console.log('Success marking answer heplful', results);
      res.status(201);
    })
    .catch((error) => {
      console.log('Error marking answer helpful', error);
    });
};

const markAnswerHelpfulByAnswerID = (req, res) => {
  // axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${req.body.answer_id}/helpful`, {
  //   headers: {Authorization: GITHUB_API_TOKEN}
  //   })
  // .then((results) => {
  //   console.log('Success marking answer heplful', results);
  //   res.status(201)
  // })
  // .catch((error) => {
  //   console.log('Error marking answer helpful', error);
  // })

  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${req.body.answer_id}/helpful`,
    headers: { Authorization: GITHUB_API_TOKEN },
    data: { data: null },
  })
    .then((results) => {
      console.log('Success marking answer heplful', results);
      res.status(201);
    })
    .catch((error) => {
      console.log('Error marking answer helpful', error);
    });
};

const postQuestionByProductID = () => {};
const postAnswerByQuestionID = () => {};
const reportQuestionByQuestionID = () => {};
const reportAnswerByAnswerID = () => {};

module.exports.getQuestionsByProductID = getQuestionsByProductID;
module.exports.getAnswersByQuestionID = getAnswersByQuestionID;
module.exports.markAnswerHelpfulByAnswerID = markAnswerHelpfulByAnswerID;
module.exports.markQuestionHelpfulByQuestionID =
  markQuestionHelpfulByQuestionID;
