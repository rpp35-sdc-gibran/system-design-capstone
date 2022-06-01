import React, { useState, useEffect } from 'react';
import './ProductCard.scss';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DefaultImage from './Image-coming-soon.svg';
import SellIcon from '@mui/icons-material/Sell';

const ProductCard = ({
   id,
   category,
   name,
   description,
   price,
   image,
   slideDirection,
}) => {
   return (
      <Paper elevation={3}>
         <Card className='product-card'>
            <CardMedia
               component='img'
               alt={name}
               height='175'
               className='product-card-image'
               image={image || DefaultImage}
            />
            <Typography
               align='center'
               className='product-card-price'
               variant='overline'
            >
               ${price}
            </Typography>
            <div className='product-card-actions-content'>
               <CardActions className='product-card-actions'>
                  <Link className='product-card-name' to={`/${id}`}>
                     <Typography variant='h6'>{name}</Typography>
                  </Link>
               </CardActions>
               <CardContent className='product-card-content'>
                  <Typography variant='overline'>{category}</Typography>
                  <Typography
                     className='product-content-description'
                     variant='caption'
                  >
                     {description}
                  </Typography>
                  <Button
                     className='product-card-btn'
                     size='small'
                     color='secondary'
                     variant='contained'
                  >
                     <ShoppingCartIcon />
                     Add to Cart
                  </Button>
               </CardContent>
            </div>
         </Card>
      </Paper>
   );
};

export default ProductCard;
