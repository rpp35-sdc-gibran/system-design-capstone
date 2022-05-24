import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import AnswerList from '../answer-list/answersList.jsx';

class Question extends React.Component {

  isHelpful () {
    axios.put('/api/questionsAnswers/markQuestionHelpful', {
      question_id: this.props.question.question_id
      })
      .then((results) => {
        console.log('SUCCESS PUT /api/questionsAnswers/markQuestionHelpful', results);
        // reload questions to update page
      })
      .catch((error) => {
        console.log('ERROR PUT /api/questionsAnswers/markQuestionHelpful', error);
      });
  }

  render () {
    return (
      <Card variant="outlined">
        <div>
          Q: {this.props.question.question_body}
          <div>
            Helpful?
            <a class="helpful" onClick={this.isHelpful.bind(this)} style={{cursor: 'pointer', textDecorationLine: 'underline'}}>Yes</a>
            ({this.props.question.question_helpfulness})
          </div>
        </div>
        <div>by {this.props.question.asker_name} {this.props.question.question_date}</div>
        <Button variant="contained">Add an Answer</Button>
        <AnswerList question_id={this.props.question.question_id}/>
      </Card>
      )
  }
}

export default Question;
