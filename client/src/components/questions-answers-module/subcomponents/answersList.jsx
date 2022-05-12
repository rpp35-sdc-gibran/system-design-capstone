import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

import Answer from './Answer.jsx'



class AnswersList extends React.Component {
  render () {
    axios.get('/api/questionsAnswers/answers', {
      params: {
        question_id: this.props.question_id
      }
      })
      .then((results) => {
        console.log(`Answer list for ${this.props.question_id}`, results.data.results)
        // results.data.results.map((answer) => {
        //   return <Answer answer={answer}/>
        // })
      })
      .catch((error) => {

      })
    return (
      <Card>
        {this.props.question_id}

      </Card>
    )
  }
}

export default AnswersList;
