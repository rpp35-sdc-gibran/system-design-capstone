import React, { useState, useEffect } from 'react';
import './Home.scss';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import ProductCard from './product-carousel/product-card/ProductCard.jsx';
import Typography from '@mui/material/Typography';
import HomeMainContent from './home-main-content/HomeMainContent.jsx';
import ProductCarousel from './product-carousel/ProductCarousel.jsx';

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
               setProductPhotos(allProducts);
            });
         })
         .catch((err) => {
            console.log('err in App.jsx:', err);
         });
   }, []);

   return (
      <div className='home-container'>
         <HomeMainContent />
         <ProductCarousel products={products} productPhotos={productPhotos} />
      </div>
   );
};

export default Home;
