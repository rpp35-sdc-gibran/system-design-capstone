import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../pages/home/home-product-carousel/product-card/ProductCard.jsx';
import Typography from '@mui/material/Typography';
import './RelatedItems.scss';

const RelatedItems = ({ currentProductId }) => {
   const [relatedProducts, setRelatedProducts] = useState([]);
   const [productPhotos, setProductPhotos] = useState([]);

   useEffect(() => {
      axios
         .get(`/api/products/${currentProductId}/related`)
         .then((relatedProductIds) => {
            //! limit call for styles and product info to only first three related items to prevent too many calls error
            if (relatedProductIds) {
               let currentRelatedProducts = relatedProductIds.data.slice(0, 3);
               let promises = currentRelatedProducts.map((currentId) => {
                  return axios.get(`/api/products/${currentId}`);
               });
               Promise.all(promises).then((productInfo) => {
                  setRelatedProducts(productInfo);
               });
               let stylePromises = currentRelatedProducts.map((id) => {
                  return axios.get(`/api/products/${id}/styles`);
               });
               Promise.all(stylePromises).then((productStyles) => {
                  setProductPhotos(productStyles);
               });
            }
         });
   }, [currentProductId]);

   if (productPhotos.length && relatedProducts.length) {
      return (
         <>
            <Typography align='center' variant='h3'>
               Related Items
            </Typography>
            <div className='related-items'>
               {relatedProducts.map((product, index) => (
                  <ProductCard
                     key={index}
                     id={product.data.id}
                     category={product.data.category}
                     name={product.data.name}
                     price={product.data.default_price}
                     image={productPhotos[index].data.results[0].photos[0].url}
                  />
               ))}
            </div>
         </>
      );
   } else {
      return null;
   }
};

export default RelatedItems;
