const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart';
const axios = require('axios');

module.exports = {
   cart: {
      get: function (req, res) {
         let promise = axios.get(url, {
            headers: {
               Authorization: GITHUB_API_TOKEN,
            },
         });
         promise.then((cartItems) => {
            res.send(cartItems.data);
         });
         promise.catch((err) => {
            res.status(400).send('Could not get cart Items');
         });
      },
      store: function (req, res) {
         let promise = axios.post(url, req.body, {
            headers: {
               Authorization: GITHUB_API_TOKEN,
            },
         });
         promise.then((response) => {
            res.send('Success! Item has been added to cart.');
         });
         promise.catch((err) => {
            res.status(400).send('Error storing item to cart.');
         });
      },
   },
};
