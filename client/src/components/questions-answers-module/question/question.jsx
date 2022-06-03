import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './question.scss';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import AnswerList from '../answer-list/answersList.jsx';

class Question extends React.Component {
   reportQuestion() {
      axios
         .put('/api/questionsAnswers/reportQuestion', {
            question_id: this.props.question.question_id,
         })
         .then((results) => {
            console.log(
               'SUCCESS PUT /api/questionsAnswers/reportQuestion ',
               this.props.question.question_id
            );
         })
         .catch((error) => {
            console.log(
               'ERROR PUT /api/questionsAnswers/reportQuestion ',
               error
            );
         });
   }

   isHelpful() {
      axios
         .put('/api/questionsAnswers/markQuestionHelpful', {
            question_id: this.props.question.question_id,
         })
         .then((results) => {
            console.log(
               'SUCCESS PUT /api/questionsAnswers/markQuestionHelpful'
            );
            // reload questions to update page
         })
         .catch((error) => {
            console.log(
               'ERROR PUT /api/questionsAnswers/markQuestionHelpful',
               error
            );
         });
   }

   markHelpful() {
      // set var to question_id to string
      let question_id = this.props.question.question_id;
      // check if local storage key exisits for current question_id
      if (!localStorage.getItem(question_id.toString())) {
         // mark question helpful
         this.isHelpful.bind(this)();
         // save true to key of question_id in local storage
         localStorage.setItem(question_id.toString(), true);
      }
   }

   handleQuestionModal() {
      this.props.changeQAState('addAnswerModal', true);
      this.props.changeQAState(
         'currQuestion_id',
         this.props.question.question_id
      );
      this.props.changeQAState(
         'currQuestion_body',
         this.props.question.question_body
      );
   }

   render() {
      return (
         <Card variant='outlined'>
            <Typography align='left' variant='h6'>
               Q: {this.props.question.question_body}
            </Typography>
            <Typography variant='body1'>
               Helpful?
               <a
                  className='helpful'
                  style={{ cursor: 'pointer', textDecorationLine: 'underline' }}
                  onClick={() => {
                     let question_id =
                        this.props.question.question_id.toString();
                     // check if localStorage is empty
                     if (!Boolean(localStorage.getItem(question_id))) {
                        // mark helpful
                        this.isHelpful();
                        // save true to key of question_id in local storage
                        localStorage.setItem(question_id, true);
                     }
                  }}
               >
                  Yes
               </a>
               ({this.props.question.question_helpfulness})
               <a
                  className='report'
                  onClick={(event) => {
                     this.reportQuestion.bind(this)();
                     // change inner html text to reported
                     event.target.innerHTML = 'Reported';
                  }}
                  style={{ cursor: 'pointer', textDecorationLine: 'underline' }}
               >
                  Report
               </a>
               <a
                  className='add-question'
                  onClick={this.handleQuestionModal.bind(this)}
                  style={{ cursor: 'pointer', textDecorationLine: 'underline' }}
               >
                  Add an Answer
               </a>
            </Typography>
            <Typography variant='body1'>
               by {this.props.question.asker_name},{' '}
               {this.props.convertDate(this.props.question.question_date)}
            </Typography>
            <AnswerList
               question_id={this.props.question.question_id}
               convertDate={this.props.convertDate}
            />
         </Card>
      );
   }
}

export default Question;
