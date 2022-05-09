import React, { useState, useEffect } from 'react';
import ImageGallery from './image-gallery/ImageGallery.jsx';
import ProductInformation from './product-information/ProductInformation.jsx';
import StyleSelector from './style-selector/StyleSelector.jsx';
import AddToCart from './add-to-cart/AddToCart.jsx';
import axios from 'axios';

const ProductOverview = () => {
  const [products, setProducts] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [styles, setStyles] = useState([]);

  //todo get product information for first product in product list

  //todo get product styles for first product in product list
  useEffect(() => {
    let promise = axios.get('/api/products');
    promise.then((products) => {
      setProducts(products.data);
      axios.get(`/api/products/${products.data[0].id}`).then((productData) => {
        console.log('productData:', productData);
        setProductInfo(productData);
      });
      axios
        .get(`/api/products/${products.data[0].id}/styles`)
        .then((productStyles) => {
          console.log('productStyles:', productStyles);

          setStyles(productStyles);
        });
      console.log('products:', products);
    });
    promise.catch((err) => {
      console.log('err:', err);
    });
  }, []);

  const imageData = [
    {
      image:
        'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      id: 0,
    },
    {
      image:
        'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      id: 1,
    },
    {
      image:
        'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      id: 2,
    },
    {
      image:
        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      id: 3,
    },
    {
      image:
        'https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2956&q=80',
      id: 4,
    },
  ];

  return (
    <div>
      <h1>this is product overview component</h1>
      <ImageGallery products={products} img={imageData} />
    </div>
  );
};

export default ProductOverview;
