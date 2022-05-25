import React, { useState, useEffect } from 'react';
import './Home.scss';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import ItemCard from './product-card/ItemCard.jsx';
import Typography from '@mui/material/Typography';

const Home = () => {
   const [products, setProducts] = useState([]);
   const [productPhotos, setProductPhotos] = useState([]);

   useEffect(() => {
      axios
         .get('/api/products')
         .then((products) => {
            setProducts(products.data);
            let promises = products.data.map((item) => {
               return axios.get(`/api/products/${item.id}/styles`);
            });
            Promise.all(promises).then((allProducts) => {
               console.log('allProducts:', allProducts);
               setProductPhotos(allProducts);
            });
         })
         .catch((err) => {
            console.log('err in App.jsx:', err);
         });
   }, []);

   if (productPhotos.length) {
      console.log(
         'productPhotos:',
         productPhotos[0].data.results[0].photos[0].url
      );
   }

   return (
      <div>
         <Typography variant='h3'>Choose an Item</Typography>
         {productPhotos.length ? (
            <div className='home-product-list'>
               {products.map((product, index) => (
                  <ItemCard
                     key={index}
                     id={product.id}
                     category={product.category}
                     name={product.name}
                     price={product.default_price}
                     image={productPhotos[index].data.results[0].photos[0].url}
                  />
               ))}
            </div>
         ) : null}
      </div>
   );
};

export default Home;
