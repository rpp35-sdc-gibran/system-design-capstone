import React from 'react';
import './ImageViewThumbnails.scss';
import ImageViewThumbnailItem from '../image-view-thumbnail-item/ImageViewThumbnailItem.jsx';

const ImageViewThumbnails = ({
   photos,
   handleThumbnailClick,
   currentIndex,
   isEnlargedView,
}) => {
   return (
      <div data-testid='thumbnail-list' className='image-view-thumbnail-list'>
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
      </div>
   );
};

export default ImageViewThumbnails;
