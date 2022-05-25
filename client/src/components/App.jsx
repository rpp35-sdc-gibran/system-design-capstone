import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './product-overview-module/navbar/Nav.jsx';
import Home from './pages/home/Home.jsx';
import Product from './pages/product/Product.jsx';

const App = () => {
   return (
      <>
         <Nav />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:productId' element={<Product />} />
         </Routes>
      </>
   );
};

export default App;
