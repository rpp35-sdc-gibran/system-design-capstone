import React from 'react';
import './ImageViewThumbnails.scss';
import ImageViewThumbnailItem from '../image-view-thumbnail-item/ImageViewThumbnailItem.jsx';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

const ImageViewThumbnails = ({
   photos,
   handleThumbnailClick,
   currentIndex,
   isEnlargedView,
   goNext,
   goPrev,
}) => {
   return (
      <div className='image-view-thumbnail-list' data-testid='thumbnail-list'>
         {currentIndex !== 0 && (
            <IconButton
               aria-label='go to previous thumbnail'
               onClick={() => goPrev()}
               className='arrow-up'
            >
               <ArrowBackIosIcon color='primary' />
            </IconButton>
         )}
         {photos.map((photo, index) => {
            if (currentIndex >= 5) {
               if (index > currentIndex - 5 && index <= currentIndex) {
                  return (
                     <ImageViewThumbnailItem
                        image={photo.thumbnail_url}
                        key={index}
                        index={index}
                        currentIndex={currentIndex}
                        handleThumbnailClick={handleThumbnailClick}
                        isEnlargedView={isEnlargedView}
                     />
                  );
               } else {
                  return null;
               }
            } else if (currentIndex < 5) {
               if (index < 5) {
                  return (
                     <ImageViewThumbnailItem
                        image={photo.thumbnail_url}
                        key={index}
                        index={index}
                        currentIndex={currentIndex}
                        handleThumbnailClick={handleThumbnailClick}
                        isEnlargedView={isEnlargedView}
                     />
                  );
               } else {
                  return null;
               }
            }
         })}
         {currentIndex !== photos.length - 1 && (
            <IconButton
               aria-label='go to next thumbnail'
               onClick={() => goNext()}
               className='arrow-down'
            >
               <ArrowBackIosIcon color='primary' />
            </IconButton>
         )}
      </div>
   );
};

export default ImageViewThumbnails;
