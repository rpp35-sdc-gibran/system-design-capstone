import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import ProductCard from '../pages/home/home-product-carousel/product-card/ProductCard.jsx';
import ProductCarousel from '../pages/home/home-product-carousel/ProductCarousel.jsx';
import Typography from '@mui/material/Typography';
import './RelatedItems.scss';

const RelatedItems = ({ currentProductId }) => {
   const [relatedProducts, setRelatedProducts] = useState([]);
   const [productPhotos, setProductPhotos] = useState([]);

   useEffect(() => {
      axios
         .get(`${__API__}/products/${currentProductId}/related`)
         .then((relatedProductIds) => {
            //! limit call for styles and product info to only first three related items to prevent too many calls error
            if (relatedProductIds) {
               let currentRelatedProducts = relatedProductIds.data.slice(0, 6);
               let promises = currentRelatedProducts.map((currentId) => {
                  return axios.get(`${__API__}/products/${currentId}`);
               });
               Promise.all(promises).then((productInfo) => {
                  setRelatedProducts(productInfo);
               });
               let stylePromises = currentRelatedProducts.map((id) => {
                  return axios.get(`${__API__}/products/${id}/styles`);
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
               <ProductCarousel
                  products={relatedProducts}
                  productPhotos={productPhotos}
               />
            </div>
         </>
      );
   } else {
      return null;
   }
};

export default RelatedItems;
