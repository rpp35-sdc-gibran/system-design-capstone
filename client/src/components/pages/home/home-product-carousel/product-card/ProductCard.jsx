import React, { useState, useEffect } from 'react';
import './ProductCard.scss';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import DefaultImage from './Image-coming-soon.svg';

const ProductCard = ({ id, category, name, price, image, slideDirection }) => {
   return (
      <Paper elevation={1}>
         <Card className='product-card'>
            <CardMedia
               component='img'
               alt={name}
               height='150'
               className='product-card-image'
               image={image || DefaultImage}
            />
            <CardContent>
               <Typography>{category}</Typography>
               <Typography>{price}</Typography>
            </CardContent>
            <CardActions>
               <Link to={`/${id}`}>{name}</Link>
            </CardActions>
         </Card>
      </Paper>
   );
};

export default ProductCard;
