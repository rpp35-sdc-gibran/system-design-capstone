import React, { Component } from 'react';
import ProductOverview from './product-overview-module/ProductOverview.jsx';
import QuestionsAnswers from './questions-answers-module/QuestionsAnswers.jsx'
import axios from 'axios';
import RatingsAndReviews from './ratings&reviews/RatingsAndReviews.jsx';
import sampleReviews from './ratings&reviews/reviews/reviewsForProductId71697.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProductId: null,
      currentReviews: sampleReviews.results
    };
  }
  componentDidMount() {
    axios.get('/api/products')
      .then((products) => {
        console.log('products data: ', products)
        this.setState({
          products: products.data,
          currentProductId: products.data[0].id,
        });
      }).
      catch((err) => {
        console.log('err in App.jsx:', err)
      })
  }
  render() {
    return (
      <div>
        {this.state.currentProductId && (
          <ProductOverview currentProductId={this.state.currentProductId} />
        )}
        <div class="questions_answers">
          <QuestionsAnswers currentProductId={this.state.currentProductId}/>
        </div>
        {/* <RatingsAndReviews currentProductId={this.state.currentProductId} reviews={this.state.currentReviews} {...this.props} /> */}
      </div>
    );
  }
}

export default App;
