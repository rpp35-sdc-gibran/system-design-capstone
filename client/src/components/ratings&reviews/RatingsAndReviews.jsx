import React, { useState, useEffect, useReducer } from 'react';
import Ratings from './ratings/Ratings.jsx';
import ReviewsList from './reviews/ReviewsList.jsx';
import axios from 'axios';
import sampleReviews from './reviews/reviewsForProductId71697.js';
import sampleReviewsMeta from './sampleReviewsMeta.js';
import './reviewsStyle.css';

const reducer = (starFilters, action) => {
   switch (action.type) {
      case 'toggle':
         return starFilters.includes(action.payload)
            ? starFilters.filter((filter) => filter !== action.payload)
            : [...starFilters, action.payload];
      case 'reset':
         return [];
      default:
         return starFilters;
   }
};

const RatingsAndReviews = ({ currentProductId }) => {
   const [currentReviews, SetCurrentReviews] = useState(sampleReviews.results);
   const [currentReviewsMeta, SetCurrentReviewsMeta] =
      useState(sampleReviewsMeta);
   const [starFilters, dispatch] = useReducer(reducer, []);
   const [productName, setProductName] = useState('');
   const [report, SetReport] = useState(false);

   const renderReviewsAndRatings = () => {
      if (currentProductId) {
         axios
            .all([
               axios({
                  method: 'get',
                  url: '/reviews/',
                  headers: { product_id: currentProductId },
               }),
               axios({
                  method: 'get',
                  url: '/reviews/meta',
                  headers: { product_id: currentProductId },
               }),
               axios.get(`/products/${currentProductId}`),
            ])
            .then(
               axios.spread((reviews, reviewsMeta, productData) => {
                  console.log(
                     'reviews from server Ratings&Reviews.jsx',
                     reviews,
                     'reviewsMeta',
                     reviewsMeta,
                     'productName: ',
                     productData.data.name
                  );
                  SetCurrentReviews(reviews.data.results);
                  SetCurrentReviewsMeta(reviewsMeta.data);
                  setProductName(productData.data.name);
               })
            );
      }
   };
   const handleReport = (review_id) => {
      SetReport(!report);
      axios({
         method: 'post',
         url: '/reviews/report',
         data: { review_id: review_id },
      });
   };
   useEffect(renderReviewsAndRatings, [currentProductId, report]);
   const postReview = (newReview) => {
      console.log('sending to serer newReview', newReview);
      axios
         .post('/reviews/', { ...newReview, product_id: currentProductId })
         .then((response) => {
            console.log('after posting review response:', response);
            renderReviewsAndRatings();
         })
         .catch((error) => {
            console.log(error);
         });
   };
   console.log(
      'current product ID in RatingsAndReviews.jsx: ',
      currentProductId
   );
   console.log('starFilters', starFilters);
   return (
      <div>
         <link rel='stylesheet' type='css' href='reviewsStyle.css' />
         <Ratings reviewsMeta={currentReviewsMeta} dispatch={dispatch} />
         <ReviewsList
            reviews={currentReviews}
            starFilters={starFilters}
            productName={productName}
            postReview={postReview}
            handleReport={handleReport}
         />
      </div>
   );
};

export default RatingsAndReviews;
