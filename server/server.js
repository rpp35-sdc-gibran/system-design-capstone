require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 1128;
const app = express();
const products = require('./routes/products');
const questionsAnswers = require('./routes/questionsAnswers');
const reviews = require('./routes/ratingsAndReviews');
const cart = require('./routes/cart');
const interactions = require('./routes/interactions');

//MIDDLEWARE
app.use(express.static(path.join(__dirname, '/client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   next();
});

//ROUTES
app.use('/products', products);
app.use('/cart', cart);
app.use('/questionsAnswers', questionsAnswers);
app.use('/reviews', reviews);
app.use('/interactions', interactions);

app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
