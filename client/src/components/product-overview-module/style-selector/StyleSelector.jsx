import React from 'react';
import Style from './Style.jsx';

const StyleSelector = ({ styles }) => {
  console.log('styles:', styles);
  //todo use styles.skus for dropdown menus
  //todo use styles.results[index].name when style is clicked
  return (
    <div>
      <h1>this is style selector component</h1>
      {styles.results.map((style) => (
        <Style
          productId={style.product_id}
          key={style.style_id}
          image={style.photos[0].thumbnail_url}
          style={style}
        />
      ))}
    </div>
  );
};

export default StyleSelector;
