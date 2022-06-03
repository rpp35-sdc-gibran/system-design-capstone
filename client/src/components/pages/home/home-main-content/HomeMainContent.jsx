import React from 'react';
import './HomeMainContent.scss';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MainContentImage from './main-content-svg/MainContentImage.jsx';

const HomeMainContent = () => {
   return (
      <div className='home-main-content'>
         <div className='home-main-content-left'>
            <Typography variant='h3'>Ecommerce</Typography>
            <Typography variant='subtitle1'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
               phasellus egestas tellus rutrum. Pellentesque habitant morbi
               tristique senectus et netus et malesuada. Phasellus faucibus
               scelerisque eleifend donec.
            </Typography>
            <Button
               className='main-content-button'
               color='secondary'
               variant='contained'
            >
               Signup
            </Button>
         </div>
         <div className='home-main-content-right'>
            <MainContentImage />
         </div>
      </div>
   );
};

export default HomeMainContent;
