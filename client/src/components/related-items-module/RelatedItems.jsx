import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../pages/home/product-card/ItemCard.jsx';
import './RelatedItems.scss';

const RelatedItems = ({ currentProductId }) => {
   const [relatedProducts, setRelatedProducts] = useState([]);
   const [productPhotos, setProductPhotos] = useState([]);

   useEffect(() => {
      axios
         .get(`/api/products/${currentProductId}/related`)
         .then((relatedProductIds) => {
            let promises = relatedProductIds.data.map((currentId) => {
               return axios.get(`/api/products/${currentId}`);
            });
            Promise.all(promises).then((productInfo) => {
               setRelatedProducts(productInfo);
            });
            let stylePromises = relatedProductIds.data.map((id) => {
               return axios.get(`/api/products/${id}/styles`);
            });
            Promise.all(stylePromises).then((productStyles) => {
               console.log('productStyles:', productStyles);
               setProductPhotos(productStyles);
            });
         });
   }, [currentProductId]);

   console.log('relatedProducts:', relatedProducts);
   console.log('productPhotos:', productPhotos);
   if (productPhotos.length && relatedProducts.length) {
      return (
         <div className='related-items'>
            {relatedProducts.map((product, index) => (
               <ItemCard
                  key={index}
                  id={product.data.id}
                  category={product.data.category}
                  name={product.data.name}
                  price={product.data.default_price}
                  image={productPhotos[index].data.results[0].photos[0].url}
               />
            ))}
         </div>
      );
   } else {
      return null;
   }
};

export default RelatedItems;
