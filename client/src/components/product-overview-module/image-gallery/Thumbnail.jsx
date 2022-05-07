import React from 'react';
import Box from '@mui/material/Box';

const Thumbnail = ({ product, img, style }) => {
  // return <Box style={thumbnailStyle} component='img' src={img}></Box>;
  return <img src={img}></img>;
};

export default Thumbnail;
