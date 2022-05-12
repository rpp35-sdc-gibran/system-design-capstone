import React, { useState, useEffect } from 'react';
import ImageGallery from './image-gallery/ImageGallery.jsx';
import ProductInformation from './product-information/ProductInformation.jsx';
import StyleSelector from './style-selector/StyleSelector.jsx';
import AddToCart from './add-to-cart/AddToCart.jsx';
import axios from 'axios';

const ProductOverview = ({ currentProductId }) => {
  const [productInfo, setProductInfo] = useState([]);
  const [styles, setStyles] = useState();
  const [currentStyle, setCurrentStyle] = useState();
  const [reviews, setReviews] = useState(0);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    //gets product information for first product in product list
    axios.get(`/api/products/${currentProductId}`).then((productData) => {
      setProductInfo(productData.data);
    });
    //gets product styles for first product in product list
    axios
      .get(`/api/products/${currentProductId}/styles`)
      .then((productStyles) => {
        setStyles(productStyles.data);
        console.log('productStyles:', productStyles);
        setCurrentStyle(productStyles.data.results[0]);
      })
      .catch((err) => {
        console.log('err:', err);
      });
    //gets reviews for first product in product list
    axios
      .get(`/api/products/${currentProductId}/reviews`)
      .then((productReviews) => {
        let currentReviews = getAverageReviews(productReviews.data.results);
        setReviewList(productReviews.data.results);
        setReviews(currentReviews);
      })
      .catch((err) => {
        console.log('err:', err);
      });
  }, []);

  // helper func to get average number of reviews
  const getAverageReviews = (arr) => {
    let sum = 0;
    arr.forEach((review) => {
      sum += review.rating;
    });
    return sum / arr.length;
  };

  console.log('styles:', styles);
  console.log('productInfo:', productInfo);
  console.log('currentStyle:', currentStyle);
  //todo handles setting current style on click

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
      {styles && (
        <>
          <ImageGallery currentStyle={currentStyle} />
          <StyleSelector styles={styles} />
        </>
      )}
      <AddToCart />
    </div>
  );
};

export default ProductOverview;
