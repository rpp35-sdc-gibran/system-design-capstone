import React, { useState } from 'react';
import './ImageViewItem.scss';

const ImageViewItem = ({
  image,
  currentIndex,
  handleChildZoom,
  isEnlargedView,
}) => {
  const [backgroundPosition, setBackgroundPosition] = useState({});
  const [isScaled, setIsScaled] = useState(false);
  const [imagePosition, setImagePosition] = useState({
    x: 0,
    y: 0,
  });
  const [initialImagePosition, setinitialImagePosition] = useState({
    x: 0,
    y: 0,
  });

  //handles conditionally changing className to toggle view
  const handleClick = () => {
    handleChildZoom();
  };

  //handles setting initial position values for image in enlarged-zoomed mode
  const handleTransformScaleView = (e) => {
    setIsScaled(true);
    setinitialImagePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const handleMouseMove = (e) => {
    console.log('initialImagePosition.x:', initialImagePosition);
    // console.log('e.clienty:', e.clientY);
    //change state to equal current mouse positoin

    setImagePosition({
      x: e.clientX,
      y: e.clientY,
    });
    let topValue = initialImagePosition.y - imagePosition.y;
    let leftValue = initialImagePosition.x - imagePosition.x;
    console.log('topValue:', topValue);
    console.log('leftValue:', leftValue);
  };

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
            <img src={image}></img>
          </div>
        ) : (
          <div className='enlarged'>
            <img src={image}></img>
          </div>
        )}
      </>
    );
  } else {
    //default image view
    return (
      <div className='default' onClick={handleClick}>
        <img style={{ top: -50, left: -70 }} src={image}></img>
      </div>
    );
  }
};

export default ImageViewItem;
