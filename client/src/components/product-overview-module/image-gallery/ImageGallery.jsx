import React, { useState, useRef, useCallback, useEffect } from 'react';
import './image-gallery.css';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Image from './Image.jsx';
import Thumbnail from './Thumbnail.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

const ImageGallery = ({ products, img }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [currentIndex, updateCurrentIndex] = useState(0);
  console.log('currentIndex:', currentIndex);
  const params = {
    initialSlide: 3,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    loop: true,
  };
  const params2 = {
    initialSlide: 3,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    loop: true,
  };
  const swiperRef = useRef(null);
  // Manipulate swiper from outside
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
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
  // onSwiper={setThumbsSwiper}
  //     spaceBetween={10}
  //     slidesPerView={4}
  //     freeMode={true}
  //     watchSlidesProgress={true}
  //     modules={[FreeMode, Navigation, Thumbs]}
  //     className='mySwiper'

  //  style={{
  //     '--swiper-navigation-color': '#fff',
  //     '--swiper-pagination-color': '#fff',
  //   }}
  //   slidesPerView={1}
  //   navigation={true}
  //   thumbs={{ swiper: thumbsSwiper }}
  //   modules={[FreeMode, Navigation, Thumbs]}
  //   className='mySwiper2'
  return (
    <Box display='flex'>
      {/* main image gallery */}
      {/* thumbnail images */}
      <Swiper {...params} ref={swiperRef}>
        <SwiperSlide>
          {img.map((product) => (
            <Thumbnail id={product.id} img={product.image} />
          ))}
        </SwiperSlide>
      </Swiper>

      <Swiper {...params2} ref={swiperRef}>
        {img.map((product) => (
          <SwiperSlide>
            <Image
              key={product.id}
              id={product.id}
              img={product.image}
              product={product}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
