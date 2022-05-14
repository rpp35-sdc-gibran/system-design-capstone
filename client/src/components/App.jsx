import React, { Component } from 'react';
import ProductOverview from './product-overview-module/ProductOverview.jsx';

import QuestionsAnswers from './questions-answers-module/QuestionsAnswers.jsx'
import axios from 'axios';

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
        {/* <ProductOverview /> */}
        <QuestionsAnswers/>
        Hello world
        {this.state.currentProductId && (
          <ProductOverview currentProductId={this.state.currentProductId} />
        )}
      </div>
    );
  }
}

export default App;
