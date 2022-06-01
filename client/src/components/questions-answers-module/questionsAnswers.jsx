import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper'

import QuestionsList from './question-list/questionsList.jsx';
import Search from './search/search.jsx';
import AddQuestion from './add-question/addQuestion.jsx';
import AddAnswer from './add-answer/addAnswer.jsx';

// condition && component

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shownQuestions: [],
      allQuestions: [],
      addQuestionModal: false,
      addAnswerModal: false,
      currQuestion_id: null,
      currQuestion_body: null,
      currProductName: null
    };
    this.addShownQuestions = this.addShownQuestions.bind(this);
    this.changeQAState = this.changeQAState.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getProductInfo = this.getProductInfo(this);
  }

  addShownQuestions () {
    let currShownQuestions = this.state.shownQuestions;
    let currAllQuestions = this.state.allQuestions;
    currShownQuestions = currShownQuestions.concat(currAllQuestions.splice(0,2));
    this.setState({shownQuestions: currShownQuestions, allQuestions: currAllQuestions});
  }

  changeQAState (prop, value) {
    this.setState({[prop]: value});
  }

  getQuestions () {
    axios.get('/api/questionsAnswers/questions', { params: {product_id: this.props.currentProductId}})
      .then((results) => {
        this.setState({shownQuestions: results.data.results.splice(0,2), allQuestions: results.data.results});
      })
      .catch((error) => {
        console.log('error getting questions', error);
      });
  }

  getProductInfo () {
    axios.get('/api/questionsAnswers/productInfo', {params: {product_id: this.props.currentProductId}})
      .then((results) => {
        console.log('success getting product info', results);
        this.setState({currProductName: results.data})
      })
      .catch((error) => {
        console.log('error getting product info', error);
      })
  }

  componentDidMount() {
    this.getQuestions();
    this.getProductInfo
  }

  render() {
    // conditionally render 'show additional questions' button
    var moreQuestions;
    if (this.state.allQuestions.length) {
      moreQuestions = <button onClick={() => {this.addShownQuestions()}}>More Answered Questions</button>
    } else {
      moreQuestions = null;
    }

    // conditionally render addQuestion modal
    if (this.state.addQuestionModal) {
      return (
        <AddQuestion
          product_id={this.state.product_id}
          changeQAState={this.changeQAState}
          product_name={this.state.currProductName}
        />
      )
    }

    // conditionally render addAnwser modal
    if (this.state.addAnswerModal) {
      return (
        <AddAnswer
          question_id={this.state.currQuestion_id}
          question_body={this.state.currQuestion_body}
          changeQAState={this.changeQAState}
          product_name={this.state.currProductName}
        />
      )

    }

    return (
      <Paper elevation={24} className='questions-anwers'>
        <h3>Questions & Answers</h3>
        <Search
          changeQAState={this.changeQAState}
          allQuestions={this.state.allQuestions}
        />
        <QuestionsList
          questions={ (this.state.filteredQuestions !== undefined) ? this.state.filteredQuestions : this.state.shownQuestions }
          addQuestionModal={this.state.addQuestionModal}
          addAnswerModal={this.state.addAnswerModal}
          changeQAState={this.changeQAState}
        />
        {moreQuestions}
        <button onClick={() => {this.changeQAState('addQuestionModal', true);}}>Add a Question</button>
      </Paper>
    );
  }
}

export default QuestionsAnswers;
