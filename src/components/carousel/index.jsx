import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Scrollbar } from 'swiper/modules';


export default function Carousel() {

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/poster-1.png" /></SwiperSlide>
        <SwiperSlide><img src="/poster-2.png" /></SwiperSlide>
        <SwiperSlide><img src="/poster-3.png" /></SwiperSlide>
      </Swiper>
    </>
  );
}