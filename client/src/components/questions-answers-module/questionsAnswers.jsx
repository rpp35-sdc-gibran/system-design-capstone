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
      currProductName: null,
      currProductID: null
    };
    this.addShownQuestions = this.addShownQuestions.bind(this);
    this.changeQAState = this.changeQAState.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.handleInteraction = this.handleInteraction.bind(this);
  }

  addShownQuestions () {
    let currShownQuestions = this.state.shownQuestions;
    let currAllQuestions = this.state.allQuestions;
    currShownQuestions = currShownQuestions.concat(currAllQuestions.splice(0,2));
    this.setState({shownQuestions: currShownQuestions, allQuestions: currAllQuestions});
  }

  getDerivedStateFromProps(props, state) {
    if (props.currQuestion_id !== state.currProductID) {
      console.log('getDerivedStateFromProps invoked');
    }
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

  handleInteraction (event) {
    let data = {
      element: event.target.outerHTML,
      widget: 'QuestionsAnswers',
      time: Date().toLocaleString()
    };
    // make axios request to interactions api
    axios.post('/api/questionsAnswers/interactions',{
      interaction: data
      })
      .then((results) => {
        console.log('SUCCESS posting to interation api: ', data);
      })
      .catch((error) => {
        console.log('ERROR posting to interation api: ', data);
      });
  }

  getProductIDfromURL () {
    // get product id as string from url
    let url = window.location.href.split('/').slice(-1)[0];
    // set currProductID to url value
    this.setState({currProductID: url});
    console.log('url and state should be set: ', url);
  }

  componentDidMount() {
    this.getQuestions();
    this.getProductInfo();
    this.getProductIDfromURL();
  }






  render() {
    // conditionally render 'show additional questions' button
    var moreQuestions;
    if (this.state.allQuestions.length) {
      moreQuestions = <button
        className='moreQuestionsButton'
        onClick={(event) => {
          this.addShownQuestions();
          this.handleInteraction(event);
      }}><Typography variant='body1'><strong>MORE ANSWERED QUESTIONS</strong></Typography></button>;
    } else {
      // add collapse answers button??
      moreQuestions = null;
    }

    // conditionally render addQuestion modal
    if (this.state.addQuestionModal) {
      return (
        <AddQuestion
          className='addQuestionModal'
          handleInteraction={this.handleInteraction}
          changeQAState={this.changeQAState}
          product_id={this.props.currentProductId}
          product_name={this.state.currProductName}
        />
      )
    }

    // conditionally render addAnwser modal
    if (this.state.addAnswerModal) {
      return (
        <AddAnswer
          className='addAnswerModal'
          changeQAState={this.changeQAState}
          handleInteraction={this.handleInteraction}
          question_id={this.state.currQuestion_id}
          question_body={this.state.currQuestion_body}
          product_name={this.state.currProductName}
        />
      )

    }

    return (
      <Paper elevation={24} rounded={true} outlined={true} className='questionsAnwers'>
        <Typography align='center' variant='h3' className='questionsAnswersTile'>Questions & Answers</Typography>
        <Search
          className='searchBar'
          changeQAState={this.changeQAState}
          handleInteraction={this.handleInteraction}
          allQuestions={this.state.allQuestions}
        />
        <div className='QA_body'>
          <QuestionsList
          className="questionList"
            changeQAState={this.changeQAState}
            convertDate={this.convertDate}
            handleInteraction={this.handleInteraction}
            questions={ (this.state.filteredQuestions !== undefined) ? this.state.filteredQuestions : this.state.shownQuestions }
            addQuestionModal={this.state.addQuestionModal}
            addAnswerModal={this.state.addAnswerModal}
          />
        </div>
        <div className='questionsButtons'>
          {moreQuestions}
          <button
            className='addQuestionButton'
            onClick={(event) => {
              this.changeQAState('addQuestionModal', true);
              this.handleInteraction(event);
            }}><Typography variant='body1'><strong>ADD A QUESTION +</strong> </Typography></button>
        </div>
      </Paper>
    );
  }
}

export default QuestionsAnswers;
