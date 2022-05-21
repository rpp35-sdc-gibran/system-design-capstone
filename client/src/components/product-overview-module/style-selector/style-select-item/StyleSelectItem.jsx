import React, { useState } from 'react';
import './StyleSelectItem.scss';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';

const Style = ({ style_id, image, handleStyleClick, currentStyle }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    handleStyleClick(style_id);
  };

  return (
    <Box data-testid='style-select-item' onClick={handleClick}>
      {currentStyle.style_id === style_id ? (
        <>
          <CheckIcon />
          <img className='style-item-active-image' src={image}></img>
        </>
      ) : (
        <img className='style-item-inactive-image' src={image}></img>
      )}
    </Box>
  );
};

export default Style;
