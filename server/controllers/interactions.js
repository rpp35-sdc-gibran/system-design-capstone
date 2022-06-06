const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions';
const GITHUB_API_TOKEN = require('../config/config').GITHUB_API_TOKEN.token;

module.exports = {
   interactions: {
      post: function (req, res) {
         let promise = axios.post(url, req.body, {
            headers: {
               Authorization: GITHUB_API_TOKEN,
            },
         });
         promise.then((response) => {
            res.send('Response sent');
         });
         promise.catch((err) => {
            res.send('Error: ', err);
         });
      },
   },
};
