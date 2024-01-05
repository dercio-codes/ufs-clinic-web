import { useRouter } from "next/router";
// import categoriesData from "./../../config/categories.json";
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Menu,
  Tooltip,
  Paper,
  Boxider
} from "@mui/material";
import { Card } from "./../components/about-us-slider";
import { Navbar } from "./../components/main";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
import Link from "next/link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Articles = () => {
  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <Box sx={{ width: "90%", background: "", margin: "0 auto" }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          height: { xs: "30vh", lg: "50vh" },
          padding: "30px",
          backgroundImage: "url('/qwaqwa-banner.jpg')",
          backgroundSize: { xs: "cover", lg: "cover" },
          backgroundPosition: "left center"
        }}
      />
      <Box sx={{ width: "90%", margin: " 32px auto" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/articles">
            <Typography
              color="text.primary"
              sx={{ fontWeight: "600", color: "#111" }}
            >
              Articles
            </Typography>
          </Link>
        </Breadcrumbs>
        <Typography
          sx={{
            fontSize: "42px",
            width: "100%",
            fontWeight: "600",
            textAlign: "left",
            margin: "32px auto"
          }}
        >
          Additional Blog Posts
        </Typography>
        <Grid container>
          {blogPosts.map((post, index) => {
            return (
              <Grid key={index} item xs={6} lg={4} sx={{ padding: "12px" }}>
                <Link
                  href={`/blog/${post.title
                    .replaceAll(" ", "-")
                    .toLowerCase()}`}
                  as={`/blog/${post.title.replaceAll(" ", "-").toLowerCase()}`}
                >
                  <Card
                    title={post.title}
                    description={post.description}
                    image={post.image}
                  />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Articles;
const blogPosts = [
  {
    title: "10 Essential Study Tips for University Students",
    description:
      "Discover the top study tips to help you succeed in university. From effective time management to active learning techniques, these strategies will boost your productivity and academic performance.",
    image: "/flu.jpg"
  },
  {
    title: "Navigating Life as a Freshman: A Guide for University Students",
    description:
      "Transitioning to university can be overwhelming. This comprehensive guide offers advice on making friends, managing your workload, and getting involved in campus activities. Start your university journey on the right foot!",
    image: "/students-sitting.jpg"
  },
  {
    title: "10 Fun and Affordable Weekend Activities for University Students",
    description:
      "Looking for ways to unwind and make the most of your weekends while on a tight budget? Check out these affordable and enjoyable activities that will help you relax, explore your interests, and connect with friends.",
    image: "/about-us.jpg"
  },
  {
    id: 1,
    title: "Tips for Effective Time Management in University",
    description:
      "In this article, we explore valuable tips and techniques for managing your time effectively as a university student. From creating a schedule to prioritizing tasks, these strategies will help you stay organized and maximize your productivity. Whether you are juggling classes, extracurricular activities, or part-time jobs, developing good time management skills is essential for success in your university journey. Discover practical advice and actionable steps to make the most of your time and achieve your academic goals.",
    image: "/sky.jpg"
  },
  {
    id: 2,
    title:
      "Navigating Internship Opportunities: A Guide for University Students",
    description:
      "Are you interested in gaining hands-on experience through internships? This comprehensive guide provides university students with valuable insights and tips on finding and securing internship opportunities. From researching companies to preparing application materials, we cover all the essential steps to help you kickstart your career. We also delve into the benefits of internships, such as building a professional network and enhancing your resume. Whether you are a freshman or senior, this guide will equip you with the knowledge and resources to make the most of internship opportunities.",
    image: "/young-woman-in-consultations.png"
  },
  {
    id: 3,
    title: "Building Healthy Relationships in University: Tips for Students",
    description:
      "Establishing meaningful connections and building a supportive community is an integral part of the university experience. In this article, we provide practical tips and advice on cultivating healthy relationships with peers, professors, and mentors. From joining student organizations to participating in networking events, we explore various opportunities for connecting with others who share similar interests and goals. Discover the benefits of building a strong support system during your university journey and learn strategies for maintaining positive relationships that can enrich your personal and academic life.",
    image: "Health-Sciences-Banner.jpg"
  }
];
