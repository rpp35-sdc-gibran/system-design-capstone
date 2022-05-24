import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

function ReviewsList({ reviews }) {
  const [renderedCount, setRenderedCount] = useState(2);
  function moreReviewsOnClick() {
    if (renderedCount < reviews.length) {
      setRenderedCount(renderedCount + 2);
    } else {
      setRenderedCount(reviews.length);
    }
  }
  let currentReviews = reviews.slice(0, renderedCount);
  return (
    <div>
      <h1>Reviews</h1>
      <h3>
        {reviews.length} reviews, sorted by
        <select defaultValue='relevance'>
          <option>helpful </option>
          <option>newest </option>
          <option>relevance </option>
        </select>
      </h3>
      {currentReviews.map((review, index) => (
        <ReviewTile review={review} key={index} />
      ))}
      //! added index to map, then key to reviewtile
      {/* {reviews.slice(0, renderedCount).map((singleReview, index) => ( */}
      {/* <div key={review.review_id}> */}
      {/* <StarRating rating={review.rating} reviewId={review.review_id} /><span>{review.reviewer_name}</span><span>{review.date.slice(5, 10) + ', ' + review.date.slice(0, 4)}</span><br />
        //   <span>{review.summary}</span><br />
        //   <span>{review.body}</span><br />
        //   <span>Helpful? Yes ({review.helpfulness})</span><span>Report</span> */}
      {/* <ReviewTile key={index} review={singleReview} /> */}
      {/* </div> */}
      {/* ))} */}
      {reviews.length > 2 && reviews.length > renderedCount ? (
        <button onClick={moreReviewsOnClick}>MORE REVIEWS</button>
      ) : (
        <></>
      )}
      <button>ADD A REVIEW +</button>
    </div>
  );
}
export default ReviewsList;
