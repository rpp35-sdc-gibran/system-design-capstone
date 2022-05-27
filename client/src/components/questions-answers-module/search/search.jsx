import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }

    this.filterQuestions = this.filterQuestions.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  filterQuestions (questionsList, query) {
    let filtered = [];
    questionsList.forEach((question) => {
      for (var key in question) {
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

  render () {
    return (
      <input onChange={(event) => {
        this.updateQuery(event);
        if (this.state.query.length >= 2) {
          this.props.changeQAState('filteredQuestions', this.filterQuestions(this.props.allQuestions, this.state.query))
        } else {
          this.props.changeQAState('filteredQuestions', undefined);
        }
     }} size="30"/>
    )
  }
}

export default Search;
