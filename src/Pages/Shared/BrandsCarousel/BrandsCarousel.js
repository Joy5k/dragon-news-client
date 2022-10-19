import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../assets/brands/1.jpg';
import brand2 from '../../../assets/brands/2.jpg';

const BrandsCarousel = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={brand1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={brand2}
            alt="Second slide"
          />
        </Carousel.Item>
       
      </Carousel>
    );
};

export default BrandsCarousel;