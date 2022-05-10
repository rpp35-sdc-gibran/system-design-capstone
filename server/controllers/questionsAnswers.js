const GITHUB_API_TOKEN = require('../config/tylersConfig.js').GITHUB_API_TOKEN.TOKEN;
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions';
const axios = require('axios');

console.log('Hello QA');

const getQuestionsByProductID = (req, res) => {
  console.log('req.body', req.body);
  axios.get(url, {
    headers: {
      Authorization: GITHUB_API_TOKEN
    }
  })
};

const getAnswersByQuestionID = (id) => {

};

const postQuestionByProductID = () => {};
const postAnswerByQuestionID = () => {};
const markAnswerHelpfulByAnswerID = () => {};
const reportQuestionByQuestionID = () => {};
const reportAnswerByAnswerID = () => {};

module.exports.getQuestionsByProductID = getQuestionsByProductID;
module.exports.getAnswersByQuestionID = getAnswersByQuestionID;
