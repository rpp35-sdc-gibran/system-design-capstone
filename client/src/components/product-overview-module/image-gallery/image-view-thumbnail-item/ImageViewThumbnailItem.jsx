import React from 'react';
import './imageViewThumbnailItem.scss';
const ImageViewThumbnailItem = ({
  image,
  index,
  currentIndex,
  handleThumbnailClick,
}) => {
  const handleClick = () => {
    handleThumbnailClick(index);
  };

  let currentClass;
  if (index !== currentIndex) {
    currentClass = 'thumbnail-default';
  } else {
    currentClass = 'thumbnail-active';
  }

  return (
    <div className={currentClass} onClick={handleClick}>
      <img src={image}></img>
    </div>
  );
};

export default ImageViewThumbnailItem;
