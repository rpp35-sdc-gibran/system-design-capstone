import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
<<<<<<< HEAD

const ReviewsList = ({ reviews, starFilters }) => {
   if (starFilters.length) {
      reviews = reviews.filter((review) =>
         starFilters.includes(review.rating.toString())
      );
   }
=======
import AddNewReview from './addNewReview/AddNewReview.jsx';
const ReviewsList = ({ reviews, starFilters, productName }) => {
   console.log('In ReviewsList got: ', reviews);
   console.log('starFilters in ReviewsList.jsx: ', starFilters);

>>>>>>> 84b37a9e0efb3b91fede7919d49ae1b06cbc3c5f

   const [renderedCount, setRenderedCount] = useState(2);
   const [reviewsToRender, setReviewsToRender] = useState([]);
   const [formPopup, setFormPopup] = useState(false);
   const [value, SetValue] = useState('');
   const addStarFilter = () => {
      if (starFilters.length) {
         console.log('starFilters: ', starFilters)

         let filteredReviews = reviews.filter((review) => starFilters.includes(review.rating.toString()))
         //reviews.filter((review) => starFilters.includes(review.rating.toString()));
         setReviewsToRender([...filteredReviews])
         console.log('ReviewsList after applying starFilters: ', reviewsToRender);
      }
   }
   function moreReviewsOnClick() {
      if (renderedCount < reviews.length) {
         setRenderedCount(renderedCount + 2);
      } else {
         setRenderedCount(reviews.length);
      }
   }

   const handleReviewsSortChange = (e) => {
      let sortWith = e.target.value;
      if (sortWith === 'relevant') {
         reviews.sort((a, b) => {
            let helpfulnessA = a.helpfulness || 0;
            let helpfulnessB = b.helpfulness || 0;
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);
            if (helpfulnessA < helpfulnessB) return 1;
            if (helpfulnessA > helpfulnessB) return -1;
            if (dateA > dateB) return -1;
            if (dateA < dateB) return 1;
            return 0;
         });
         setReviewsToRender([...reviews]);
      }
      if (sortWith === 'newest') {
         reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
         setReviewsToRender([...reviews])
      }
      if (sortWith === 'helpfulness') {
         reviews.sort((a, b) => b.helpfulness - a.helpfulness);
         setReviewsToRender([...reviews])
      }
      console.log('reviews after sorted by change: ', reviews)
   };

   console.log('reviews To Render: ', reviewsToRender);
   useEffect(() => {
      setReviewsToRender(reviews);
      addStarFilter();
   }, [reviews, starFilters]);
   return (

      reviewsToRender.length ?
         <div>
            <div>
               <h1>Reviews</h1>
               <h3>
                  {reviewsToRender.length} reviews, sorted by
                  <select defaultValue='relevant' onChange={handleReviewsSortChange}>
                     <option value='helpfulness'>helpfulness </option>
                     <option value='newest'>newest</option>
                     <option value='relevant'>relevant </option>
                  </select>
               </h3>
               <div>
                  {reviewsToRender.slice(0, renderedCount).map((review, index) => (
                     <ReviewTile review={review} key={index} />
                  ))}
               </div>
               {reviewsToRender.length > 2 && reviewsToRender.length > renderedCount ? (
                  <button onClick={moreReviewsOnClick}>MORE REVIEWS</button>
               ) : (
                  <></>
               )}
               <button onClick={() => setFormPopup(true)}>ADD A REVIEW +</button>
            </div>

               <AddNewReview trigger={formPopup} setTrigger={setFormPopup} value ={value} SetValue = {SetValue}>
                  <h3>Write Your Review</h3>
                  <h4>About the {productName}</h4>
                  </AddNewReview>

         </div> : <></>
   );
};
export default ReviewsList;
