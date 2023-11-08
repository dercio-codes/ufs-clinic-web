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
              backgroundImage: "url('/poster-1.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
              width: "100%",
              borderRadius: "32px",
              height: "70vh",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: "url('/poster-2.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
              width: "100%",
              borderRadius: "32px",
              height: "70vh",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: "url('/poster-3.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
              width: "100%",
              borderRadius: "32px",

              height: "70vh",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
