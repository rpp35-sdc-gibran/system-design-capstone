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
}) => {
  return (
    <div>
      {/* <Rating readOnly value={rating} precision={0.1} /> */}
      <Star currentrating={50} />
      <Link href='#'>Read all {reviewLength} reviews</Link>
      <Typography variant='overline'>{category}</Typography>
      <Typography variant='h1'>{name}</Typography>
      <Typography variant='subtitle2'>{default_price}</Typography>
      <Typography variant='body1'>{description}</Typography>
    </div>
  );
};

export default ProductInformation;
