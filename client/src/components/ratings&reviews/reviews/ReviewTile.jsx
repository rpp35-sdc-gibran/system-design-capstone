import React, { useState, useEffect } from 'react';
import StarRating from './starRating/StarRating.jsx';

//! starRating returns two components since two are being exported, so use StarRating.StarRating
//! or StarRating.StarIcon

const ReviewTile = ({ review }) => {
   var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];
   var month = months[Number(review.date.slice(5, 7)) - 1];
   var date = review.date.slice(8, 10);
   var year = review.date.slice(0, 4);
   //! removed key from div, instead added to reviewlist file when calling review tile
   return (
      <div className='reviewTile'>
         <StarRating rating={review.rating} reviewId={review.review_id} />
         <span className='nameanddate'>{`${review.reviewer_name},  ${month} ${date}, ${year}`}</span>
         <br />
         <span className='summary'>{review.summary.slice(0, 60)}</span>
         <br />
         {review.recommend ? (
            <span>
               &#x2713; I recommend this product
               <br />
            </span>
         ) : (
            <></>
         )}
         {review.response && review.response.length ? (
            <span>
               {`Response from seller: ${(<br />)}${review.response}`}
               <br />
            </span>
         ) : (
            <></>
         )}
         <span className='body'>{review.body}</span>
         <br />
         <span>Helpful? Yes ({review.helpfulness})</span>
         <span>Report</span>
      </div>
   );
};

export default ReviewTile;
