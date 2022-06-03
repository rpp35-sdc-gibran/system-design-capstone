import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './product-overview-module/navbar/Nav.jsx';
import Home from './pages/home/Home.jsx';
const Product = lazy(() => import('./pages/product/Product.jsx'));

const App = () => {
   return (
      <>
         <Nav />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route
               path='/:productId'
               element={
                  <Suspense fallback={<></>}>
                     <Product />
                  </Suspense>
               }
            />
         </Routes>
      </>
   );
};

export default App;
