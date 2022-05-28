import React, { useState, useEffect, useReducer } from 'react';

const RatingCount = ({ reviews, rating, dispatch }) => {
   const handleRatingCountOnClick = (e) => {
      e.preventDefault();
      dispatch({ type: 'toggle', payload: rating });
   };
   return (
      <span className='starFilter' onClick={handleRatingCountOnClick}>
         {reviews.ratings[rating] || 0}
      </span>
   );
};
export default RatingCount;
