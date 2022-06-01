import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper'

import AnswerList from '../answer-list/answersList.jsx';

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
    return (
      <Card variant="outlined">
        <div>
          Q: {this.props.question.question_body}
          <div>
            Helpful?
            <a className="helpful" onClick={this.isHelpful.bind(this)} style={{cursor: 'pointer', textDecorationLine: 'underline'}}>Yes</a>
            ({this.props.question.question_helpfulness})
            <a className="report" onClick={this.reportQuestion.bind(this)} style={{cursor: 'pointer', textDecorationLine: 'underline'}}>Report</a>
          </div>
        </div>
        <div>by {this.props.question.asker_name} {this.props.question.question_date}</div>
        <AnswerList question_id={this.props.question.question_id}/>
        <button onClick={() => {
          // set QA addAnswerModal to true
          this.props.changeQAState('addAnswerModal', true);
          // set QA.currQuestion_id to null
          this.props.changeQAState('currQuestion_id', this.props.question.question_id);
          // set QA.currQuestion_body to null
          this.props.changeQAState('currQuestion_body', this.props.question.question_body);
        }}>Add an Answer</button>
      </Card>
      )
  }
}

export default Question;
