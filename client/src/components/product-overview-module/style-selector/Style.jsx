import React from 'react';
import Box from '@mui/material/Box';

const Style = ({ style_id, image, handleStyleClick }) => {
  const handleClick = () => {
    handleStyleClick(style_id);
  };

  const imageStyle = {
    height: 'auto',
    width: '10em',
  };
  return (
    <Box style={imageStyle} cols={4} gap={10} onClick={handleClick}>
      <img src={image}></img>
    </Box>
  );
};

export default Style;
