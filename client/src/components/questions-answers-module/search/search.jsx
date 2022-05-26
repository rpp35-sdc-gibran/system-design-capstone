import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

// X - expects this.props.allQuestions

//TODO: conditionally pass search state up to QA component after 3 chars typed -- delete filteredQuestions if term is shorter than 3 chars??

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }

    this.filterQuestions = this.filterQuestions.bind(this);
  }

  filterQuestions (questionsList, query) {
    let filtered = [];
    questionsList.forEach((question) => {
      console.log('question', question)
      for (var key in question) {
        console.log(key, question);
         if ( (typeof question[key] === 'string') && (question[key].includes(query)) ) {
           filtered.push(question);
           continue;
         }
      }
    })
    return filtered;
  }

  updateQuery (event) {
    this.setState({query: event.target.value})
  }

  searchQuery () {
    // if query length is larger than or equal to 3
    if (this.state.query.length >= 3) {
      // pass fileredQuestions state up to QA component
      console.log('query longer than 3: ', this.state.query);
      this.props.changeQAState('fileredQuestions', this.filterQuestions(this.props.allQuestions, this.state.query))
      // if query length is less than 3
    } else {
      // ensure filterQuestions is not defined in QA component
      this.props.changeQAState('filteredQuestions', undefined);
    }
  }

  render () {
    return (
      <input onChange={(event) => {
        this.updateQuery.bind(this)(event);
        // if query length is larger than or equal to 3
        if (this.state.query.length > 2) {
          // pass fileredQuestions state up to QA component
          console.log('query longer than 3: ', this.state.query);
          console.log( 'all questions', this.props.allQuestions)
          this.props.changeQAState('filteredQuestions', this.filterQuestions(this.props.allQuestions, this.state.query))
          // if query length is less than 3
        } else {
          // ensure filterQuestions is not defined in QA component
          this.props.changeQAState('filteredQuestions', undefined);
        }
     }}></input>
    )
  }
}

export default Search;
