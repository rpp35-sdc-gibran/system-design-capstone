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
         .put(`${__API__}/questionsAnswers/reportQuestion`, {
            question_id: this.props.question.question_id,
         })
         .then((results) => {
            console.log(
               'SUCCESS PUT /questionsAnswers/reportQuestion ',
               this.props.question.question_id
            );
         })
         .catch((error) => {
            console.log('ERROR PUT /questionsAnswers/reportQuestion ', error);
         });
   }

   isHelpful() {
      console.log();
      axios
         .put(`${__API__}/questionsAnswers/markQuestionHelpful`, {
            question_id: this.props.question.question_id,
         })
         .then((results) => {
            console.log('SUCCESS PUT /questionsAnswers/markQuestionHelpful');
            // reload questions to update page
         })
         .catch((error) => {
            console.log(
               'ERROR PUT /questionsAnswers/markQuestionHelpful',
               error
            );
         });
   }

   markHelpful() {
      let question_id = this.props.question.question_id;
      if (!localStorage.getItem(question_id.toString())) {
         this.isHelpful.bind(this)();
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
         <Card outlined={true} className='questionCard'>
            <div className='questionRow_1'>
               <Typography
                  align='left'
                  variant='body1'
                  className='questionBody'
               >
                  <strong>Q: {this.props.question.question_body}</strong>
               </Typography>
               <Typography
                  align='right'
                  variant='body1'
                  className='questionDetails'
               >
                  Helpful?{' '}
                  <a
                     className='helpful'
                     style={{
                        cursor: 'pointer',
                        textDecorationLine: 'underline',
                     }}
                     onClick={(event) => {
                        let question_id =
                           this.props.question.question_id.toString();
                        // check if localStorage is empty
                        if (!Boolean(localStorage.getItem(question_id))) {
                           // mark helpful
                           this.isHelpful();
                           // save true to key of question_id in local storage
                           localStorage.setItem(question_id, true);
                        } else {
                           console.log('Question previously marked helpful');
                        }
                        this.props.handleInteraction(event);
                     }}
                  >
                     Yes
                  </a>
                  ({this.props.question.question_helpfulness}){' '}
                  <a
                     className='report'
                     onClick={(event) => {
                        this.reportQuestion.bind(this)();
                        // change inner html text to reported
                        event.target.innerHTML = 'Reported';
                        this.props.handleInteraction(event);
                     }}
                     style={{
                        cursor: 'pointer',
                        textDecorationLine: 'underline',
                     }}
                  >
                     Report
                  </a>{' '}
                  <a
                     className='add-question'
                     onClick={(event) => {
                        this.handleQuestionModal.bind(this)();
                        this.props.handleInteraction(event);
                     }}
                     style={{
                        cursor: 'pointer',
                        textDecorationLine: 'underline',
                     }}
                  >
                     Add an Answer
                  </a>
                  {/* by {this.props.question.asker_name},{' '}{this.props.convertDate(this.props.question.question_date)} */}
               </Typography>
            </div>
            <div className='questionRow_2'>
               <AnswerList
                  question_id={this.props.question.question_id}
                  handleInteraction={this.props.handleInteraction}
                  convertDate={this.props.convertDate}
               />
            </div>
         </Card>
      );
   }
}

export default Question;
