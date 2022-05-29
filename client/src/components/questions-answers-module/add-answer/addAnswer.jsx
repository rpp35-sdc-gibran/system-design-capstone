import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

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
            console.log('getinputvalues', this.getInputValues(event));

          }}>
            <h1>Submit your Answer</h1>
            <h3>{this.props.question_id}: {this.props.question_body}</h3>
            <div>
              <label></label>
              <input/>
            </div>
            <div>
              <label></label>
              <input/>
            </div>
            <div>
              <label></label>
              <input/>
            </div>
            <div>
              <label></label>
              <input/>
            </div>
            <button>Sumbit</button>
          </form>
        </Card>
      </>
    )
  }
}

export default AddAnswer;
