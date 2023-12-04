import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Box,
  Typography,
  Grid,
  Menu,
  Button,
  Tooltip,
  Paper,
} from "@mui/material";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function AboutUsSlider() {
  return (
    <Box sx={{ margin: "0 auto" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={500}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: "100%",
          height: "auto",
          padding: "0 100px 100px 100px",
        }}
      >
        <SwiperSlide>
            <Box data-aos="flip-right" data-aos-duration="2000" >
         
          <Card image={"/flu.jpg"} />
        </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box data-aos="flip-right" data-aos-duration="2000" data-aos-delay="250" >
         
          <Card image={"/students-sitting.jpg"} />
        </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box data-aos="flip-right" data-aos-duration="2000" data-aos-delay="600" >
         
          <Card image={"/about-us.jpg"} />
        </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box data-aos="flip-right" data-aos-duration="2000" >
         
          <Card image={"/flu.jpg"} />
        </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box data-aos="flip-right" data-aos-duration="2000" >
         
          <Card image={"/students-sitting.jpg"} />
        </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box data-aos="flip-right" data-aos-duration="2000" >
         
          <Card image={"/about-us.jpg"} />
        </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box data-aos="flip-right" data-aos-duration="2000" >
         
          <Card image={"/flu.jpg"} />
        </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box data-aos="flip-right" data-aos-duration="2000" >
         
          <Card image={"/students-sitting.jpg"} />
        </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box data-aos="flip-right" data-aos-duration="2000" >
         
          <Card image={"/about-us.jpg"} />
        </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

const Card = ({ image }) => {
  return (
    <Paper
      elevation={5}
      sx={{
        border: "1px solid rgba(1,1,1,.1)",
        width: "350px",
        height: "auto",
        margin: { xs: "0", lg: "0" },
      }}
    >
      <Box
        sx={{
          height: "250px",
          padding: "0",
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Box sx={{ p: "0px 12px" }}>
        <Typography
          sx={{
            fontSize: "21px",
            margin: "12px 0",
            fontWeight: "600",
            textAlign: "left",
          }}
        >
          How To Deal With GBV?{" "}
        </Typography>
        <ul style={{ textAlign: "left", padding: "0 21px" }}>
          <li>Champainging Gender Equality</li>
          <li>Womens Rights Advocacy</li>
          <li>Education and Womens Empowerment</li>
        </ul>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{
              scale: "0.9",
              color: "white",
              padding: "16px 32px",
              margin: "21px 0",
              borderRadius: "32px",
              background: "#001842",
              "&:hover":{
                color: "#001842",
              }
            }}
          >
            {" "}
            READ MORE{" "}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
