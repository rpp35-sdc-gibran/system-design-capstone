import React, { useState, useEffect } from 'react';
import './ProductOverview.scss';
import ImageView from './image-gallery/image-view/ImageView.jsx';
import ProductInformation from './product-information/ProductInformation.jsx';
import StyleSelector from './style-selector/style-select/StyleSelect.jsx';
import AddToCart from './add-to-cart/AddToCart.jsx';
import axios from 'axios';

const ProductOverview = ({ currentProductId }) => {
  const [productInfo, setProductInfo] = useState([]);
  const [isScaled, setIsScaled] = useState(false);
  const [styleList, setStyles] = useState();
  const [currentStyle, setCurrentStyle] = useState();
  const [reviews, setReviews] = useState(0);
  const [reviewList, setReviewList] = useState([]);
  const [isEnlargedView, setIsEnlargedView] = useState(false);

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

  const handleChildScale = () => {
    setIsScaled(!isScaled);
  };

  //handles click of main image to zoom, based on isEnlarged state
  const handleChildZoom = () => {
    setIsEnlargedView(!isEnlargedView);
  };

  // helper func to get average number of reviews
  const getAverageReviews = (arr) => {
    let sum = 0;
    arr.forEach((review) => {
      sum += review.rating;
    });
    return sum / arr.length;
  };

  //handles setting current style on click, updating images in image gallery
  const handleStyleClick = (style_id) => {
    styleList.results.forEach((style) => {
      if (style.style_id === style_id) {
        setCurrentStyle(style);
      }
    });
  };

  //?# test data to test crosses out price and thumbnail scrolling
  if (currentStyle) {
    currentStyle.sale_price = '120.00';
    let testImages1 = {
      thumbnail_url:
        'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    };
    let testImages2 = {
      thumbnail_url:
        'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80',
    };
    if (currentStyle.photos.length < 7) {
      currentStyle.photos.push(testImages1);
      currentStyle.photos.push(testImages2);
    }
  }
  //# end test data///////////////////////////////////

  return (
    <div className='product-overview'>
      {currentProductId && styleList ? (
        <>
          <div
            data-testid='product-overview-image'
            className='product-overview-image-view'
          >
            <ImageView
              currentStylePhotos={currentStyle.photos}
              handleChildScale={handleChildScale}
              isScaled={isScaled}
              isEnlargedView={isEnlargedView}
              setIsEnlargedView={setIsEnlargedView}
              handleChildZoom={handleChildZoom}
            />
          </div>
          {!isScaled && !isEnlargedView && (
            <div className='product-overview-info-style-container'>
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
                  sale_price={currentStyle.sale_price}
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
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default ProductOverview;
