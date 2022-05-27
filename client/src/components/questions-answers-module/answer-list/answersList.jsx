import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

import Answer from '../answer/answer.jsx';

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
        // console.log(`Answer list for ${this.props.question_id}`, results.data.results)
<<<<<<< HEAD:client/src/components/questions-answers-module/subcomponents/answersList.jsx
        this.setState({ allAnswers: results.data.results });
=======
        this.setState({allAnswers: results.data.results})
>>>>>>> 0d1ef2d93cdcc3a60491753a101283c01c5197b5:client/src/components/questions-answers-module/answer-list/answersList.jsx
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

<<<<<<< HEAD:client/src/components/questions-answers-module/subcomponents/answersList.jsx
  // ternary statement for not mapping undefined
=======
// ternary statement for not mapping undefined
>>>>>>> 0d1ef2d93cdcc3a60491753a101283c01c5197b5:client/src/components/questions-answers-module/answer-list/answersList.jsx

  render() {
    return (
      <Card>
        {this.state.allAnswers.map((answer) => {
          return <Answer answer={answer} />;
        })}
      </Card>
<<<<<<< HEAD:client/src/components/questions-answers-module/subcomponents/answersList.jsx
    );
=======
    )
>>>>>>> 0d1ef2d93cdcc3a60491753a101283c01c5197b5:client/src/components/questions-answers-module/answer-list/answersList.jsx
  }
}

export default AnswersList;
