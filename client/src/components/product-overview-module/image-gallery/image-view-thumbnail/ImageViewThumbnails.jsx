import React from 'react';
import './ImageViewThumbnails.scss';
import ImageViewThumbnailItem from '../image-view-thumbnail-item/ImageViewThumbnailItem.jsx';

const ImageViewThumbnails = ({
  photos,
  handleThumbnailClick,
  currentIndex,
}) => {
  console.log('photos:', photos);
  return (
    <div className='image-view-thumbnail-list'>
      {photos.map((photo, index) => (
        <ImageViewThumbnailItem
          image={photo.thumbnail_url}
          key={index}
          index={index}
          currentIndex={currentIndex}
          handleThumbnailClick={handleThumbnailClick}
        />
      ))}
    </div>
  );
};

export default ImageViewThumbnails;
