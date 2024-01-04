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
        centeredSlides={false}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box data-aos="fade-right" data-aos-duration="2000">
            <Box
              sx={{
                backgroundImage: "url('/poster-1.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: { md: "250px", lg: "100%" },
                borderRadius: "32px",
                margin: "0",
                height: { xs: "50vh", lg: "70vh" },
              }}
            />
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box data-aos="fade-right" data-aos-duration="3000">
            <Box
              sx={{
                backgroundImage: "url('/poster-2.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: { md: "250px", lg: "100%" },
                borderRadius: "32px",
                margin: "0",
                height: { xs: "50vh", lg: "70vh" },
              }}
            />
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box data-aos="fade-right" data-aos-duration="4000">
            <Box
              sx={{
                backgroundImage: "url('/poster-3.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: { md: "250px", lg: "100%" },
                borderRadius: "32px",
                margin: "0",
                height: { xs: "50vh", lg: "70vh" },
              }}
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
