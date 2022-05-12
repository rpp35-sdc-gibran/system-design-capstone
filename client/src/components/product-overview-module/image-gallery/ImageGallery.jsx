import React, { useState, useRef, useCallback, useEffect } from 'react';
import './image-gallery.css';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Image from './Image.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FreeMode, Navigation, Thumbs } from 'swiper';

const ImageGallery = ({ currentStyle }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentIndex, updateCurrentIndex] = useState(0);

  const swiperRef = useRef(null);

  //handles updating current slide on click next
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  //handles updating current slide on click previous
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  //handles updating index with real index after clicks
  const updateIndex = useCallback(
    () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
    []
  );

  // Add eventlisteners for swiper after initializing
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      swiperInstance.on('slideChange', updateIndex);
    }
    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', updateIndex);
      }
    };
  }, [updateIndex]);
  return (
    <Box display='flex' sx={{ gap: '5px', width: '60rem', height: '40rem' }}>
      {/* thumbnail images */}
      <Swiper
        onSwiper={setThumbsSwiper}
        // loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
        ref={swiperRef}
        direction={'vertical'}
      >
        {currentStyle.photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <Image image={photo.thumbnail_url} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* main image gallery */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        // loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        // onSwiper={setThumbsSwiper}
        // freeMode={true}
        className='mySwiper2'
        ref={swiperRef}
      >
        {currentStyle.photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <Image image={photo.url} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* icon buttons */}
      <IconButton onClick={goPrev}>
        <ArrowBackIcon />
      </IconButton>
      <IconButton onClick={goNext}>
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default ImageGallery;
