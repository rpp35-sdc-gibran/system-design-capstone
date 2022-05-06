import React, { useState, useEffect } from 'react';
import ImageGallery from './image-gallery/ImageGallery.jsx';
import ProductInformation from './product-information/ProductInformation.jsx';
import StyleSelector from './style-selector/StyleSelector.jsx';
import AddToCart from './add-to-cart/AddToCart.jsx';
import StockImg from './image-gallery/img/stock.jpg';
import axios from 'axios';

const ProductOverview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let promise = axios.get('/api/products');
    promise.then((products) => {
      setProducts(products.data);
    });
    promise.catch((err) => {
      console.log('err:', err);
    });
  }, []);

  return (
    <div>
      <h1>this is product overview component</h1>
      <ImageGallery products={products} img={StockImg} />
    </div>
  );
};

export default ProductOverview;
