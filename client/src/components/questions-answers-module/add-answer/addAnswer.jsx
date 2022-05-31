import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

/*
 * axios({
 *   method: 'post',
 *   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${req.body.answer.question_id}/answers`,
 *   headers: { Authorization: GITHUB_API_TOKEN },
 *   data: {
 *     body: req.body.answer.body, // text
 *     name: req.body.answer.name, // text
 *     email: req.body.answer.email, // text
 *     photos: req.body.answer.photos // array of urls
 *   }})
 */

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
    data.photos = values[3]
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
          <form onSumbit={(event) => {
            event.preventDefault()
            console.log('getinputvalues', this.getInputValues(event)); // not working?
            this.postAnswer(this.getInputValues(event)); // not working?
            () => this.props.changeQAState('addAnswerModal', false); // working????
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
              <input type="text" name="email" class="email" maxlength="60" size="50" required/>
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
