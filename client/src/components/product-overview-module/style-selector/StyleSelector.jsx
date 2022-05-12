import React from 'react';
import Style from './Style.jsx';

const StyleSelector = ({ styles, handleStyleClick }) => {
  //todo use styles.skus for dropdown menus
  //todo use styles.results[index].name when style is clicked
  return (
    <div>
      {styles.results.map((style, index) => (
        <Style
          style_id={style.style_id}
          key={index}
          image={style.photos[0].thumbnail_url}
          handleStyleClick={handleStyleClick}
        />
      ))}
    </div>
  );
};

export default StyleSelector;
