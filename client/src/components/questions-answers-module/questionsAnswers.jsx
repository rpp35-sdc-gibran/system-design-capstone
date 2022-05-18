import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
import Card from '@mui/material/Card';

import QuestionsList from './subcomponents/QuestionsList.jsx';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 71698, // set by App state
      allQuestions: [],
      shownQuestions: [],
      moreQuestionsFlag: false,
    };

    axios
      .get('/api/questionsAnswers/questions', {
        params: {
          product_id: this.state.product_id,
        },
      })
      .then((results) => {
        this.setState({ allQuestions: results.data.results });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  render() {
    //
    // conditionally render 'show additional questions' button
    return (
      <div>
        <h3>Questions & Answers</h3>
        <QuestionsList allQuestions={this.state.allQuestions} />
        <Button variant='contained'>Add a Question</Button>
      </div>
    );
  }
}

export default QuestionsAnswers;
