import React, { useState } from 'react';
import './ImageViewItem.scss';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ImageViewItem = ({
  image,
  currentIndex,
  handleChildZoom,
  isEnlargedView,
  handleChildScale,
  isScaled,
}) => {
  const [backgroundPosition, setBackgroundPosition] = useState({});
  const [imagePosition, setImagePosition] = useState({
    x: 0,
    y: 0,
  });
  const [initialImagePosition, setinitialImagePosition] = useState({
    x: 0,
    y: 0,
  });

  //handles changing className to go back to the default view
  const handleClick = () => {
    handleChildZoom();
  };

  //handles setting initial position values for image in enlarged-zoomed mode
  const handleTransformScaleView = (e) => {
    handleChildScale();
    setinitialImagePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  //change state to allow image background to move with mouse movement
  const handleMouseMove = (e) => {
    setImagePosition({
      x: e.clientX,
      y: e.clientY,
    });
    let topValue = initialImagePosition.y - imagePosition.y;
    let leftValue = initialImagePosition.x - imagePosition.x;
  };

  //style used to change position of image background
  const imageScaledContainerStyle = {
    top: `${initialImagePosition.y - imagePosition.y}px`,
    left: `${initialImagePosition.x - imagePosition.x}px`,
  };

  //enlarged image view
  if (isEnlargedView) {
    return (
      <>
        <input
          onMouseMove={handleMouseMove}
          type='checkbox'
          onClick={handleTransformScaleView}
        ></input>
        {/* scaled image view with inline style  */}
        {isScaled ? (
          <div style={imageScaledContainerStyle} className='enlarged'>
            <img alt='main image scaled view' src={image}></img>
          </div>
        ) : (
          <>
            <IconButton className='enlarged-view-btn' onClick={handleClick}>
              <CloseIcon color='primary' fontSize='large' />
            </IconButton>
            <div className='enlarged'>
              <img alt='main image enlarged view' src={image}></img>
            </div>
          </>
        )}
      </>
    );
  } else {
    //default image view
    return (
      <div className='default' onClick={handleClick}>
        <img
          alt='main image default view'
          style={{ top: -50, left: -70 }}
          src={image}
        ></img>
      </div>
    );
  }
};

export default ImageViewItem;
