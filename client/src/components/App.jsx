import React, { Component } from 'react';
<<<<<<< HEAD
import ProductOverview from './product-overview-module/ProductOverview.jsx';
import QuestionsAnswers from './questions-answers-module/QuestionsAnswers.jsx';
import axios from 'axios';
import RatingsAndReviews from './ratings&reviews/RatingsAndReviews.jsx';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProductId: null,
    };
  }
  componentDidMount() {
    axios
      .get('/api/products')
      .then((products) => {
        console.log('products data: ', products.data)
        this.setState({
          products: products.data,
          currentProductId: products.data[0].id
        });
      })
      .catch((err) => {
        console.log('err in App.jsx:', err);
      });
  }
  render() {
    return (
      <div>
        {this.state.currentProductId && (
          <ProductOverview currentProductId={this.state.currentProductId} />
        )}
<<<<<<< HEAD
        {/* <QuestionsAnswers currentProductId={this.state.currentProductId} /> */}
        {/* <RatingsAndReviews
          currentProductId={this.state.currentProductId}
          reviews={this.state.currentReviews}
          {...this.props}
        /> */}
=======
<<<<<<< HEAD
        <div class="questionsAnswers">
          <QuestionsAnswers currentProductId={this.state.currentProductId}/>
        </div>
        {/* <RatingsAndReviews currentProductId={this.state.currentProductId} reviews={this.state.currentReviews} {...this.props} /> */}
=======
        {/* <QuestionsAnswers currentProductId={this.state.currentProductId} /> */}
        <RatingsAndReviews currentProductId={this.state.currentProductId} />
>>>>>>> main
>>>>>>> 0d1ef2d93cdcc3a60491753a101283c01c5197b5
      </div>
    );
  }
}
=======
import { Routes, Route } from 'react-router-dom';
import Nav from './product-overview-module/navbar/Nav.jsx';
import Home from './pages/home/Home.jsx';
import Product from './pages/product/Product.jsx';

const App = () => {
   return (
      <>
         <Nav />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:productId' element={<Product />} />
         </Routes>
      </>
   );
};
>>>>>>> product-overview

export default App;
