import React, { useState } from 'react';
import './StyleSelectItem.scss';
import CheckIcon from '@mui/icons-material/Check';
import Avatar from '@mui/material/Avatar';
import DefaultImage from '../../../pages/home/product-card/Image-coming-soon.svg';

const Style = ({ style_id, image, handleStyleClick, currentStyle, index }) => {
   const [active, setActive] = useState(false);
   const handleClick = () => {
      handleStyleClick(style_id);
   };

   return (
      <div data-testid='style-select-item' onClick={handleClick}>
         {currentStyle.style_id === style_id ? (
            <>
               <Avatar
                  className='style-item-icon'
                  sx={{
                     height: '25px',
                     width: '25px',
                     position: 'absolute',
                     zIndex: '2',
                     bgcolor: '#1976D2',
                  }}
               >
                  <CheckIcon />
               </Avatar>
               <img
                  className='style-item-active-image'
                  alt='active thumbnail image'
                  src={image || DefaultImage}
               ></img>
            </>
         ) : (
            <img
               className='style-item-inactive-image'
               src={image || DefaultImage}
               alt='style image not found'
               data-testid={`style-img-${index}`}
            ></img>
         )}
      </div>
   );
};

export default Style;
