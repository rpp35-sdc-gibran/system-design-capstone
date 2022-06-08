import React, { lazy, Suspense, useRef } from 'react';
import ProductOverview from '../../product-overview-module/ProductOverview.jsx';
import './Product.scss';
// import QuestionsAnswers from '../../questions-answers-module/questionsAnswers.jsx';
// import RatingsAndReviews from '../../ratings&reviews/RatingsAndReviews.jsx';
import sampleReviews from '../../ratings&reviews/reviews/reviewsForProductId71697';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import WithAnalytics from '../../../WithAnalytics.jsx';

import { useIntersectionObserver } from '../../../Hooks/useIntersectionObserver.jsx';

import InteractionAnalytics from '../../ratings&reviews/interactionAnalytics.jsx';

// pass down module to this higher order component which will add on click to our module
const EnhancedProductOverview = WithAnalytics(ProductOverview);

//import modules using native react lazy load, and give a easy to identify webpack name so it can be found in network tab
const QuestionsAnswers = lazy(() =>
   import(
      /* webpackChunkName: "QuestionsAnswers" */ '../../questions-answers-module/questionsAnswers.jsx'
   )
);
const RatingsAndReviews = lazy(() =>
   import(
      /* webpackChunkName: "RatingsAndReviews" */ '../../ratings&reviews/RatingsAndReviews.jsx'
   )
);
const RelatedItems = lazy(() =>
   import(
      /* webpackChunkName: "RelatedItems" */ '../../related-items-module/RelatedItems.jsx'
   )
);
const EnhancedRatingsAndReviews = InteractionAnalytics(RatingsAndReviews);
const Product = (props) => {
   let currentReviews = sampleReviews.results;
   let { productId } = useParams();

   //create refs for all elements to observe
   let relatedItemsSection = useRef(null);
   let questionsAnswersSection = useRef(null);
   let ratingsAndReviewSection = useRef(null);

   //start observing them using hook - will return true when in viewport
   let isRelatedItemsSectionVisible =
      useIntersectionObserver(relatedItemsSection);

   let isRatingsAndReviewSectionVisible = useIntersectionObserver(
      ratingsAndReviewSection
   );

   let isQuestionsAnswersSectionVisible = useIntersectionObserver(
      questionsAnswersSection
   );

   return (
      <>
         <section
            className='product-productoverview'
            data-testid='product-overview'
         >
            <EnhancedProductOverview currentProductId={productId} />
         </section>
         <section ref={relatedItemsSection} className='product-related-items'>
            {isRelatedItemsSectionVisible && (
               <Suspense fallback={<div>Loading...</div>}>
                  <RelatedItems currentProductId={productId} />
               </Suspense>
            )}
         </section>
         <section
            ref={questionsAnswersSection}
            className='product-questions-answers'
         >
            {isQuestionsAnswersSectionVisible && (
               <Suspense fallback={<div>Loading...</div>}>
                  <QuestionsAnswers currentProductId={productId} />
               </Suspense>
            )}
         </section>
         <section
            ref={ratingsAndReviewSection}
            className='product-ratings-reviews'
         >
            {isRatingsAndReviewSectionVisible && (
               <Suspense fallback={<div>Loading...</div>}>
                  <EnhancedRatingsAndReviews
                     currentProductId={productId}
                     reviews={currentReviews}
                     {...props}
                  />
               </Suspense>
            )}
         </section>
      </>
   );
};

export default Product;
