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
  //handle getting star ratings so it can be passed down as prop to SVG
  let result = [];
  let wholeStars = Math.floor(rating);
  for (let i = 0; i < wholeStars; i++) {
    result.push(50);
  }
  result.push(Math.floor(((rating % 1) * 100) / 2));

  return (
    <div className='product-info-container'>
      <div className='product-info-line-1'>
        {result.map((rating, index) => (
          <Star rating={rating} key={index} />
        ))}
        <Link data-testid='reviewLink' className='product-info-link' href='#'>
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
          <Typography className='product-info-old-price' variant='subtitle2'>
            {default_price}
          </Typography>
        </>
      ) : (
        <Typography variant='subtitle2'>{default_price}</Typography>
      )}
      <Typography variant='body1'>{description}</Typography>
    </div>
  );
};

export default ProductInformation;
