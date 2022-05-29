import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import AnswerList from '../answer-list/answersList.jsx';
import AddAnswer from '../add-answer/addAnswer.jsx';

class Question extends React.Component {
  reportQuestion () {
    axios.put('/api/questionsAnswers/reportQuestion', {
      question_id: this.props.question.question_id
    })
    .then((results) => {
      console.log('SUCCESS PUT /api/questionsAnswers/reportQuestion ', this.props.question.question_id)
    })
    .catch((error) => {
      console.log('ERROR PUT /api/questionsAnswers/reportQuestion ', error);
    })
  }

  isHelpful () {
    axios.put('/api/questionsAnswers/markQuestionHelpful', {
      question_id: this.props.question.question_id
      })
      .then((results) => {
        console.log('SUCCESS PUT /api/questionsAnswers/markQuestionHelpful');
        // reload questions to update page
      })
      .catch((error) => {
        console.log('ERROR PUT /api/questionsAnswers/markQuestionHelpful', error);
      });
  }

  postAnswer () {

  }

  render () {
    // this.props.addAnswerModule
    if (false) {
      return (
        <AddAnswer
          question_id={this.props.question.question_id}
          question_body={this.props.question.question_body}
        />
      )
    }

    return (
      <Card variant="outlined">
        <div>
          Q: {this.props.question.question_body}
          <div>
            Helpful?
            <a class="helpful" onClick={this.isHelpful.bind(this)} style={{cursor: 'pointer', textDecorationLine: 'underline'}}>Yes</a>
            ({this.props.question.question_helpfulness})
            <a class="report" onClick={this.reportQuestion.bind(this)} style={{cursor: 'pointer', textDecorationLine: 'underline'}}>Report</a>
          </div>
        </div>
        <div>by {this.props.question.asker_name} {this.props.question.question_date}</div>
        <button variant="contained">Add an Answer</button>
        <AnswerList question_id={this.props.question.question_id}/>
      </Card>
      )
  }
}

export default Question;
