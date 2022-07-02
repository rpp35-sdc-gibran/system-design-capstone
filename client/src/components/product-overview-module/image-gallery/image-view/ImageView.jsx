import React, { useState, useRef, useCallback, useEffect } from 'react';
import './ImageView.scss';
import ImageViewItem from '../image-view-item/ImageViewItem.jsx';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageViewThumbnails from '../image-view-thumbnails/ImageViewThumbnails.jsx';

import FitScreenIcon from '@mui/icons-material/FitScreen';

const ImageView = ({
   currentStylePhotos,
   handleChildScale,
   isScaled,
   isEnlargedView,
   setIsEnlargedView,
   handleChildZoom,
}) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   //handles updating current slide on click next
   const goNext = () => {
      if (currentIndex < currentStylePhotos.length - 1) {
         let newIndex = currentIndex;
         setCurrentIndex(newIndex + 1);
      }
   };

   //handles updating current slide on click previous
   const goPrev = () => {
      if (currentIndex > 0) {
         let newIndex = currentIndex;
         setCurrentIndex(newIndex - 1);
      }
   };

   //updates current index so that main image matches the clicked thumbnail
   const handleThumbnailClick = (index) => {
      setCurrentIndex(index);
   };

   return (
      <div className='image-view'>
         {!isScaled && (
            <div className='image-view-thumbnails'>
               <ImageViewThumbnails
                  photos={currentStylePhotos}
                  handleThumbnailClick={handleThumbnailClick}
                  currentIndex={currentIndex}
                  isEnlargedView={isEnlargedView}
                  goNext={goNext}
                  goPrev={goPrev}
               />
            </div>
         )}
         <div className='image-view-item'>
            <ImageViewItem
               image={currentStylePhotos.length > 0 ? currentStylePhotos[currentIndex].url : []}
               handleChildZoom={handleChildZoom}
               currentIndex={currentIndex}
               isEnlargedView={isEnlargedView}
               handleChildScale={handleChildScale}
               isScaled={isScaled}
            />
         </div>
         {!isScaled && (
            <div className='image-view-buttons'>
               {currentIndex !== 0 && (
                  <IconButton
                     className='button-prev'
                     data-testid='icon-prev'
                     onClick={goPrev}
                     aria-label='previous image'
                  >
                     <Avatar>
                        <ArrowBackIcon color='primary' fontSize='large' />
                     </Avatar>
                  </IconButton>
               )}
               {currentIndex !== currentStylePhotos.length - 1 && (
                  <IconButton
                     className='button-next'
                     data-testid='icon-next'
                     onClick={goNext}
                     aria-label='next image'
                  >
                     <Avatar>
                        <ArrowForwardIcon color='primary' fontSize='large' />
                     </Avatar>
                  </IconButton>
               )}
            </div>
         )}
      </div>
   );
};

export default ImageView;
