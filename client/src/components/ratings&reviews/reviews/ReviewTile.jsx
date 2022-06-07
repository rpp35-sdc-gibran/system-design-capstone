import React, { useState, useEffect } from 'react';
import StarRating from './starRating/StarRating.jsx';
import axios from 'axios';
//! starRating returns two components since two are being exported, so use StarRating.StarRating
//! or StarRating.StarIcon

const ReviewTile = ({ review, handleReport }) => {
   const [helpfulCount, SetHelpfulCount] = useState(review.helpfulness);
   const [clickCount, SetClickCount] = useState(0);
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
   const handleHelpful = (e) => {
      console.log('clicked helpful', review.review_id)
      e.preventDefault();
      SetClickCount(clickCount + 1);
   }
   const handleReporClicked = (e) => {
      console.log('report clicked')
      e.preventDefault();
      handleReport(review.review_id);
   }
   useEffect(() => {
      if (clickCount <= 1) {
         axios({
            url: '/api/reviews/helpful',
            method: 'post',
            data: {
               review_id: review.review_id
            }
         }).then((response) => {
            SetHelpfulCount(helpfulCount + 1)
         })
      }
   }, [clickCount])
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
         <span>Helpful?</span><span className='helpful' onClick={handleHelpful}> Yes </span><span>({helpfulCount})</span>
         <span className='report' onClick={handleReporClicked}>Report</span>
      </div>
   );
};

export default ReviewTile;
