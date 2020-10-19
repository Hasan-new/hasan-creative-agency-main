import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import first from '../../../images/carousel-1.png'
import second from '../../../images/carousel-2.png'
import third from '../../../images/carousel-3.png'
import fourth from '../../../images/carousel-4.png'

const Carousel = () => {
  return (
    <div style={{ backgroundColor: '#111430', height: '600px' }}>
      <h4 style={{ textAlign: 'center', color: 'white', paddingTop: '50px' }}>Here are some of <span style={{ color: '#7AB259' }}>our works</span> </h4>
      <Swiper
        spaceBetween={300}
        slidesPerView={3}
      >
        <SwiperSlide> <img src={first} style={{ width: '465.49px', margin: '50px' }} alt="" /> </SwiperSlide> <br />
        <SwiperSlide><img src={second} style={{ width: '465.49px', margin: '50px' }} alt="" /> </SwiperSlide> <br />
        <SwiperSlide><img src={third} style={{ width: '465.49px', height: '336px', margin: '50px' }} alt="" /> </SwiperSlide><br />
        <SwiperSlide> <img src={fourth} style={{ width: '465.49px', margin: '50px' }} alt="" /> </SwiperSlide><br />

      </Swiper>
    </div>

  );
};

export default Carousel;