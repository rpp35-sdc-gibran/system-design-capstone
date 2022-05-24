import React from 'react';
import './StyleSelect.scss';
import StyleSelectItem from '../style-select-item/StyleSelectItem.jsx';
import Typography from '@mui/material/Typography';

const StyleSelect = ({ styleList, handleStyleClick, currentStyle }) => {
  return (
    <div className='style-list'>
      <div className='style-list-title'>
        <Typography variant='h6'>STYLE > </Typography>
        <Typography data-testid='styleContainer' variant='subtitle1'>
          {currentStyle.name.toUpperCase()}
        </Typography>
      </div>
      <div className='style-list-images'>
        {styleList.results.map((style, index) => (
          <StyleSelectItem
            style_id={style.style_id}
            key={index}
            index={index}
            image={style.photos[0].thumbnail_url}
            handleStyleClick={handleStyleClick}
            currentStyle={currentStyle}
            data-testid='style-select-item'
          />
        ))}
      </div>
    </div>
  );
};

export default StyleSelect;
