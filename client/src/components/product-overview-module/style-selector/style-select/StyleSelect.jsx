import React from 'react';
import StyleSelectItem from '../style-select-item/StyleSelectItem.jsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const StyleSelect = ({ styles, handleStyleClick, currentStyle }) => {
  const imageListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: 'auto',
  };
  return (
    <>
      <Typography variant='h3'>{currentStyle.name}</Typography>
      <Box style={imageListStyle}>
        {styles.results.map((style, index) => (
          <StyleSelectItem
            style_id={style.style_id}
            key={index}
            image={style.photos[0].thumbnail_url}
            handleStyleClick={handleStyleClick}
            currentStyle={currentStyle}
            test-id='style-select-item'
          />
        ))}
      </Box>
    </>
  );
};

export default StyleSelect;
