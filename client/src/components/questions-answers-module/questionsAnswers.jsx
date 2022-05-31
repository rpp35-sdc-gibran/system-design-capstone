import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import useEffect from 'react';

import QuestionsList from './question-list/questionsList.jsx';
import Search from './search/search.jsx';
import AddQuestion from './add-question/addQuestion.jsx';

// condition && component
// conditionally render 'show additional questions' button

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.currentProductId,
      shownQuestions: [],
      allQuestions: [],
      addQuestionModal: false,
      addAnswerModal: false
    };

    this.changeQAState = this.changeQAState.bind(this);
    this.addShownQuestions = this.addShownQuestions.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  addShownQuestions () {
    // save current shown questions and all questions to variables
    let currShownQuestions = this.state.shownQuestions;
    let currAllQuestions = this.state.allQuestions;

    // set currShownQuestions to equal original value plus two questions
    currShownQuestions = currShownQuestions.concat(currAllQuestions.splice(0,2));

    // set shownQuestions and allQuestions to updated current variables
    this.setState({shownQuestions: currShownQuestions});
    this.setState({allQuestions: currAllQuestions});
  }

  changeQAState (prop, value) {
    this.setState({[prop]: value});
  }

  getQuestions () {
    axios.get('/api/questionsAnswers/questions', { params: {product_id: this.state.product_id}})
      .then((results) => {
        // let currAllQuestions = results.data.results;
        // let currShownQuestions = [];
        // currShownQuestions.concat(currAllQuestions.splice(0, 2));
        // this.setState({ allQuestions: currAllQuestions });
        // this.setState({ shownQuestions: currShownQuestions });

        this.setState({allQuestions: results.data.results});
      })
      .catch((error) => {
        console.log('error', error);
        this.setState({ error: error });
      });
  }

  componentDidMount() {
    this.getQuestions();
    // invoke addShownQuestions to load first 2 questions
    this.addShownQuestions();
  }

  render() {
    var moreQuestions;
    if (this.state.allQuestions.length) {
      moreQuestions = <button onClick={() => {this.addShownQuestions()}}>More Answered Questions</button>
    } else {
      moreQuestions = null;
    }

    if (this.state.addQuestionModal) {
      return (
        <AddQuestion
          product_id={this.state.product_id}
          changeQAState={this.changeQAState}
        />
      )
    } else if (this.state.addAnswerModal) {
      // render addAnswer modal here?
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
