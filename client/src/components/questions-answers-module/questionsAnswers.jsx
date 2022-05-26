import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import QuestionsList from './question-list/questionsList.jsx';
import Search from './search/search.jsx';
import AddQuestion from './add-question/addQuestion.jsx';

//! if filteredQuestions exisits, show it, or else render allQuestions
    // condition && component
    // conditionally render 'show additional questions' button

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 71698, // set by window.location.pathname???
      allQuestions: [],
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

    this.changeQAState = this.changeQAState.bind(this);
  }

  changeQAState (prop, value) {
    this.setState({[prop]: value});
  }

  componentDidMount() {
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
        console.log('error', error);
        this.setState({ error: error });
      });
  }

  render() {
    return (
      <>
        <h3>Questions & Answers</h3>
        <Search
          changeQAState={this.changeQAState}
          allQuestions={this.state.allQuestions}
        />
        <QuestionsList
          allQuestions={ (this.state.filteredQuestions !== undefined) ? this.state.filteredQuestions : this.state.allQuestions }
        />
        <button variant='contained'>Add a Question</button>
        <AddQuestion
          product_id={this.state.product_id}
        />
      </>
    );
  }
}

export default QuestionsAnswers;

