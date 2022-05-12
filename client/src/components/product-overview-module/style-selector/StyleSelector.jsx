import React from 'react';
import Style from './Style.jsx';
import Box from '@mui/material/Box';

const StyleSelector = ({ styles, handleStyleClick }) => {
  //todo use styles.skus for dropdown menus
  //todo use styles.results[index].name when style is clicked
  const imageListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: 'auto',
  };
  return (
    <Box style={imageListStyle}>
      {styles.results.map((style, index) => (
        <Style
          style_id={style.style_id}
          key={index}
          image={style.photos[0].thumbnail_url}
          handleStyleClick={handleStyleClick}
        />
      ))}
    </Box>
  );
};

export default StyleSelector;
