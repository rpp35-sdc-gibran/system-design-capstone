import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss';
import Typography from '@mui/material/Typography';
import HomeMainContent from './home-main-content/HomeMainContent.jsx';
import ProductCarousel from './home-product-carousel/ProductCarousel.jsx';

const Home = () => {
   const [products, setProducts] = useState([]);
   const [productPhotos, setProductPhotos] = useState([]);

   useEffect(() => {
      axios
         .get('/api/products')
         .then((products) => {
            console.log('products:', products);
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
   return (
      <div className='home-container'>
         <HomeMainContent />
         <Typography variant='h5'>Newest Products</Typography>
         <ProductCarousel products={products} productPhotos={productPhotos} />
      </div>
   );
};

export default Home;
