import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import ProductCard from './product-card/ProductCard.jsx';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './ProductCarousel.scss';

const ProductCarousel = ({ products, productPhotos }) => {
   const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2]);

   const goPrev = () => {
      setCurrentIndexes((currentIndexes) => {
         return currentIndexes.map((activeIndex, i) => {
            return activeIndex === products.length - 1 ? 0 : activeIndex + 1;
         });
      });
   };
   console.log('currentIndexes:', currentIndexes);
   const goNext = () => {
      setCurrentIndexes((currentIndexes) => {
         return currentIndexes.map((activeIndex, i) => {
            return activeIndex === 0 ? products.length - 1 : activeIndex - 1;
         });
      });
   };

   return productPhotos.length ? (
      <div className='product-carousel'>
         <Typography variant='h5'>Newest Products</Typography>
         <div className='product-carousel-products'>
            <IconButton onClick={goPrev}>
               <ArrowBackIosIcon />
            </IconButton>
            {currentIndexes.map((activeIndex, i) => (
               <ProductCard
                  key={products[activeIndex].id}
                  id={products[activeIndex].id}
                  category={products[activeIndex].category}
                  name={products[activeIndex].name}
                  price={products[activeIndex].default_price}
                  image={
                     productPhotos[activeIndex].data.results[0].photos[0].url
                  }
               />
            ))}
            <IconButton onClick={goNext}>
               <ArrowForwardIosIcon />
            </IconButton>
         </div>
      </div>
   ) : null;
};

export default ProductCarousel;
