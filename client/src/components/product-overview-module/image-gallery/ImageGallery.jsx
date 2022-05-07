import React, { useState, useRef } from 'react';
import './image-gallery.css';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Image from './Image.jsx';
import Thumbnail from './Thumbnail.jsx';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageGallery = ({ products, img }) => {
  //use this instead of image data
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  console.log('products:', products);

  return (
    <>
      {/* main image gallery */}

      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        dots={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        lazyLoad={true}
        swipeToSlide={true}
        arrows={false}
      >
        {img.map((product) => (
          <Image
            key={product.id}
            id={product.id}
            img={product.image}
            product={product}
          />
        ))}
      </Slider>

      {/* thumbnail images */}
      <Slider
        ref={(slider2) => setNav2(slider2)}
        asNavFor={nav1}
        slidesToShow={3}
        centerMode={true}
        slidesToScroll={1}
        vertical={true}
        focusOnSelect={true}
        lazyLoad={true}
        swipeToSlide={true}
        centerPadding={10}
      >
        {img.map((product) => (
          <Thumbnail id={product.id} img={product.image} />
        ))}
      </Slider>
      {/* arrow buttons */}
    </>
  );
};

export default ImageGallery;
