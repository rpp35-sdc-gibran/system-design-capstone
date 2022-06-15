require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors');
const products = require('./routes/products');
const questionsAnswers = require('./routes/questionsAnswers');
const reviews = require('./routes/ratingsAndReviews');
const cart = require('./routes/cart');
const interactions = require('./routes/interactions');
const compression = require('compression');

app.use(compression());
//MIDDLEWARE
app.use(cors());

console.log('process.env:', process.env.NODE_ENV);
// if (process.env.NODE_ENV !== 'production') {

app.use(express.static(path.join(__dirname, '../client/dist')));
// } else {
//    app.use(express.static(path.join(__dirname, '/client/dist')));
// }

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

app.get('/', (req, res, next) => {
   res.status(200).json({
      status: 'success',
      data: {
         name: 'fec',
         version: '1.0.0',
      },
   });
});
