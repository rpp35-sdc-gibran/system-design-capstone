import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './answerList.scss';

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
      this.removeShownAnswers = this.removeShownAnswers.bind(this);
      this.sortAnswers = this.sortAnswers.bind(this);
   }

   sortAnswers() {
      // set var to current allAnswers array
      let currAllAnswers = this.state.allAnswers;

      // iterate overy copy of allAnswers
      let sellerAnswers = currAllAnswers.map((answer) => {
         // if answerer is Seller, push answer to new array
         if (answer.answerer_name === 'Seller') {
            console.log('answer', answer);
            return answer;
         }
      });
      // update allAnswers state to new array concatinated with remaining answers
      this.setState({ allAnswers: sellerAnswers.concat(currAllAnswers) });
   }

   getAnswers() {
      axios
         .get('/questionsAnswers/answers', {
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
      let currShownAnswers = this.state.shownAnswers;
      let currAllAnswers = this.state.allAnswers;
      currShownAnswers = currShownAnswers.concat(currAllAnswers.splice(0, 2));
      this.setState({
         shownAnswers: currShownAnswers,
         allAnswers: currAllAnswers,
      });
   }

   removeShownAnswers() {
      let currShownAnswers = this.state.shownAnswers;
      let currAllAnswers = this.state.allAnswers;
      currAllAnswers = currAllAnswers.concat(currShownAnswers.splice(2));
      this.setState({
         shownAnswers: currShownAnswers,
         allAnswers: currAllAnswers,
      });
   }

   componentDidMount() {
      this.getAnswers();
      // this.sortAnswers();
      this.addShownAnswers();
   }

   render() {
      let answersButton;
      if (this.state.allAnswers.length) {
         answersButton = (
            <a
               onClick={(event) => {
                  this.addShownAnswers();
                  this.props.handleInteraction(event);
               }}
            >
               <Typography variant='body1'><strong>LOAD MORE ANSWERS</strong></Typography>
            </a>
         );
      } else if (this.state.shownAnswers.length) {
         answersButton = (
            <a
               onClick={(event) => {
                  this.removeShownAnswers();
                  this.props.handleInteraction(event);
               }}
            >
               <Typography variant='body1'><strong>COLLAPSE ANSWERS</strong></Typography>
            </a>
         );
      }

      return (
         <div className='answersList'>
            {this.state.shownAnswers.map((answer, index) => {
               return (
                  <Answer
                     key={index}
                     answer={answer}
                     convertDate={this.props.convertDate}
                     handleInteraction={this.props.handleInteraction}
                  />
               );
            })}
            {answersButton}
         </div>
      );
   }
}

export default AnswersList;
