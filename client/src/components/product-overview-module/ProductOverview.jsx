import React, { useState, useEffect } from 'react';
import './ProductOverview.scss';
import ImageView from './image-gallery/image-view/ImageView.jsx';
import ProductInformation from './product-information/ProductInformation.jsx';
import StyleSelector from './style-selector/style-select/StyleSelect.jsx';
import AddToCart from './add-to-cart/AddToCart.jsx';
import Nav from './navbar/Nav.jsx';
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
      axios
         .all([
            axios.get(`/api/products/${currentProductId}`),
            axios.get(`/api/products/${currentProductId}/styles`),
            axios.get(`/api/products/${currentProductId}/reviews`),
         ])
         .then(
            axios.spread(function (productData, productStyles, productReviews) {
               setProductInfo(productData.data);
               setStyles(productStyles.data);
               setCurrentStyle(productStyles.data.results[0]);
               let currentReviews = getAverageReviews(
                  productReviews.data.results
               );
               setReviewList(productReviews.data.results);
               setReviews(currentReviews);
            })
         )
         .catch((err) => {
            console.log('err:', err);
         });
   }, [currentProductId]);

   const handleChildScale = () => {
      setIsScaled(!isScaled);
   };

   //handles click of main image to zoom, based on isEnlarged state
   const handleChildZoom = () => {
      setIsEnlargedView(!isEnlargedView);
   };

   // helper func to get average number of reviews
   const getAverageReviews = (arr) => {
      console.log('arr:', arr);
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
   console.log('currentStyle.photos:', currentStyle);
   console.log('reviewList:', reviewList);
   console.log('productInfo:', productInfo);
   if (currentProductId) {
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
   } else {
      return null;
   }
};

export default ProductOverview;
