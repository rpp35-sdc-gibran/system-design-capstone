import React from 'react';
import Box from '@mui/material/Box';

const Thumbnail = ({ product, img, style }) => {
  const thumbnailStyle = {
    height: 'auto',
    width: '12vw',
    overflow: 'hidden',
    position: 'relative',
  };
  return <Box style={thumbnailStyle} component='img' src={img}></Box>;
};

export default Thumbnail;
