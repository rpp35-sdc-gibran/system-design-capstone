import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss';
import Typography from '@mui/material/Typography';
import HomeMainContent from './home-main-content/HomeMainContent.jsx';
import ProductCarousel from './home-product-carousel/ProductCarousel.jsx';
const url = 'http://localhost:8000'

const Home = () => {
   const [products, setProducts] = useState([]);
   const [productPhotos, setProductPhotos] = useState([]);

   useEffect(() => {
      axios
         .get(`${url}/products`)
         .then((products) => {
            console.log('what are products', products)
            setProducts(products.data);
            let promises = products.data.map((item) => {
               return axios.get(`${url}/products/${item.id}/styles`);
            });
            Promise.all(promises).then((allProducts) => {
               console.log(allProducts, 'what are all products')
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
         <div className='home-container-new-products'>
            <Typography variant='h5'>Newest Products</Typography>
            <ProductCarousel
               products={products}
               productPhotos={productPhotos}
            />
         </div>
      </div>
   );
};

export default Home;
