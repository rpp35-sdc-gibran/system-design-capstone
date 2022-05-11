import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class QuestionsAnswers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product_id: 64620,
      questions: []
    }

  axios.get('/api/questionsAnswers/questions', {
    params: {
      product_id: this.state.product_id
    }
    })
    .then((results) => {
      console.log('results', results);
      this.setState({qestions: results});
    })
    .catch((error) => {
      console.log('error', error);
      this.setState({qestions: error});
    })

  }
  render() {
    return (
      <div>
        <div>Hello QA just changed!</div>
        <div>{JSON.stringify(this.state.questions)}</div>
      </div>
    )
  }
};

export default QuestionsAnswers;