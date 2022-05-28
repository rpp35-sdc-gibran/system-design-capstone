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
   useEffect(() => {
      if (currentProductId) {
         axios
            .all([
               axios({
                  method: 'get',
                  url: '/api/reviews/',
                  headers: { product_id: currentProductId },
               }),
               axios({
                  method: 'get',
                  url: '/api/reviews/meta',
                  headers: { product_id: currentProductId },
               }),
            ])
            .then(
               axios.spread((data1, data2) => {
                  SetCurrentReviews(data1.data.results);
                  SetCurrentReviewsMeta(data2.data);
               })
            );
      }
   }, [currentProductId]);

   return (
      <div>
         <link rel='stylesheet' type='css' href='reviewsStyle.css' />
         <Ratings reviewsMeta={currentReviewsMeta} dispatch={dispatch} />
         <ReviewsList reviews={currentReviews} starFilters={starFilters} />
      </div>
   );
};

export default RatingsAndReviews;
