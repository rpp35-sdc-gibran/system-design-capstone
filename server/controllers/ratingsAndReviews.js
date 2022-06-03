const GITHUB_API_TOKEN = require('../config/config').GITHUB_API_TOKEN.token;
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/';
const axios = require('axios');
const path = require('path');

module.exports = {
   //returns array of all products

  reviews: {
    //returns list of all reviews for single product
    getProductReviews: function (req, res) {
      console.log('req.headers.product_id: ', req.headers.product_id);
      let promise = axios.get(url, {
        headers: {
          Authorization: GITHUB_API_TOKEN,
        },
        params: {
          product_id: req.headers.product_id, count: 100
        },
      });

         promise.then((response) => {
            console.log('got reviews from API: ', response.data);
            res.send(response.data);
         });
         promise.catch((err) => {
            //console.log('err:', err);
            res.status(400).send('Error getting reviews');
         });
      },

      getReviewMetadata: async function (req, res) {
         console.log(
            'reviews Metadata req.headers.product_id: ',
            typeof req.headers.product_id
         );
         let id = Number(req.headers.product_id);
         console.log(id, typeof id);
         let urlMeta = path.join(url, 'meta');
         let promise = axios.get(`${url}meta`, {
            headers: {
               Authorization: GITHUB_API_TOKEN,
            },
            params: {
               product_id: req.headers.product_id,
            },
         });
         promise
            .then((response) => {
               console.log('got reviewsMetadata from API: ', response.data);
               res.send(response.data);
            })
            .catch((error) => {
               console.log(error);
            });
      },

    postProductReviews: function (req, res) {
      console.log(req.body)
      axios({
        method: 'post',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
        headers: { Authorization: GITHUB_API_TOKEN, },
        data: {
          "product_id": Number(req.body.product_id),
          "rating": req.body.rating,
          "summary": req.body.summary,
          "body": req.body.body,
          "recommend": req.body.recommend,
          "name": req.body.name,
          "email": req.body.email,
          "photos": [],
          "characteristics": {}
        }
      })
        .then((response) => {
          console.log('successed! posting')
          res.send(response.status);
        })
      .catch((error) => {
        console.log('something wrong when posting new review', error)
      });
    },
    markReviewAsHelpful: function (req, res) {
      let urlMarkHelpful = path.join(url, '/:review_id/helpful');
      let promise = axios({
        method: 'put',
        url: urlMarkHelpful,
        params: {
          reveiw_id: req.params.reveiw_id,
        },
      });
      promise
        .then((response) => {
          console.log(response)
          res.send(response);
        })
        .catch((error) => {
          throw error;
        });
    },
    reportReview: function (req, res) {
      let urlReport = path.join(url, '/:review_id/report');
      let promise = axios({
        method: 'put',
        url: urlReport,
        params: {
          reveiw_id: req.params.reveiw_id,
        },
      });
      promise
        .then((response) => {
          res.send(response);
        })
        .catch((error) => {
          throw error;
        });
    },
  },
};
