import React, { Component } from 'react';
import ProductOverview from './product-overview-module/ProductOverview.jsx';
<<<<<<< HEAD
import axios from 'axios';
=======
import RatingsAndReviews from './ratings&reviews/RatingsAndReviews.jsx';
>>>>>>> 191d1f1 (before merging PR #4)
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
      this.setState({
        products: products.data,
        currentProductId: products.data[0].id,
      });
    });
  }
  render() {
    return (
      <div>
        Hello world
<<<<<<< HEAD
        {this.state.currentProductId && (
          <ProductOverview currentProductId={this.state.currentProductId} />
        )}
=======
        <ProductOverview />
        <RatingsAndReviews id={this.state.currentProductId}/>
>>>>>>> 191d1f1 (before merging PR #4)
      </div>
    );
  }
}

export default App;
