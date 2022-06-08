import React, { useState, useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import ProductCard from './product-card/ProductCard.jsx';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slide from '@mui/material/Slide';
import { TransitionGroup } from 'react-transition-group';
import './ProductCarousel.scss';

const ProductCarousel = ({ products, productPhotos }) => {
   const [activeIndexes, setCurrentIndexes] = useState([0, 1, 2]);
   const [slideDirection, setSlideDirection] = useState('right');
   const containerRef = React.useRef(null);

   const goPrev = () => {
      setSlideDirection('left');
      setCurrentIndexes((activeIndexes) => {
         return activeIndexes.map((activeIndex, i) => {
            return activeIndex === products.length - 1 ? 0 : activeIndex + 1;
         });
      });
   };

   const goNext = () => {
      setSlideDirection('right');
      setCurrentIndexes((activeIndexes) => {
         return activeIndexes.map((activeIndex, i) => {
            return activeIndex === 0 ? products.length - 1 : activeIndex - 1;
         });
      });
   };

   return productPhotos.length ? (
      <div className='product-carousel'>
         <div className='product-carousel-products' ref={containerRef}>
            <IconButton onClick={goPrev}>
               <ArrowBackIosIcon />
            </IconButton>
            {activeIndexes.map((index) => (
               <Slide
                  direction={slideDirection}
                  in={true}
                  container={containerRef.current}
                  timeout={500}
                  key={products[index].id || products[index].data.id}
                  unmountOnExit
               >
                  <section>
                     <ProductCard
                        id={products[index].id || products[index].data.id}
                        category={
                           products[index].category ||
                           products[index].data.category
                        }
                        name={products[index].name || products[index].data.name}
                        description={
                           products[index].description ||
                           products[index].data.description
                        }
                        price={
                           products[index].default_price ||
                           products[index].data.default_price
                        }
                        image={
                           productPhotos[index].data.results[0].photos[0].url
                        }
                     />
                  </section>
               </Slide>
            ))}
            <IconButton onClick={goNext} aria-label='go to next product'>
               <ArrowForwardIosIcon />
            </IconButton>
         </div>
      </div>
   ) : null;
};

export default ProductCarousel;
