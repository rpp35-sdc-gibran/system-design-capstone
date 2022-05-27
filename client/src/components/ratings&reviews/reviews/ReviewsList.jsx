import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx'


const ReviewsList = ({ reviews, starFilters }) => {
  console.log('starFilters in ReviewsList.jsx: ', starFilters)
  if (starFilters.length) {
    reviews = reviews.filter(review => starFilters.includes(review.rating.toString()));
  }

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

  const handleReviewsSortChange = (e) => {
    console.log(e.target.value, ' selected');
    let sortWith = e.target.value;
    if(sortWith === 'relevant') {
      reviews.sort((a, b) => {
        let helpfulnessA = a.helpfulness || 0;
        let helpfulnessB = b.helpfulness || 0;
        let dateA = a.date;
        let dateB = b.date;
        if(helpfulnessA < helpfulnessB) return -1;
        if(helpfulnessA > helpfulnessB) return 1;
        if(dateA > dateB) return -1;
        if(dateA < dateB) return 1;
        return 0;
      })
    }
    if(sortWith === 'newest') {
      reviews.sort((a, b) => (a.date - b.date))
    }
    if(sortWith === 'helpfulness') {
      reviews.sort((a, b) => (b.helpfulness - a.helpfulness))
    }
  }

  return (
    <div>
      <h1>Reviews</h1>
      <h3>{reviews.length} reviews, sorted by
        <select defaultValue='relevant' onChange={handleReviewsSortChange}>
          <option value='helpfulness'>helpfulness </option>
          <option value='newest'>newest</option>
          <option value='relevant'>relevant </option>
        </select>
      </h3>
      <div>
        {reviews.slice(0, renderedCount).map((review, index) => (
          <ReviewTile review={review} key={index} />
        ))}
      </div>
      {reviews.length > 2 && reviews.length > renderedCount ? <button onClick={moreReviewsOnClick}>MORE REVIEWS</button> : <></>}
      <button>ADD A REVIEW +</button>
    </div >
  );

}
export default ReviewsList;