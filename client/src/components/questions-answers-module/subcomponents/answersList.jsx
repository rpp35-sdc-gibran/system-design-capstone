import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

import Answer from './Answer.jsx';

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnswers: [],
    };
    axios
      .get('/api/questionsAnswers/answers', {
        params: {
          question_id: this.props.question_id,
        },
      })
      .then((results) => {
<<<<<<< HEAD
        this.setState({ allAnswers: results.data.results });
=======
        // console.log(`Answer list for ${this.props.question_id}`, results.data.results)
        this.setState({allAnswers: results.data.results})
>>>>>>> 355f07f3e19f0f67ccbb3eea683579d1f0a89765
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

<<<<<<< HEAD
  render() {
    return <Card>{this.props.question_id}</Card>;
=======
// ternary statement for not mapping undefined

  render () {
    return (
      <Card>
        {this.state.allAnswers.map((answer) => {
          return <Answer answer={answer}/>
        })}
      </Card>
    )
>>>>>>> 355f07f3e19f0f67ccbb3eea683579d1f0a89765
  }
}

export default AnswersList;
