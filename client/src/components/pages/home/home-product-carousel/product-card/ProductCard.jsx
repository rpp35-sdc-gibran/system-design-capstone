import React from 'react';
import './ProductCard.scss';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import DefaultImage from './Image-coming-soon.svg';

const ProductCard = ({ id, category, name, price, image }) => {
   return (
      <Paper elevation={12} className='product-card'>
         <Card className='product-item-card'>
            <CardMedia
               component='img'
               alt={name}
               height='200'
               image={image || DefaultImage}
            />
         </Card>
         <CardActions>
            <Link to={`/${id}`}>{name}</Link>
         </CardActions>
         <CardContent>
            <Typography>{category}</Typography>
            <Typography>{price}</Typography>
         </CardContent>
      </Paper>
   );
};

export default ProductCard;
