import React from 'react';
import './StyleSelect.scss';
import StyleSelectItem from '../style-select-item/StyleSelectItem.jsx';
import Typography from '@mui/material/Typography';

const StyleSelect = ({ styleList, handleStyleClick, currentStyle }) => {
  return (
    <>
      <Typography data-testid='styleContainer' variant='h3'>
        {currentStyle.name}
      </Typography>
      <div className='style-image-list'>
        {styleList.results.map((style, index) => (
          <StyleSelectItem
            style_id={style.style_id}
            key={index}
            image={style.photos[0].thumbnail_url}
            handleStyleClick={handleStyleClick}
            currentStyle={currentStyle}
            data-testid='style-select-item'
          />
        ))}
      </div>
    </>
  );
};

export default StyleSelect;
