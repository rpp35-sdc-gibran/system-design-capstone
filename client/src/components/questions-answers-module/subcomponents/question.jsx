import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import AnswerList from './AnswersList.jsx';

class Question extends React.Component {
  render () {
    return (
      <Card variant="outlined">
        <div>Q: {this.props.question.question_body}</div>
        <div>by {this.props.question.asker_name} {this.props.question.question_date}</div>
        <Button variant="contained">Add an Answer</Button>
        <AnswerList question_id={this.props.question.question_id}/>
      </Card>
      )
  }
}

export default Question;
