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
import { FreeMode, Navigation, Thumbs } from 'swiper';

const ImageGallery = ({ products, img }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentIndex, updateCurrentIndex] = useState(0);

  console.log('currentIndex:', currentIndex);
  //params for main image gallery
  // const params = {
  //   initialSlide: 0,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   loop: true,
  // };
  // //params for thumbnails
  // const params2 = {
  //   initialSlide: 0,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   direction: 'vertical',
  //   loop: true,
  //   spaceBetween: 10,
  //   navigation: true,
  //   thumbs: { swiper: thumbsSwiper },
  //   modules: [FreeMode, Navigation, Thumbs],
  //   className: 'mySwiper2',
  // };

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
    <Box display='flex'>
      {/* thumbnail images */}

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        // navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        className='mySwiper2'
        ref={swiperRef}
      >
        <SwiperSlide>
          {img.map((product) => (
            <Thumbnail id={product.id} img={product.image} />
          ))}
        </SwiperSlide>
      </Swiper>

      {/* main image gallery */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
        ref={swiperRef}
      >
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
