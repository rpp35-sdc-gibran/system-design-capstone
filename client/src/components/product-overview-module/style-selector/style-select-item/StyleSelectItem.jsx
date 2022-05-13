import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';

const Style = ({ style_id, image, handleStyleClick, currentStyle }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    handleStyleClick(style_id);
  };

  const imageStyle = {
    height: 'auto',
    width: '10em',
  };
  const activeStyle = {
    border: 'red',
  };
  const notactiveStyle = {
    border: 'blue',
  };

  return (
    <Box onClick={handleClick}>
      {currentStyle.style_id === style_id ? (
        <>
          <CheckIcon />
          <img style={activeStyle} src={image}></img>
        </>
      ) : (
        <img style={imageStyle} src={image}></img>
      )}
    </Box>
  );
};

export default Style;
