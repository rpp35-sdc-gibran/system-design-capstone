import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

class Answer extends React.Component {


  isHelpful () {
    axios.put('/api/questionsAnswers/markAnswerHelpful', {
      answer_id: this.props.answer.answer_id
      })
      .then((results) => {
        console.log('SUCCESS PUT /api/questionsAnswers/markAnswerHelpful', results);
        // reload questions to update page
      })
      .catch((error) => {
        console.log('ERROR PUT /api/questionsAnswers/markAnswerHelpful', error);
      });
  }

  render () {
    return (
      <Card variant="outlined">
        <div>
          A: {this.props.answer.body}
          Helpful?
          <a class="helpful" onClick={this.isHelpful.bind(this)} style={{cursor: 'pointer', textDecorationLine: 'underline'}}>Yes</a>
          ({this.props.answer.helpfulness})
        </div>
      </Card>
      )
  }
}

export default Answer;
