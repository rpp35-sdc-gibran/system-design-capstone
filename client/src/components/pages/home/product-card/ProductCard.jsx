import React from 'react';
import './ProductCard.scss';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, category, name, price }) => {
   return (
      <Paper elevation={12} className='product-card'>
         <Card>
            <CardMedia
               component='img'
               alt={name}
               height='200'
               image='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940'
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
