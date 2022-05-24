// stateful react componet

// pass search state up to QA component \

// create an on change function

// create search/filter function

// conditionally search after 3 chars typed

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
  }

// ternary statement for not mapping undefined

  render () {
    return (
     <input></input>
    )
  }
}

export default Search;
