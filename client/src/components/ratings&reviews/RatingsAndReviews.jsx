import React from 'react';
import Ratings from './ratings/Ratings.jsx'
import ReviewsList from './reviews/ReviewsList.jsx'
import axios from 'axios';
class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReviews: []
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.currentProductId) {
      axios({
          method: 'get',
          url: '/api/reviews/',
          headers: { 'product_id': nextProps.currentProductId.toString() }
        }).
          then(({ data }) => {
            console.log('got reviews from server at Ratings&Reviews.jsx', data)
            this.setState({
              currentReviews: data.results
            })
          })
  }
}
  render() {
    console.log("current product ID in Reviews Component: ", this.props.currentProductId)
    return (
      <div>
        <Ratings currentProductId={this.props.currentProductId}/>
        <ReviewsList reviews={this.state.currentReviews}/>
      </div>

    )
  }
}

export default RatingsAndReviews;