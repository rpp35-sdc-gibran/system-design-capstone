const GITHUB_API_TOKEN = require('../config/tylersConfig.js').GITHUB_API_TOKEN.TOKEN;
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions';
const axios = require('axios');

const getQuestionsByProductID = (req, res) => {
  axios.get(url, {
    headers: {Authorization: GITHUB_API_TOKEN},
    params: {product_id: req.query.product_id}
    })
    .then((results) => {
      console.log('SUCCESS getQuestionsByProductID', results.data.results);
      console.log('results.data.results[0]', results.data.results[0]);
      res.send(results.data)
    })
    .catch((error) => {
      res.status(404).send('Error getting questions', error);
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
