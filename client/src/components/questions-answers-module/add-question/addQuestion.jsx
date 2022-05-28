import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

//! expects product name as this.props.productName

class AddQuestion extends React.Component {
   getInputValues(event) {
      let values = [];
      for (var i = 0; i < event.target.elements.length - 1; i++) {
         values.push(event.target.elements[i].value);
      }
      let data = {};
      data.body = values[0];
      data.name = values[1];
      data.email = values[2];
      data.product_id = this.props.product_id;
      return data;
   }

   postQuestion(question) {
      axios
         .post('api/questionsAnswers/addQuestion', {
            question: question,
         })
         .then((results) => {
            // console.log('Successfully added question for product_id ', this.props.product_id);
         })
         .catch((error) => {
            // console.log('Error adding question for product_id ', this.props.product_id);
         });
   }

   render() {
      return (
         <>
            <Card class='addQuestion'>
               <form
                  onSubmit={(event) => {
                     event.preventDefault();
                     this.postQuestion(this.getInputValues(event));
                  }}
               >
                  <h1>Ask Your Question</h1>
                  <h3>About {this.props.product_id}</h3>
                  <div>
                     <label for='body'>Question*</label>
                     <textarea
                        name='body'
                        id='body'
                        required
                        maxlength='1000'
                        cols='45'
                        rows='15'
                     >
                        Why did you like the product or not?
                     </textarea>
                  </div>
                  <div>
                     <label for='name'>Nickname*</label>
                     <input
                        type='text'
                        name='name'
                        id='name'
                        required
                        maxlenth='60'
                        size='50'
                     />
                     <div>
                        For privacy reasons, do not use your full name or email
                        address
                     </div>
                  </div>
                  <div>
                     <label for='email'>Email*</label>
                     <input
                        type='text'
                        name='email'
                        id='email'
                        required
                        maxlength='60'
                        size='50'
                     ></input>
                     <div>
                        For authentication reasons, you will not be emailed
                     </div>
                  </div>
                  <button variant='contained'>Sumbit</button>
               </form>
            </Card>
         </>
      );
   }
}

export default AddQuestion;
