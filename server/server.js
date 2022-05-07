const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 1128;
const app = express();
const products = require('./routes/products');

app.use(express.static(path.join(__dirname, '/client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/products', products);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
