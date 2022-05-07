import React from 'react';
import Box from '@mui/material/Box';

const Image = ({ product, img, currentIndex, id }) => {
  return <Box component='img' src={img}></Box>;
  // return <img src={img}></img>;
};

export default Image;
