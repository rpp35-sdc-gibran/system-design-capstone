import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

import QuestionsList from './question-list/questionsList.jsx';
import Search from './search/search.jsx';
import AddQuestion from './add-question/addQuestion.jsx';

// condition && component

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shownQuestions: [],
      allQuestions: [],
      addQuestionModal: false,
      addAnswerModal: false,
      addAnswer_id: null,
    };
    this.addShownQuestions = this.addShownQuestions.bind(this);
    this.changeQAState = this.changeQAState.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
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
        console.log('error', error);
      });
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    // conditionally render 'show additional questions' button
    var moreQuestions;
    if (this.state.allQuestions.length) {
      moreQuestions = <button onClick={() => {this.addShownQuestions()}}>More Answered Questions</button>
    } else {
      moreQuestions = null;
    }

    // conditionally render addQuestions modal
    if (this.state.addQuestionModal) {
      return (
        <AddQuestion
          product_id={this.state.product_id}
          changeQAState={this.changeQAState}
        />
      )
    }

    // render addAnswer modal here?
    if (this.state.addAnswerModal) {
      // how to pass answer_id up to QA for current addAnswer
    }

    return (
      <>
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
      </>
    );
  }
}

export default QuestionsAnswers;
