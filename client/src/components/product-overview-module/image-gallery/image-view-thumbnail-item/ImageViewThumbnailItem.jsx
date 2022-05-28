import React from 'react';
import './imageViewThumbnailItem.scss';
import PendingIcon from '@mui/icons-material/Pending';
import DefaultImage from '../../../pages/home/product-carousel/product-card/Image-coming-soon.svg';

const ImageViewThumbnailItem = ({
   image,
   index,
   currentIndex,
   handleThumbnailClick,
   isEnlargedView,
}) => {
   const handleClick = () => {
      handleThumbnailClick(index);
   };

   let currentClass;
   if (index !== currentIndex) {
      currentClass = 'thumbnail-default';
   } else {
      currentClass = 'thumbnail-active';
   }

   return (
      <div
         className={currentClass}
         onClick={handleClick}
         data-testid={`thumbnail-img-${index}`}
      >
         {isEnlargedView ? (
            <PendingIcon color='primary' />
         ) : (
            <img
               className='thumbnail-img'
               alt='thumbnail image'
               src={image || DefaultImage}
            ></img>
         )}
      </div>
   );
};

export default ImageViewThumbnailItem;
