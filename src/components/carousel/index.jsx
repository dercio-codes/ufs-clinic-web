import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import { Box, Typography, Grid, Menu, Tooltip, Paper } from "@mui/material";

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
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: '/poster-1.png',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "contain",
              width: "100%",
              height: "70vh",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: '/poster-2.png',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "contain",
              width: "100%",
              height: "70vh",

            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: '/poster-3.png',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "contain",
              width: "100%",
              height: "70vh",

            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
