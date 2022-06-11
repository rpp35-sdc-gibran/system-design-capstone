import React from 'react';
import ReactDOM from 'react-dom';
import './questionList.scss'

import Card from '@mui/material/Card';
import Question from '../question/question.jsx';

class QuestionsList extends React.Component {
   render() {
      return (
         <div>
            {this.props.questions.map((question, index) => {
               return (
                  <Question
                     key={index}
                     question={question}
                     addAnswerModal={this.props.addAnswerModal}
                     changeQAState={this.props.changeQAState}
                     convertDate={this.props.convertDate}
                     handleInteraction={this.props.handleInteraction}
                  />
               );
            })}
         </div>
      );
   }
}

export default QuestionsList;