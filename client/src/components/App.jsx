import React, { Component } from 'react';
import ProductOverview from './product-overview-module/ProductOverview.jsx';
import QuestionsAnswers from './questions-answers-module/QuestionsAnswers.jsx'

class App extends Component {
  render() {
    return (
      <div>
        {/* <ProductOverview /> */}
        <QuestionsAnswers/>
      </div>
    );
  }
}

export default App;
