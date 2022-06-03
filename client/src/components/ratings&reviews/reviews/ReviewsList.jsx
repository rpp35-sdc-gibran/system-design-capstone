import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import AddNewReview from './addNewReview/AddNewReview.jsx';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const ReviewsList = ({ reviews, starFilters, productName, postReview }) => {
   console.log('In ReviewsList got: ', reviews);
   console.log('starFilters in ReviewsList.jsx: ', starFilters);


   const [renderedCount, SetRenderedCount] = useState(2);
   const [reviewsToRender, SetReviewsToRender] = useState([]);
   const [formPopup, SetFormPopup] = useState(false);
   const [value, SetValue] = useState('');
   const [search, SetSearch] = useState('');

   const addStarFilter = () => {
      if (starFilters.length) {
         console.log('starFilters: ', starFilters)

         let filteredReviews = reviews.filter((review) => starFilters.includes(review.rating.toString()))
         //reviews.filter((review) => starFilters.includes(review.rating.toString()));
         SetReviewsToRender([...filteredReviews])
         console.log('ReviewsList after applying starFilters: ', reviewsToRender);
      }
   }
   function moreReviewsOnClick() {
      if (renderedCount < reviews.length) {
         SetRenderedCount(renderedCount + 2);
      } else {
         SetRenderedCount(reviews.length);
      }
   }

   const handleReviewsSortChange = (e) => {
      console.log(e.target.value, ' selected');
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
         SetReviewsToRender([...reviews]);
      }
      if (sortWith === 'newest') {
         reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
         SetReviewsToRender([...reviews])
      }
      if (sortWith === 'helpfulness') {
         reviews.sort((a, b) => b.helpfulness - a.helpfulness);
         SetReviewsToRender([...reviews])
      }
      console.log('reviews after sorted by change: ', reviews)
   };
   const handleSearch = (e) => {
      if (e.target.value.length >= 3) {
         SetSearch(e.target.value);
         reviews.filter((review) => review.body.includes(search))
         SetReviewsToRender(reviews)
      }
   }
   console.log('reviews To Render: ', reviewsToRender);

   useEffect(() => {
      SetReviewsToRender(reviews);
      addStarFilter();
   }, [reviews, starFilters, search]);
   return (

      reviewsToRender.length ?
         <div className='review-box'>
            <div className='review-box-inner'>
               <h1>Reviews</h1>
               <div className='reviewlistheader'>
                  <h3>{reviewsToRender.length} reviews, sorted by</h3>
                  <select defaultValue='relevant' onChange={handleReviewsSortChange}>
                     <option value='helpfulness'>helpfulness </option>
                     <option value='newest'>newest</option>
                     <option value='relevant'>relevant </option>
                  </select>
                  <Button className='searchreview'>
                     <span><svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                     <input placeholder='Search' onChange={handleSearch}></input>
                  </Button>
               </div>
               <div className="reviewtiles">
                  {reviewsToRender.slice(0, renderedCount).map((review, index) => (
                     <ReviewTile review={review} key={index} />
                  ))}
               </div>
               {reviewsToRender.length > 2 && reviewsToRender.length > renderedCount ? (
                  <Button style={{ "padding": "1px", "margin": "2px" }} variant='contained' onClick={moreReviewsOnClick}>MORE REVIEWS</Button>
               ) : (
                  <></>
               )}
               <Button style={{ "padding": "1px", "margin": "2px" }} variant='contained' onClick={() => SetFormPopup(true)}>ADD A REVIEW +</Button>
            </div>

            <AddNewReview trigger={formPopup} SetTrigger={SetFormPopup} value={value} SetValue={SetValue} postReview={postReview}>
               <h3>Write Your Review</h3>
               <h4>About the {productName}</h4>
            </AddNewReview>

         </div> : <></>
   );
};
export default ReviewsList;