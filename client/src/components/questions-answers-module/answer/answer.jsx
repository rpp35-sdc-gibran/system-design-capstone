import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

class Answer extends React.Component {
   reportAnswer() {
      axios.put('/api/questionsAnswers/reportAnswer', {
            answer_id: this.props.answer.answer_id,
         })
         .then((results) => {
            console.log('SUCCESS reporting answer', this.props.answer.answer_id);
            // refresh page
         })
         .catch((error) => {
            console.log('ERROR reporting answer ', this.props.answer.answer_id, error);
         });
   }

   isHelpful() {
      axios.put('/api/questionsAnswers/markAnswerHelpful', {
            answer_id: this.props.answer.answer_id,
         })
         .then((results) => {
            console.log('SUCCESS PUT /api/questionsAnswers/markAnswerHelpful');
            // reload questions to update page
         })
         .catch((error) => {
            console.log('ERROR PUT /api/questionsAnswers/markAnswerHelpful', error);
         });
   }

   render() {
      //! if this.props.answer.answerer_name is equal to "Seller" bold font?
      let answerer;
      if (this.props.answer.answerer_name === 'Seller') {
        answerer = <Typography variant="h6">{this.props.answer.answerer_name}</Typography>
      } else {
        answerer = this.props.answer.answerer_name;
      }
      return (
         <Card variant='outlined'>
           <Typography align='left' variant='h6'>A: </Typography>
           <Typography variant='body1'>
             {this.props.answer.body}
             by {this.props.answer.answerer_name}, {this.props.convertDate(this.props.answer.date)}
             Helpful?
             <a className='helpful' style={{ cursor: 'pointer', textDecorationLine: 'underline' }} onClick={() => {
             let answer_id = this.props.answer.answer_id.toString();
               if (!Boolean(localStorage.getItem(answer_id))) {
                 this.isHelpful();
                 localStorage.setItem(answer_id, true);
               }
             }}>Yes</a>
             ({this.props.answer.helpfulness})
             <a className='report' onClick={this.reportAnswer.bind(this)} style={{ cursor: 'pointer', textDecorationLine: 'underline' }}>Report</a>
           </Typography>
         </Card>
      );
   }
}

export default Answer;
