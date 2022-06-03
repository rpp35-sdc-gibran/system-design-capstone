import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './addAnswer.scss'

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

class AddAnswer extends React.Component {
   getInputValues(event) {
      let values = [];
      for (var i = 0; i < event.target.elements.length - 1; i++) {
         values.push(event.target.elements[i].value);
      }
      let data = {};
      data.body = values[0];
      data.name = values[1];
      data.email = values[2];
      data.photos = [];
      data.question_id = this.props.question_id;
      return data;
   }

   postAnswer(answer) {
      console.log('answer', answer);
      axios
         .post('api/questionsAnswers/addAnswer', {
            answer: answer,
         })
         .then((results) => {
            console.log(
               'Success adding answer for answer_id ',
               this.props.answer_id
            );
         })
         .catch((error) => {
            console.log(
               'Error adding answer for answer_id ',
               this.props.answer_id
            );
         });
   }

   render() {
      return (
         <Card
            elevation={24}
            rounded={true}
            outlined={true}
            className='addAnswer'
         >
            <form
               onSubmit={(event) => {
                  event.preventDefault();
                  this.postAnswer(this.getInputValues(event));
                  this.props.changeQAState('addAnswerModal', false);
                  // set QA.currQuestion_id to null
                  this.props.changeQAState('currQuestion_id', null);
                  // set QA.currQuestion_body to null
                  this.props.changeQAState('currQuestion_body', null);
               }}
            >
               <Typography align='center' variant='h4'>
                  Submit your Answer
               </Typography>
               <Typography align='center' variant='subtitle1'>
                  {this.props.product_name}: {this.props.question_body}
               </Typography>
               <div>
                  <label htmlFor='body'>Your Answer*</label>
                  <textarea
                     name='body'
                     className='body'
                     maxLength='1000'
                     cols='45'
                     rows='15'
                     required
                  ></textarea>
               </div>
               <div>
                  <label htmlFor='name'>What is your nickname?*</label>
                  <input
                     type='text'
                     name='name'
                     className='name'
                     maxLength='60'
                     size='60'
                     required
                     defaultValue='Example: jack543!'
                  />
                  <div>
                     For privacy reasons, do not use your full name or email
                     address
                  </div>
               </div>
               <div>
                  <label htmlFor='email'>Your email*</label>
                  <input
                     type='text'
                     name='email'
                     className='email'
                     maxLength='60'
                     size='60'
                     required
                     defaultValue='Example: jack@email.com'
                  />
                  <div>For authentication reasons, you will not be emailed</div>
               </div>
               <div>
                  <label htmlFor='photos'>Upload Your Photos</label>
                  <input
                     type='text'
                     name='email'
                     className='email'
                     maxLength='60'
                     size='60'
                  />
               </div>
               <button>Sumbit</button>
               <button
                  onClick={() =>
                     this.props.changeQAState('addAnswerModal', false)
                  }
               >
                  Cancel
               </button>
            </form>
         </Card>
      );
   }
}

export default AddAnswer;
