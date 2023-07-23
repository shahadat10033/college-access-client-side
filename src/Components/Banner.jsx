import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // This is the internal CSS of the package

const images = [
  'banner1.jpg',
  'banner2.jpg',
  'banner3.jpg',
  // Add more image URLs here
];

const Banner = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;