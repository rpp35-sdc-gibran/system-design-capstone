const GITHUB_API_TOKEN = require('../config/tylersConfig.js').GITHUB_API_TOKEN.TOKEN;
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions';
const axios = require('axios');

// console.log('Hello QA');

const getQuestionsByProductID = (req, res) => {
  console.log('req.query', req.query);

  axios.get(url, {
    headers: {
      Authorization: GITHUB_API_TOKEN
    },
    params: {
      product_id: req.query.product_id
    }
    })
    .then((results) => {
      console.log('SUCCESS getQuestionsByProductID', results);
      res.send(results.data)
    })
    .catch((error) => {
      console.log('ERROR getQuestionsByProductID', results);
      res.send(error);
    });
};

const getAnswersByQuestionID = (req, res) => {

};

const postQuestionByProductID = () => {};
const postAnswerByQuestionID = () => {};
const markAnswerHelpfulByAnswerID = () => {};
const reportQuestionByQuestionID = () => {};
const reportAnswerByAnswerID = () => {};

module.exports.getQuestionsByProductID = getQuestionsByProductID;
module.exports.getAnswersByQuestionID = getAnswersByQuestionID;
