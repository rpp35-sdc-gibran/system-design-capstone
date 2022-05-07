import React from 'react';
import Box from '@mui/material/Box';

const Image = ({ product, img, style }) => {
  const imageStyle = {
    height: 'auto',
    width: '60vw',
    position: 'relative',
    // maxWidth: 500,
    // overflow: 'hidden',
    // width: '100%',
  };
  return <Box style={imageStyle} component='img' src={img}></Box>;
};

export default Image;
