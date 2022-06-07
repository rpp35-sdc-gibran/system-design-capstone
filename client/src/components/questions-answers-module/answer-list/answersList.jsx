import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import  './answerList.scss';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import Answer from '../answer/answer.jsx';

class AnswersList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         shownAnswers: [],
         allAnswers: [],
      };
      this.getAnswers = this.getAnswers.bind(this);
      this.addShownAnswers = this.addShownAnswers.bind(this);
      this.sortAnswers = this.sortAnswers.bind(this);
   }

   sortAnswers() {
      // set var to current allAnswers array
      let currAllAnswers = this.state.allAnswers;

      // iterate overy copy of allAnswers
      currAllAnswers.forEach((answer) => {
         // if answerer is Seller, push answer to new array
         if (answer.answerer_name === 'Seller') {
            console.log('answer', answer);
            sellerAnswers.push(answer);
         }
      })

      let sellerAnswers = currAllAnswers.map((answer) => {
         if (answer.answerer_name === 'Seller') {
            console.log('answer', answer);
            return answer;
         }
      })
      // update allAnswers state to new array concatinated with remaining answers
      this.setState({allAnswers: sellerAnswers.concat(currAllAnswers)});
   }

   getAnswers() {
      axios
         .get('/api/questionsAnswers/answers', {
            params: { question_id: this.props.question_id },
         })
         .then((results) => {
            this.setState({
               shownAnswers: results.data.results.splice(0, 2),
               allAnswers: results.data.results,
            });
         })
         .catch((error) => {
            console.log('error', error);
         });
   }

   addShownAnswers() {
      let currShownAnswers = this.state.shownAnswers,
         currAllAnswers = this.state.allAnswers;
      currShownAnswers = currShownAnswers.concat(currAllAnswers.splice(0, 2));
      this.setState({
         shownAnswers: currShownAnswers,
         allAnswers: currAllAnswers,
      });
   }

   componentDidMount() {
      this.getAnswers();
      // order answers
      // this.sortAnswers();
      this.addShownAnswers();
   }

   render() {
      let moreAnswers;
      if (this.state.allAnswers.length) {
         moreAnswers = (
            <button
               onClick={() => {
                  this.addShownAnswers();
               }}
            >
               <Typography variant='body1'>See More Answers</Typography>
            </button>
         );
      } else {
         moreAnswers = null;
      }

      return (
         <Card>
            {this.state.shownAnswers.map((answer, index) => {
               return (
                  <Answer
                     key={index}
                     answer={answer}
                     convertDate={this.props.convertDate}
                  />
               );
            })}
            {moreAnswers}
         </Card>
      );
   }
}

export default AnswersList;
