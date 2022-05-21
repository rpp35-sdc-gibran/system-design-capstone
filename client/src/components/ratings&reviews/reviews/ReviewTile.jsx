import React, { useState, useEffect } from 'react';
import StarRating from './starRating/StarRating.jsx'
const ReviewTile = ({ review }) => {
  console.log('in ReviewTile got: ', review);

  var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
  var month = months[Number(review.date.slice(5, 7)) - 1]
  var date = review.date.slice(8, 10);
  var year = review.date.slice(0, 4);
  return (
    <div key={review.review_id}>
      <StarRating rating={review.rating} reviewId={review.review_id} /><span>{review.reviewer_name}</span><span>{`  ${month} ${date}, ${year}`}</span><br />
      <span>{review.summary}</span><br />
      {review.recommend ? <span>&#x2713; I recommend this product<br/></span> : <></>}
      {review.response && review.response.length ? <span>{`Response from seller: ${<br/>}${review.response}`}<br/></span> : <></>}
      <span>{review.body}</span><br />
      <span>Helpful? Yes ({review.helpfulness})</span>
      <span>Report</span>
    </div>
  )
}


export default ReviewTile;