import React, { useState, useEffect } from 'react';
import Ratings from './ratings/Ratings.jsx'
import ReviewsList from './reviews/ReviewsList.jsx'
import axios from 'axios';
import sampleReviews from './reviews/reviewsForProductId71697.js';
import sampleReviewsMeta from './sampleReviewsMeta.js'
import './reviewsStyle.css';

const RatingsAndReviews = ({ currentProductId }) => {
  const [currentReviews, SetCurrentReviews] = useState(sampleReviews.results);
  const [currentReviewsMeta, SetCurrentReviewsMeta] = useState(sampleReviewsMeta);

  useEffect(() => {
    if (currentProductId) {
      axios.all([
        axios({
          method: 'get',
          url: '/api/reviews/',
          headers: { 'product_id': currentProductId }
        }),
        axios({
          method: 'get',
          url: '/api/reviews/meta',
          headers: { 'product_id': currentProductId }
        })
      ])
        .then(axios.spread((data1, data2) => {
          console.log('reviews from server Ratings&Reviews.jsx', data1, 'reviewsMeta', data2)
          SetCurrentReviews(data1.data.results);
          SetCurrentReviewsMeta(data2.data);
        }))
    }
  }, [currentProductId]);


  console.log("current product ID in RatingsAndReviews.jsx: ", currentProductId)
  return (
    <div>
      <link rel='stylesheet' type="css" href='reviewsStyle.css' />
      <Ratings reviewsMeta={currentReviewsMeta} />
      <ReviewsList reviews={currentReviews} />
    </div>
  )

};

export default RatingsAndReviews;