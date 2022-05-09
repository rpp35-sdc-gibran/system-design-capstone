import React from 'react';

const Style = ({ productId, image, style }) => {
  console.log('image:', image);
  return (
    <div>
      <h1>this is stylecomponent</h1>
      <img src={image}></img>
    </div>
  );
};

export default Style;
