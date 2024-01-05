import React, { useRef, useState, useEffect } from "react";
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

import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function AboutUsSlider() {
  return (
    <Box sx={{ margin: "0 auto" }}>
      {/* <Swiper
        // centeredSlides={true}
        // slidesPerView={1}
        grabCursor={true}
        // freeMode={false}
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
          <Box data-aos="flip-right" data-aos-duration="2000">
            <Card image={"/flu.jpg"} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-delay="250"
          >
            <Card image={"/students-sitting.jpg"} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-delay="600"
          >
            <Card image={"/about-us.jpg"} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box data-aos="flip-right" data-aos-duration="2000">
            <Card image={"/flu.jpg"} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box data-aos="flip-right" data-aos-duration="2000">
            <Card image={"/students-sitting.jpg"} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box data-aos="flip-right" data-aos-duration="2000">
            <Card image={"/about-us.jpg"} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box data-aos="flip-right" data-aos-duration="2000">
            <Card image={"/flu.jpg"} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box data-aos="flip-right" data-aos-duration="2000">
            <Card image={"/students-sitting.jpg"} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box data-aos="flip-right" data-aos-duration="2000">
            <Card image={"/about-us.jpg"} />
          </Box>
        </SwiperSlide>
      </Swiper> */}

      <ReponsiveSwiper />
    </Box>
  );
}

function ReponsiveSwiper() {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:900px)");

  return (
    <>
      <Swiper
        pagination={true}
        slidesPerView={matches ? 1 : 2}
        centeredSlides={matches}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="aboutSwiper"
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <Link
              style={{ width: "fit-content" }}
              href={`/blog/${post.title.replaceAll(" ", "-").toLowerCase()}`}
              as={`/blog/${post.title.replaceAll(" ", "-").toLowerCase()}`}
            >
              <Card
                title={post.title}
                description={post.description}
                image={post.image}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export const Card = ({ image, title, description }) => {
  return (
    <Paper
      elevation={5}
      sx={{
        border: "1px solid rgba(1,1,1,.1)",
        borderRadius: "21px",
        width: { xs: "320px", lg: "350px" },
        height: "400px",
        margin: { xs: "32px auto" },
        borderRadius: "21px 21px 0 0",
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        transition: "800ms",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "21px 21px 0 0",
          // background: "rgba(1,1,1,.7)",
          background:
            "linear-gradient(to top, rgba(1, 1, 1, 0.70) 50%, rgba(1,1,1,0.1) 100%)",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          padding: "12px",
          "&:hover": {
            transition: "800ms",
            background:
              "linear-gradient(to top, rgba(1, 1, 1, 0.80) 50%, rgba(1,1,1,0.1) 100%)",
          },
        }}
      >
        {/* <Box
          sx={{
            height: "170px",
            padding: "0",
            // borderRadius: "21px 21px 0 0",
            // backgroundImage: `url('${image}')`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
          }}
        /> */}

        <Box sx={{ p: "21px 12px", color: "white" }}>
          <Typography
            sx={{
              fontSize: "21px",
              margin: "12px 0",
              fontWeight: "600",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              margin: "12px 0",
              fontWeight: "300",
              textAlign: "left",
              height: "50px",
              width: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textWrap: "wrap",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>

          <Box sx={{ display: "none", justifyContent: "flex-end" }}>
            <Button
              sx={{
                scale: "0.9",
                color: "white",
                padding: "16px 32px",
                margin: "21px 0",
                borderRadius: "32px",
                background: "#001842",
                "&:hover": {
                  color: "#001842",
                },
              }}
            >
              {" "}
              READ MORE{" "}
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

const blogPosts = [
  {
    title: "10 Essential Study Tips for University Students",
    description:
      "Discover the top study tips to help you succeed in university. From effective time management to active learning techniques, these strategies will boost your productivity and academic performance.",
    image: "/flu.jpg",
  },
  {
    title: "Navigating Life as a Freshman: A Guide for University Students",
    description:
      "Transitioning to university can be overwhelming. This comprehensive guide offers advice on making friends, managing your workload, and getting involved in campus activities. Start your university journey on the right foot!",
    image: "/students-sitting.jpg",
  },
  {
    title: "10 Fun and Affordable Weekend Activities for University Students",
    description:
      "Looking for ways to unwind and make the most of your weekends while on a tight budget? Check out these affordable and enjoyable activities that will help you relax, explore your interests, and connect with friends.",
    image: "/about-us.jpg",
  },
];
