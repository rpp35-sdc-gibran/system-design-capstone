import React, { useRef } from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Image from './Image.jsx';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageGallery = ({ products, img }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  console.log('products:', products);
  const slider = useRef();
  const previous = () => {
    slider.current.slickPrev();
  };
  const next = () => {
    slider.current.slickNext();
  };
  //style for main image
  const imageStyle = {
    height: 455,
    display: 'block',
    position: 'relative',
    maxWidth: 500,
    overflow: 'hidden',
    // width: '100%',
  };
  //style for thumbnails
  const thumbnailStyle = {
    height: 80,
    maxWidth: 100,
    overflow: 'hidden',
    width: '100%',
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {/* main image gallery */}
      <Slider ref={slider} {...settings}>
        {products.map((product) => (
          <Image
            style={imageStyle}
            key={product.id}
            id={product.id}
            img={img}
            product={product}
          />
        ))}
      </Slider>
      {/* thumbnail images */}
      <ImageList cols={1}>
        {products.map((product) => (
          <ImageListItem key={product.id}>
            <Image id={product.id} img={img} style={thumbnailStyle} />
          </ImageListItem>
        ))}
      </ImageList>
      {/* arrow buttons */}
      <IconButton onClick={previous}>
        <ArrowBackIcon />
      </IconButton>
      <IconButton onClick={next}>
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default ImageGallery;
