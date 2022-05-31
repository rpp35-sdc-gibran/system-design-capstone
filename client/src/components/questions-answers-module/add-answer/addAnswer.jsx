import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

class AddAnswer extends React.Component {
  getInputValues (event) {
    let values = [];
    for (var i = 0; i < event.target.elements.length -1; i++) {
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

  postAnswer (answer) {
    console.log('answer', answer)
    axios.post('api/questionsAnswers/addAnswer', {
      answer: answer
      })
      .then((results) => {
        console.log('Success adding answer for answer_id ', this.props.answer_id);
      })
      .catch((error) => {
        console.log('Error adding answer for answer_id ', this.props.answer_id);
      })
  }

  render () {
    return (
      <>
        <Card class="addAnswer">
        <form onSubmit={(event) => {
            event.preventDefault();
            this.postAnswer(this.getInputValues(event));
            this.props.changeQAState('addAnswerModal', false);
          }}>
            <h1>Submit your Answer</h1>
            <h3>{this.props.question_id}: {this.props.question_body}</h3>
            <div>
              <label for="body">Your Answer*</label>
              <textarea name="body" class="body" maxlength="1000" cols="45" rows="15" required></textarea>
            </div>
            <div>
              <label for="name">What is your nickname?*</label>
              <input type="text" name="name" class="name" maxlength="60" size="50" required/>
              <div>For privacy reasons, do not use your full name or email address</div>
            </div>
            <div>
              <label for="email">Your email*</label>
              <input type="text" name="email" class="email" maxlength="60" size="50" required/>
              <div>For authentication reasons, you will not be emailed</div>
            </div>
            <div>
              <label for="photos">Upload Your Photos</label>
              <input type="text" name="email" class="email" maxlength="60" size="50"/>
            </div>
            <button>Sumbit</button>
            <button onClick={() => this.props.changeQAState('addAnswerModal', false)}>Cancel</button>
          </form>
        </Card>
      </>
    )
  }
}

export default AddAnswer;
