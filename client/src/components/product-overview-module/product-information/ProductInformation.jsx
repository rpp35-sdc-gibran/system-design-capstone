import React from 'react';
import './ProductInformation.scss';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Star from './star/Star.jsx';

const ProductInformation = ({
   rating,
   reviewLength,
   category,
   default_price,
   description,
   features,
   name,
   slogan,
   sale_price,
}) => {
   //round rating to nearest 0.25 to pass down to svg
   rating = (Math.round(rating * 4) / 4).toFixed(2);

   let currentRating = rating;
   let starRatings = [];
   for (let i = 0; i < 5; i++) {
      if (currentRating < 1 && currentRating > 0) {
         starRatings.push(currentRating);
      } else if (currentRating <= 0) {
         starRatings.push(0);
      } else if (currentRating >= 1) {
         starRatings.push(1);
      }
      currentRating -= 1;
   }

   return (
      <div className='product-info-container'>
         <div className='product-info-line-1'>
            {starRatings.map((rating, index) => (
               <Star rating={rating} key={index} />
            ))}
            <Link
               data-testid='reviewLink'
               className='product-info-link'
               href='#'
            >
               Read all {reviewLength} reviews
            </Link>
         </div>
         <Typography data-testid='product-info-category' variant='overline'>
            {category}
         </Typography>
         <Typography data-testid='product-info-name' variant='h3'>
            {name}
         </Typography>
         {sale_price ? (
            <>
               <Typography variant='subtitle2'>{sale_price}</Typography>
               <Typography
                  className='product-info-old-price'
                  variant='subtitle2'
               >
                  {default_price}
               </Typography>
            </>
         ) : (
            <Typography variant='subtitle2'>{default_price}</Typography>
         )}
      </div>
   );
};

export default ProductInformation;
