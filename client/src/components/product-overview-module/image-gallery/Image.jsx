import React from 'react';
import Box from '@mui/material/Box';

const Image = ({ product, img, style }) => {
  // const imageStyle = {
  //   height: 'auto',
  //   width: '60vw',
  //   position: 'relative',
  //   // overflow: 'hidden',
  // };
  // return <Box style={imageStyle} component='img' src={img}></Box>;
  return <img src={img}></img>;
};

export default Image;
