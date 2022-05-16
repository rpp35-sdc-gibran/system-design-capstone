import React, { useState } from 'react';
import './ImageViewItem.scss';

const ImageViewItem = ({
  image,
  currentIndex,
  handleChildZoom,
  isEnlargedView,
}) => {
  //handles conditionally changing className to switch views
  const handleClick = () => {
    handleChildZoom();
  };

  if (isEnlargedView) {
    return (
      <>
        <input type='checkbox'></input>
        <div className='enlarged'>
          <img src={image}></img>
        </div>
      </>
    );
  } else {
    return (
      <div className='default' onClick={handleClick}>
        <img src={image}></img>
      </div>
    );
  }
};

export default ImageViewItem;
