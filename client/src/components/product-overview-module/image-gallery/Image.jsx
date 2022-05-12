import React from 'react';
import Box from '@mui/material/Box';

const Image = ({ image }) => {
  return <Box component='img' src={image}></Box>;
  // return <img src={img}></img>;
};

export default Image;
