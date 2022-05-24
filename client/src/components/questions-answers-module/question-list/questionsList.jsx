import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

import Question from '../question/question.jsx'



class QuestionsList extends React.Component {
  render () {
    return (
      <div>
        {this.props.allQuestions.map((question) => {
          return <Question question={question}/>
        })}
      </div>
    )
  }
}

export default QuestionsList;
