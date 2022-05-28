import React from 'react';
import Typography from '@mui/material/Typography';
import ProductCard from './product-card/ProductCard.jsx';
import './ProductCarousel.scss';

const ProductCarousel = ({ products, productPhotos }) => {
   return productPhotos.length ? (
      <div className='product-carousel'>
         <Typography variant='h5'>Newest Products</Typography>
         {products.map((product, index) => (
            <ProductCard
               key={index}
               id={product.id}
               category={product.category}
               name={product.name}
               price={product.default_price}
               image={productPhotos[index].data.results[0].photos[0].url}
            />
         ))}
      </div>
   ) : null;
};

export default ProductCarousel;
