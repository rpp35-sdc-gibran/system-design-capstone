import React from 'react';
import Box from '@mui/material/Box';

const Image = ({ product, img, style }) => {
  return <Box style={style} component='img' src={img}></Box>;
};

export default Image;
