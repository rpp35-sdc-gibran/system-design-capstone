import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
import Card from '@mui/material/Card';


class QuestionsAnswers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product_id: 71697,
      questions: []
    }

  axios.get('/api/questionsAnswers/questions', {
    params: {
      product_id: this.state.product_id
    }
    })
    .then((results) => {
      console.log('results', results);
      this.setState({questions: results.data.results});
    })
    .catch((error) => {
      console.log('error', error);
      this.setState({error: error});
    })

  }
  render() {
    return (
      <div>
        {this.state.questions.map((question) => {
          return (
            <Card variant="outlined">
              <div>{question.question_body}</div>
              <div>{question.question_date}</div>
              <div>{question.asker_name}</div>
            </Card>
            )
        })}
        <Button variant="contained">Add Question</Button>
      </div>
    )
  }
};

export default QuestionsAnswers;