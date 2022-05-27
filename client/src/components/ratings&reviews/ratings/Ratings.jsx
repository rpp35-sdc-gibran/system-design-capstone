import React, { useState, useEffect } from 'react';
import StarRating from '../reviews/starRating/StarRating.jsx'
import RatingsList from './RatingsList.jsx'
import Characteristics from './Characteristics.jsx'

const Ratings = ({ reviewsMeta, dispatch }) => {
  let ratingCount = 0;
  const getAvgRating = () => {
    console.log('reviewsMeta.ratings in Ratings.jsx', reviewsMeta.ratings);
    let totalRating = 0;
    let keys = Object.keys(reviewsMeta.ratings);
    keys.forEach((key) => {
      totalRating += (Number(key) * Number(reviewsMeta.ratings[key]));
      ratingCount += Number(reviewsMeta.ratings[key]);
    })
    return (Math.round(totalRating / ratingCount * 10) / 10).toFixed(1)
  }
  const getRecommendRatio = () => {
    var trueCount = Number(reviewsMeta.recommended.true);
    return ((trueCount / ratingCount) * 100).toFixed(0) + '%'
  }
  let avgRating = getAvgRating();
  let recommendRatio = getRecommendRatio();
  return (
    <div>
      <h5>RATINGS & REVIEWS</h5>
      <div>
        <span>{avgRating}</span>
        <StarRating rating={avgRating} /><br />
        <div>{`${recommendRatio} of the reviews recommend this product`}</div>
        <RatingsList reviews={reviewsMeta} ratingCount={ratingCount} dispatch={dispatch} />
        <Characteristics characteristics={reviewsMeta.characteristics} />
      </div>
    </div>
  );
}

export default Ratings;