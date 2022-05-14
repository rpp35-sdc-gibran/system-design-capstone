import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

class Answer extends React.Component {
  render () {
    return (
      <Card variant="outlined">
        {/* <div>{this.props.question.question_body}</div>
        <div>{this.props.question.question_date}</div>
        <div>{this.props.question.asker_name}</div> */}
      </Card>
      )
  }
}

export default Answer;
