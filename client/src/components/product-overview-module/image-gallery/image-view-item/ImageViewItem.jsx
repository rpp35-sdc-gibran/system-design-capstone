import React from 'react';
import Box from '@mui/material/Box';

const ImageViewItem = ({ image, mainImage, handleChildZoom }) => {
  //handles conditionally changing pointer to zoom if main image is hovered over and clicked
  const handleClick = () => {
    handleChildZoom();
  };
  return (
    <>
      {mainImage ? (
        <Box
          sx={{ cursor: 'zoom-in' }}
          component='img'
          src={image}
          onClick={handleClick}
        ></Box>
      ) : (
        <Box component='img' src={image}></Box>
      )}
    </>
  );
  // return <img src={img}></img>;
};

export default ImageViewItem;
