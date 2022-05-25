import React from 'react';
import ProductOverview from '../../product-overview-module/ProductOverview.jsx';
import QuestionsAnswers from '../../questions-answers-module/questionsAnswers.jsx';
import RatingsAndReviews from '../../ratings&reviews/RatingsAndReviews.jsx';
import sampleReviews from '../../ratings&reviews/reviews/reviewsForProductId71697';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Product = (props) => {
   let currentReviews = sampleReviews.results;
   let { productId } = useParams();
   console.log('id:', productId);

   return (
      <div>
         <ProductOverview currentProductId={productId} />
         <QuestionsAnswers currentProductId={productId} />
         <RatingsAndReviews
            currentProductId={productId}
            reviews={currentReviews}
            {...props}
         />
      </div>
   );
};

export default Product;
