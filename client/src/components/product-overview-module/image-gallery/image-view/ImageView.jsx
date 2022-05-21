import React, { useState, useRef, useCallback, useEffect } from 'react';
import './ImageView.scss';
import ImageViewItem from '../image-view-item/ImageViewItem.jsx';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageViewThumbnails from '../image-view-thumbnails/ImageViewThumbnails.jsx';

const ImageView = ({ currentStylePhotos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isEnlargedView, setIsEnlargedView] = useState(false);
  const [isScaled, setIsScaled] = useState(false);

  //handles updating current slide on click next
  const goNext = () => {
    if (currentIndex < currentStylePhotos.length - 1) {
      let newIndex = currentIndex;
      setCurrentIndex(newIndex + 1);
    }
  };

  //handle setting enlarged scaled view mode
  const handleChildScale = () => {
    setIsScaled(!isScaled);
  };

  //handles updating current slide on click previous
  const goPrev = () => {
    if (currentIndex > 0) {
      let newIndex = currentIndex;
      setCurrentIndex(newIndex - 1);
    }
  };

  //handles click of main image to zoom, based on isZoomed state
  const handleChildZoom = () => {
    setIsEnlargedView(!isEnlargedView);
  };

  //updates current index so that main image matches the clicked thumbnail
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };
  console.log('currentStylePhotos:', currentStylePhotos);

  // let updatedStylePhotos;
  // if (currentStylePhotos.length > 7) {
  //   if (currentIndex + 6 <= currentStylePhotos.length) {
  //     updatedStylePhotos = currentStylePhotos.slice(
  //       currentIndex,
  //       currentIndex + 6
  //     );
  //   } else if (currentIndex - 6 >= 0) {
  //     updatedStylePhotos = currentStylePhotos.slice(
  //       currentIndex - 6,
  //       currentIndex
  //     );
  //   }
  // }

  return (
    <div className='image-view'>
      {!isScaled && (
        <div className='image-view-thumbnails'>
          <ImageViewThumbnails
            photos={currentStylePhotos}
            handleThumbnailClick={handleThumbnailClick}
            currentIndex={currentIndex}
            isEnlargedView={isEnlargedView}
          />
        </div>
      )}
      <div className='image-view-item'>
        <ImageViewItem
          image={currentStylePhotos[currentIndex].url}
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
            <IconButton data-testid='icon-prev' onClick={goPrev}>
              <ArrowBackIcon color='primary' fontSize='large' />
            </IconButton>
          )}
          {currentIndex !== currentStylePhotos.length - 1 && (
            <IconButton data-testid='icon-next' onClick={goNext}>
              <ArrowForwardIcon color='primary' fontSize='large' />
            </IconButton>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageView;
