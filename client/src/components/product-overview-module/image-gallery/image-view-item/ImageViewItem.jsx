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

  //handles conditionally changing className to toggle view
  const handleClick = () => {
    handleChildZoom();
  };

  const handleTransformScaleView = () => {
    console.log('transformed!!!');
    setIsScaled(true);
  };
  const handleMouseMove = (e) => {
    console.log('e.clientX:', e.clientX);
    console.log('e.clienty:', e.clientY);
    //change state to equal current mouse positoin
    setImagePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const imageScaledContainerStyle = {
    top: `${imagePosition.x}px`,
    left: `${imagePosition.y}px`,
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
