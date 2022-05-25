import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import QuestionsList from './question-list/questionsList.jsx';
import Search from './search/search.jsx';
import AddQuestion from './add-question/addQuestion.jsx';


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

  componentDidMount() {
    axios
      .get('/api/questionsAnswers/questions', {
        params: {
          product_id: this.state.product_id,
          // product_id: this.props.currentProductId
        },
      })
      .then((results) => {
        // console.log('results', results);
        this.setState({ allQuestions: results.data.results });
      })
      .catch((error) => {
        console.log('error', error);
        this.setState({ error: error });
      });
  }

  render() {
    // condition && component
    // conditionally render 'show additional questions' button
    return (
      <>
        <h3>Questions & Answers</h3>
        <Search />
        <QuestionsList allQuestions={this.state.allQuestions} />
        <button variant='contained'>Add a Question</button>
        <AddQuestion product_id={this.state.product_id}/>
      </>
    );
  }
}

export default QuestionsAnswers;

