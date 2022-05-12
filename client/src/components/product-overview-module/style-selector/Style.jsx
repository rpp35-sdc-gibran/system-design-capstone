import React from 'react';

const Style = ({ style_id, image, handleStyleClick }) => {
  const handleClick = () => {
    console.log('CLICKED!!!!');
    handleStyleClick(style_id);
  };
  return (
    <div onClick={handleClick}>
      <img src={image}></img>
    </div>
  );
};

export default Style;
