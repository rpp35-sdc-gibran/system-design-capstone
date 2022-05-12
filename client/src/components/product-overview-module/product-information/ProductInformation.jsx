import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Link from '@mui/material/Link';

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
    <Grid>
      <Rating readOnly value={rating} precision={0.1} />
      <Link href='#'>Read all {reviewLength} reviews</Link>
      <Typography>{category}</Typography>
      <Typography>{name}</Typography>
      <Typography>{default_price}</Typography>
      <Typography>{description}</Typography>
    </Grid>
  );
};

export default ProductInformation;
