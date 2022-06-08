import React, { useState, useEffect, useReducer } from 'react';
import RatingCount from './RatingCount.jsx';
import Button from '@mui/material/Button';


const RatingsList = ({ reviews, ratingCount, dispatch }) => {
  const countRating = (rating) => {
    return Number(reviews.ratings[rating]) || 0;
  }

  const handleStarFilterReset = (e) => {
    e.preventDefault();
    dispatch({ type: 'reset'})
    }
  return (
    <div >
    {['5', '4', '3', '2', '1'].map((rating) => (
      <div key={rating} className="ratingsBreakdown">
        <span >{`${rating} stars`}</span>
        <progress className='ratingprog' max={ratingCount} value={countRating(rating)}></progress>
        {/* <span className='starFilter' onClick={() => dispatch({ type: 'toggle', payload: rating })}>
        {reviews.ratings[rating] || 0}
      </span> */}
        <RatingCount rating={rating} dispatch={dispatch} reviews={reviews} />
      </div>
      ))}
      <Button variant='contained' onClick={handleStarFilterReset}>Reset Filter</Button>
    </div>
  )

}

export default RatingsList;