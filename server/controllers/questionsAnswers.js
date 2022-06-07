const GITHUB_API_TOKEN = require('../config/config.js').GITHUB_API_TOKEN.token;
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions';
const axios = require('axios');

//=============================//
// QUESTIONS:
//=============================//
const getQuestionsByProductID = (req, res) => {
   axios.get(url, {
         headers: { Authorization: GITHUB_API_TOKEN },
         params: { product_id: req.query.product_id, count: 100 },
      })
      .then((results) => {
         res.send(results.data);
      })
      .catch((error) => {
         res.status(404).send('Error getting questions', error);
      });
};

const markQuestionHelpfulByQuestionID = (req, res) => {
   axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${req.body.question_id}/helpful`,
      headers: { Authorization: GITHUB_API_TOKEN },
   })
      .then((results) => {
         console.log('Success marking question heplful');
         res.status(201);
      })
      .catch((error) => {
         console.log('Error marking question helpful', error);
      });
};

const reportQuestionByQuestionID = (req, res) => {
   axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${req.body.question_id}/report`,
      headers: { Authorization: GITHUB_API_TOKEN },
   })
      .then((results) => {
         console.log('Success reporting question', req.body.question_id);
         res.status(201);
      })
      .catch((error) => {
         console.log('Error reporting answer', error);
      });
};

const postQuestionByProductID = (req, res) => {
   axios({
         method: 'post',
         url: url,
         headers: { Authorization: GITHUB_API_TOKEN },
         data: {
            body: req.body.question.body,
            name: req.body.question.name,
            email: req.body.question.email,
            product_id: req.body.question.product_id
         }
      })
      .then((results) => {
         console.log('Success POSTING question');
         res.status(201)
      })
      .catch((error) => {
         console.log('Error POSTING question', error);
      });
};


//=============================//
// ANSWERS
//=============================//
const getAnswersByQuestionID = (req, res) => {
   axios.get(
         `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${req.query.question_id}/answers`,
         { headers: { Authorization: GITHUB_API_TOKEN },
         params: { count: 100 },
       }
      )
      .then((results) => {
         res.send(results.data);
      })
      .catch((error) => {
         res.status(404).send('Error getting answers', error);
      });
};

const markAnswerHelpfulByAnswerID = (req, res) => {
   axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${req.body.answer_id}/helpful`,
      headers: { Authorization: GITHUB_API_TOKEN },
   })
      .then((results) => {
         console.log('Success marking answer heplful');
         res.status(201);
      })
      .catch((error) => {
         console.log('Error marking answer helpful', error);
      });
};

const reportAnswerByAnswerID = (req, res) => {
   console.log('report answer requested', req.body.answer_id);
   axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${req.body.answer_id}/report`,
      headers: { Authorization: GITHUB_API_TOKEN },
   })
      .then((results) => {
         console.log('Success reporting answer');
         res.status(201);
      })
      .catch((error) => {
         console.log('Error reporting answer', error);
      });
};

const postAnswerByQuestionID = (req, res) => {
   axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${req.body.answer.question_id}/answers`,
      headers: { Authorization: GITHUB_API_TOKEN },
      data: {
         body: req.body.answer.body,
         name: req.body.answer.name,
         email: req.body.answer.email,
         photos: req.body.answer.photos,
      },
   })
      .then((results) => {
         console.log('Success POSTING answer!');
         res.status(201);
      })
      .catch((error) => {
         console.log('Error POSTING answer ', error);
      });
};


//=============================//
// OTHER
//=============================//
const getProductInfoByProductID = (req, res) => {
  axios({
     method: 'get',
     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.query.product_id}`,
     headers: { Authorization: GITHUB_API_TOKEN }
    })
    .then((results) => {
      console.log('Success getting product info');
      res.send(results.data.name);
    })
    .catch((error) => {
      console.log('Error getting product info', error);
    });
};

const postInteraction = (req, res) => {
   axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
      headers: { Authorization: GITHUB_API_TOKEN },
      data: {
        element: req.body.interaction.element,
        widget: req.body.interaction.widget,
        time: req.body.interaction.time
      }
   })
   .then((results) => {
     console.log('Success posting interaction!');
   })
   .catch((error) => {
     console.log('Error posting interaction', error);
   });
}

module.exports.getQuestionsByProductID = getQuestionsByProductID;
module.exports.getAnswersByQuestionID = getAnswersByQuestionID;
module.exports.markAnswerHelpfulByAnswerID = markAnswerHelpfulByAnswerID;
module.exports.markQuestionHelpfulByQuestionID = markQuestionHelpfulByQuestionID;
module.exports.reportAnswerByAnswerID = reportAnswerByAnswerID;
module.exports.reportQuestionByQuestionID = reportQuestionByQuestionID;
module.exports.postQuestionByProductID = postQuestionByProductID;
module.exports.postAnswerByQuestionID = postAnswerByQuestionID;
module.exports.getProductInfoByProductID = getProductInfoByProductID;
module.exports.postInteraction = postInteraction;
