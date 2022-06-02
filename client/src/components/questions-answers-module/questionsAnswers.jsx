import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './questionsAnswers.scss';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';

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
        this.setState({currProductName: results.data})
      })
      .catch((error) => {
        console.log('error getting product info', error);
      })
  }

  convertDate (isoDate) {
    let date = new Date(isoDate).toLocaleString().split(',')[0].split('/');

    if (date[0] === '1') {
      date[0] = 'January';
    } else if (date[0] === '2') {
       date[0] = 'February';
    } else if (date[0] === '3') {
      date[0] = 'March';
    } else if (date[0] === '4') {
      date[0] = 'April';
    } else if (date[0] === '5') {
      date[0] = 'May';
    } else if (date[0] === '6') {
      date[0] = 'June';
    } else if (date[0] === '7') {
      date[0] = 'July';
    } else if (date[0] === '8') {
      date[0] = 'August';
    } else if (date[0] === '9') {
      date[0] = 'September';
    } else if (date[0] === '10') {
      date[0] = 'October';
    } else if (date[0] === '11') {
      date[0] = 'November';
    } else if (date[0] === '12') {
      date[0] = 'December'
    }

   return `${date[0]} ${date[1]}, ${date[2]}`
 }

  componentDidMount() {
    this.getQuestions();
    this.getProductInfo
  }

  render() {
    // conditionally render 'show additional questions' button
    var moreQuestions;
    if (this.state.allQuestions.length) {
      moreQuestions = <button onClick={() => {this.addShownQuestions()}}><Typography variant='body1'>More Answered Questions</Typography></button>;
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
      <Paper elevation={24} rounded={true} outlined={true} className='questions-anwers'>
        <Typography align='center' variant='h3'>Questions & Answers</Typography>
        <Search
          changeQAState={this.changeQAState}
          allQuestions={this.state.allQuestions}
        />
        <QuestionsList
          questions={ (this.state.filteredQuestions !== undefined) ? this.state.filteredQuestions : this.state.shownQuestions }
          addQuestionModal={this.state.addQuestionModal}
          addAnswerModal={this.state.addAnswerModal}
          changeQAState={this.changeQAState}
          convertDate={this.convertDate}
        />
        {moreQuestions}
        <button onClick={() => {this.changeQAState('addQuestionModal', true);}}><Typography variant='body1'>Add a Question +</Typography></button>
      </Paper>
    );
  }
}

export default QuestionsAnswers;
