import React, { useState, useEffect } from 'react';
import './ProductOverview.scss';
import ImageView from './image-gallery/image-view/ImageView.jsx';
import ProductInformation from './product-information/ProductInformation.jsx';
import StyleSelector from './style-selector/style-select/StyleSelect.jsx';
//import AddToCart from './add-to-cart/AddToCart.jsx';
import CheckIcon from '@mui/icons-material/Check';
import Nav from './navbar/Nav.jsx';
import axios from 'axios';
import Typography from '@mui/material/Typography';

const ProductOverview = ({ currentProductId }) => {
   const [productInfo, setProductInfo] = useState([]);
   const [isScaled, setIsScaled] = useState(false);
   const [styleList, setStyles] = useState();
   const [currentStyle, setCurrentStyle] = useState();
   const [reviews, setReviews] = useState(0);
   const [reviewList, setReviewList] = useState([]);
   const [isEnlargedView, setIsEnlargedView] = useState(false);
   const url = "http://localhost:8000"

   useEffect(() => {
      axios
         .all([
            axios.get(`${url}/products/${currentProductId}`),
            axios.get(`${url}/products/${currentProductId}/styles`),
           // axios.get(`${__API__}/products/${currentProductId}/reviews`),
         ])
         .then(
            axios.spread(function (productData, productStyles, productReviews) {
               console.log('product info', productData.data, 'productStyles', productStyles.data)
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

   if (currentProductId) {
      return (
         <div className='product-overview'>
            {styleList ? (
               <>
                  <div
                     data-testid='product-overview-image'
                     className='product-overview-image-view'
                  >
                     <ImageView
                        currentStylePhotos={currentStyle.photos ? currentStyle.photos : []}
                        handleChildScale={handleChildScale}
                        isScaled={isScaled}
                        isEnlargedView={isEnlargedView}
                        setIsEnlargedView={setIsEnlargedView}
                        handleChildZoom={handleChildZoom}
                     />
                  </div>
                  {!isScaled && !isEnlargedView && (
                     <>
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
                           {/* <div className='product-overview-add-to-cart'>
                              <AddToCart currentStyle={currentStyle} />
                           </div> */}
                        </div>
                        <div className='product-overview-slogan-features'>
                           <div className='product-overview-slogan'>
                              <Typography variant='h6'>
                                 {productInfo.slogan}
                              </Typography>
                              <Typography variant='body1'>
                                 {productInfo.description}
                              </Typography>
                           </div>
                           <div className='product-overview-features'>
                              {productInfo.features.map((feature, index) => (
                                 <div
                                    className='product-overview-feature-item'
                                    key={index}
                                 >
                                    <CheckIcon />
                                    <Typography variant='body1'>
                                       {feature.value} {feature.feature}
                                    </Typography>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </>
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
