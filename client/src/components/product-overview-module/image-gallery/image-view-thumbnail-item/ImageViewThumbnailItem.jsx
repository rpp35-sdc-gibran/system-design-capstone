import React from 'react';
import './imageViewThumbnailItem.scss';
import PendingIcon from '@mui/icons-material/Pending';
const ImageViewThumbnailItem = ({
  image,
  index,
  currentIndex,
  handleThumbnailClick,
  isEnlargedView,
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
      {isEnlargedView ? (
        <PendingIcon color='primary' />
      ) : (
        <img src={image}></img>
      )}
    </div>
  );
};

export default ImageViewThumbnailItem;
