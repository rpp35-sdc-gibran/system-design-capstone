import React, { Component } from 'react';
import ProductOverview from './product-overview-module/ProductOverview.jsx';
import QuestionsAnswers from './questions-answers-module/QuestionsAnswers.jsx'
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
        {/* <QuestionsAnswers currentProductId={this.state.currentProductId} /> */}
        <RatingsAndReviews currentProductId={this.state.currentProductId} />
      </div>
    );
  }
}

export default App;
