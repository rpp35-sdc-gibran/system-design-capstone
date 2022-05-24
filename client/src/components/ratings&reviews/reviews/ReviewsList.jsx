import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx'

const ReviewsList = ({ reviews }) => {
  console.log('In ReviewsList got: ', reviews);
  const [renderedCount, setRenderedCount] = useState(2);
  function moreReviewsOnClick() {
    console.log('MORE REVIEWS button clicked')
    if (renderedCount < reviews.length) {
      setRenderedCount(renderedCount + 2)
    } else {
      setRenderedCount(reviews.length)
    }
  }
  return (
    <div>
      <h1>Reviews</h1>
      <h3>{reviews.length} reviews, sorted by
        <select defaultValue='relevance'>
          <option>helpful </option>
          <option>newest </option>
          <option>relevance </option>
        </select>
      </h3>
      <div>
      {reviews.slice(0, renderedCount).map((review, index) => (
          <ReviewTile review={review} key={index}/>
      ))}
      </div>
      {reviews.length > 2 && reviews.length > renderedCount ? <button onClick={moreReviewsOnClick}>MORE REVIEWS</button> : <></>}
      <button>ADD A REVIEW +</button>
    </div >
  );

}
export default ReviewsList;