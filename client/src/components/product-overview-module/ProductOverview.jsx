import React, { useState, useEffect } from 'react';
import ImageGallery from './image-gallery/ImageGallery.jsx';
import ProductInformation from './product-information/ProductInformation.jsx';
import StyleSelector from './style-selector/StyleSelector.jsx';
import AddToCart from './add-to-cart/AddToCart.jsx';
import axios from 'axios';

const ProductOverview = () => {
  const [products, setProducts] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [styles, setStyles] = useState();
  const [reviews, setReviews] = useState(0);
  const [reviewList, setReviewList] = useState([]);

  //gets all product data and styles at initial
  useEffect(() => {
    let promise = axios.get('/api/products');
    promise.then((products) => {
      setProducts(products.data);
      //gets product information for first product in product list
      axios.get(`/api/products/${products.data[0].id}`).then((productData) => {
        setProductInfo(productData.data);
      });
      //gets product styles for first product in product list
      axios
        .get(`/api/products/${products.data[0].id}/styles`)
        .then((productStyles) => {
          console.log('productStyles:', productStyles);
          setStyles(productStyles.data);
        });
      //gets reviews for first product in product list
      axios
        .get(`/api/products/${products.data[0].id}/reviews`)
        .then((productReviews) => {
          let currentReviews = getAverageReviews(productReviews.data.results);
          setReviewList(productReviews.data.results);
          setReviews(currentReviews);
        });
    });
    promise.catch((err) => {
      console.log('err:', err);
    });
  }, []);

  console.log('products:', products);
  // console.log('reviewList:', JSON.stringify(reviewList, null, 4));
  console.log('productInfo:', productInfo);

  // helper func to get average number of reviews
  const getAverageReviews = (arr) => {
    let sum = 0;
    arr.forEach((review) => {
      sum += review.rating;
    });
    return sum / arr.length;
  };

  return (
    <div>
      <h1>this is product overview component</h1>
      <ProductInformation
        rating={reviews}
        reviewLength={reviewList.length}
        category={productInfo.category}
        default_price={productInfo.default_price}
        description={productInfo.description}
        features={productInfo.features}
        name={productInfo.name}
        slogan={productInfo.slogan}
      />
      {/* {styles.length && <ImageGallery products={products} img={styles} />} */}
      {styles && <StyleSelector styles={styles} />}
      <AddToCart />
    </div>
  );
};

export default ProductOverview;
