import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './answer.scss'

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

class Answer extends React.Component {
   reportAnswer() {
      axios
         .put('/api/questionsAnswers/reportAnswer', {
            answer_id: this.props.answer.answer_id,
         })
         .then((results) => {
            console.log(
               'SUCCESS reporting answer',
               this.props.answer.answer_id
            );
            // refresh page
         })
         .catch((error) => {
            console.log(
               'ERROR reporting answer ',
               this.props.answer.answer_id,
               error
            );
         });
   }

   isHelpful() {
      axios
         .put('/api/questionsAnswers/markAnswerHelpful', {
            answer_id: this.props.answer.answer_id,
         })
         .then((results) => {
            console.log('SUCCESS PUT /api/questionsAnswers/markAnswerHelpful');
            // reload questions to update page
         })
         .catch((error) => {
            console.log(
               'ERROR PUT /api/questionsAnswers/markAnswerHelpful',
               error
            );
         });
   }

   render() {
      // if this.props.answer.answerer_name is equal to "Seller" bold font?
      let answerer;
      if (this.props.answer.answerer_name === 'Seller') {
         answerer = (
            <strong>{this.props.answer.answerer_name}</strong>
         );
      } else {
         answerer = this.props.answer.answerer_name;
      }
      return (
         <>
            <Typography align='left' variant='body1'>
               <strong>A:</strong>{' '}
               {this.props.answer.body}
            </Typography>
            <Typography variant='body2'>
               {' '}by {answerer},{' '}
               {this.props.convertDate(this.props.answer.date)}
               {' '}Helpful?{' '}
               <a
                  className='helpful'
                  style={{ cursor: 'pointer', textDecorationLine: 'underline' }}
                  onClick={(event) => {
                     let answer_id = this.props.answer.answer_id.toString();
                     if (!Boolean(localStorage.getItem(answer_id))) {
                        this.isHelpful();
                        localStorage.setItem(answer_id, true);
                     } else {
                        console.log('Answer previously marked helpful');
                     }
                     this.props.handleInteraction(event);
                  }}
               >
                  Yes
               </a>
               ({this.props.answer.helpfulness}){' '}
               <a
                  className='report'
                  onClick={(event) => {
                     this.reportAnswer.bind(this)();
                     // change inner html text to reported
                     event.target.innerHTML = 'Reported';
                     this.props.handleInteraction(event);
                  }}
                  style={{ cursor: 'pointer', textDecorationLine: 'underline' }}
               >
                  Report
               </a>
            </Typography>
         </>
      );
   }
}

export default Answer;