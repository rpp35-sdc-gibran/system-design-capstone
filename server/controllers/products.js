const GITHUB_API_TOKEN = require('../config/config').GITHUB_API_TOKEN.token;
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products';
const axios = require('axios');

module.exports = {
  products: {
    get: function (req, res) {
      console.log('here in get function');
      // let promise = axios.get(url, {
      //   headers: {
      //     Authorization: GITHUB_API_TOKEN,
      //   },
      // });
      // promise.then((response) => {
      //   res.send(response.data);
      // });
      // promise.catch((err) => {
      //   console.log('err:', err);
      //   res.status(404).send('Error getting products');
      // });
      let data = [
        { 1: true },
        { 1: true },
        { 1: true },
        { 1: true },
        { 1: true },
      ];
      res.send(data);
    },
  },
  getProductInformation: function (req, res) {
    let promise = axios.get(`${url}/${req.query.id}`);
    promise.then((response) => {
      res.send(response.data);
    });
    promise.catch((err) => {
      console.log('err:', err);
      res.status(404).send('Error getting product information');
    });
  },
  getProductStyles: function (req, res) {
    let promise = axios.get(`${url}/${req.query.id}/styles`);
    promise.then((response) => {
      res.send(response.data);
    });
    promise.catch((err) => {
      console.log('err:', err);
      res.status(404).send('Error getting product information');
    });
  },
};
