import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

class Answer extends React.Component {
  reportAnswer () {
    axios.put('/api/questionsAnswers/reportAnswer', {
      answer_id: this.props.answer.answer_id
    })
    .then((results) => {
      console.log('SUCCESS reporting answer' , this.props.answer.answer_id)
      // refresh page
    })
    .catch((error) => {
      console.log('ERROR reporting answer ', this.props.answer.answer_id, error);
    })
  }

  isHelpful () {
    axios.put('/api/questionsAnswers/markAnswerHelpful', {
      answer_id: this.props.answer.answer_id
      })
      .then((results) => {
        console.log('SUCCESS PUT /api/questionsAnswers/markAnswerHelpful');
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
          <a class="report" onClick={this.reportAnswer.bind(this)} style={{cursor: 'pointer', textDecorationLine: 'underline'}}>Report</a>
        </div>
      </Card>
      )
  }
}

export default Answer;
