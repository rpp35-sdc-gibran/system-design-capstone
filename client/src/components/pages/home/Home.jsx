import React, { useState, useEffect } from 'react';
import './Home.scss';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import ProductCard from './product-card/ProductCard.jsx';
import Typography from '@mui/material/Typography';

const Home = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      axios
         .get('/api/products')
         .then((products) => {
            setProducts(products.data);
         })

         .catch((err) => {
            console.log('err in App.jsx:', err);
         });
   }, []);

   return (
      <div>
         <Typography variant='h3'>Choose an Item</Typography>
         <div className='home-product-list'>
            {products.map((product, index) => (
               <ProductCard
                  key={index}
                  id={product.id}
                  category={product.category}
                  name={product.name}
                  price={product.default_price}
               />
            ))}
         </div>
      </div>
   );
};

export default Home;
