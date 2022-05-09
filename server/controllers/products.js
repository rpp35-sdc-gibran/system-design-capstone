const GITHUB_API_TOKEN = require('../config/config').GITHUB_API_TOKEN.token;
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products';
const axios = require('axios');

module.exports = {
  //returns array of all products
  products: {
    get: function (req, res) {
      let promise = axios.get(url, {
        headers: {
          Authorization: GITHUB_API_TOKEN,
        },
      });
      promise.then((response) => {
        res.send(response.data);
      });
      promise.catch((err) => {
        console.log('err:', err);
        res.status(404).send('Error getting products');
      });
    },
    //accepts product id and returns product information for this specific product
    getProductInformation: function (req, res) {
      console.log('req.params:', req.params);
      let promise = axios.get(`${url}/${req.params.product_id}`, {
        headers: {
          Authorization: GITHUB_API_TOKEN,
        },
      });
      promise.then((response) => {
        res.send(response.data);
      });
      promise.catch((err) => {
        console.log('err:', err);
        res.status(404).send('Error getting product information');
      });
    },
    //returns all styles for a single given product
    getProductStyles: function (req, res) {
      let promise = axios.get(`${url}/${req.params.product_id}/styles`, {
        headers: {
          Authorization: GITHUB_API_TOKEN,
        },
      });
      promise.then((response) => {
        res.send(response.data);
      });
      promise.catch((err) => {
        console.log('err:', err);
        res.status(404).send('Error getting product information');
      });
    },
  },
};
