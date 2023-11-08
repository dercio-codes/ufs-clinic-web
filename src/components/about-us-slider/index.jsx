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
        spaceBetween={50}
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
          <Card image={"/flu.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={"/students-sitting.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={"/about-us.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={"/flu.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={"/students-sitting.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={"/about-us.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={"/flu.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={"/students-sitting.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={"/about-us.jpg"} />
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
        width: "400px",
        height: "auto",
        margin: { xs: "0", lg: "0" },
      }}
    >
      <Box
        sx={{
          height: "350px",
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
              background: "#001842",
              color: "white",
              padding: "16px",
              margin: "21px",
              borderRadius: "32px",
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
