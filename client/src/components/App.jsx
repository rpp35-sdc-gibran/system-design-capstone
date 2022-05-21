import React, { Component } from 'react';
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
    let promise = axios.get('/api/products');
    promise.then((products) => {
      console.log('products:', products);
      this.setState({
        products: products.data,
        currentProductId: products.data[0].id,
      });
    });
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        {/* <QuestionsAnswers /> */}
        {this.state.currentProductId && (
          <ProductOverview currentProductId={this.state.currentProductId} />
        )}
        {/* <RatingsAndReviews id={this.state.currentProductId} /> */}
=======
        {this.state.currentProductId && (
          <ProductOverview currentProductId={this.state.currentProductId} />
        )}
        <QuestionsAnswers currentProductId={this.state.currentProductId}/>
        <RatingsAndReviews id={this.state.currentProductId}/>
>>>>>>> 355f07f3e19f0f67ccbb3eea683579d1f0a89765
      </div>
    );
  }
}

export default App;
