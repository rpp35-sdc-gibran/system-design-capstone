import React, { useState } from 'react';
import './ImageViewItem.scss';

const ImageViewItem = ({
  image,
  currentIndex,
  handleChildZoom,
  currentView,
}) => {
  //handles conditionally changing pointer to zoom if main image is hovered over and clicked
  const handleClick = () => {
    handleChildZoom();
  };

  return (
    <div className={currentView ? 'enlarged' : 'default'} onClick={handleClick}>
      <img src={image}></img>
    </div>
  );
};

export default ImageViewItem;
