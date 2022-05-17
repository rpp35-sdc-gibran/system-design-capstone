import React, { useState, useEffect } from 'react';
import './ProductOverview.scss';
import ImageView from './image-gallery/image-view/ImageView.jsx';
import ProductInformation from './product-information/ProductInformation.jsx';
import StyleSelector from './style-selector/style-select/StyleSelect.jsx';
import AddToCart from './add-to-cart/AddToCart.jsx';
import axios from 'axios';

const ProductOverview = ({ currentProductId }) => {
  const [productInfo, setProductInfo] = useState([]);
  const [styleList, setStyles] = useState();
  const [currentStyle, setCurrentStyle] = useState();
  const [reviews, setReviews] = useState(0);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    //gets product information for first product in product list
    axios.get(`/api/products/${currentProductId}`).then((productData) => {
      setProductInfo(productData.data);
    });
    //gets product styleList for first product in product list
    axios
      .get(`/api/products/${currentProductId}/styles`)
      .then((productStyles) => {
        setStyles(productStyles.data);
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

  //handles setting current style on click
  const handleStyleClick = (style_id) => {
    styleList.results.forEach((style) => {
      if (style.style_id === style_id) {
        setCurrentStyle(style);
      }
    });
  };

  return (
    <div className='product-overview'>
      {currentProductId && styleList ? (
        <>
          <div className='product-overview-image-view'>
            <ImageView currentStylePhotos={currentStyle.photos} />
          </div>
          <div className='product-overview-product-info'>
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
          </div>
          <div className='product-overview-style-selector'>
            <StyleSelector
              styleList={styleList}
              handleStyleClick={handleStyleClick}
              currentStyle={currentStyle}
            />
          </div>
          <div className='product-overview-add-to-cart'>
            <AddToCart currentStyle={currentStyle} />
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductOverview;
