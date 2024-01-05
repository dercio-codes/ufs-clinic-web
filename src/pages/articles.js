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
      "Studying effectively is crucial for university students to excel academically. Here are 10 essential study tips that can help you make the most of your study sessions:\n\n1. Create a Study Schedule: Develop a study schedule that includes dedicated time for each subject and breaks to avoid burnout.\n\n2. Find Your Ideal Study Environment: Experiment with different study environments to identify the one where you can focus and retain information best.\n\n3. Take Effective Notes: Use abbreviations, diagrams, and highlight important points while taking notes to aid comprehension and revision.\n\n4. Break Down Complex Topics: If you come across a challenging topic, break it down into smaller, manageable parts to better understand and remember it.\n\n5. Use Active Learning Techniques: Engage in activities like group discussions, quizzes, and problem-solving to actively engage with the material and enhance retention.\n\n6. Practice Regularly: Regular practice, especially for subjects like math and science, is key to mastering concepts and improving problem-solving skills.\n\n7. Seek Clarification: Don't hesitate to ask your professors or classmates for clarification on topics you find confusing. It's crucial to have a clear understanding of the material.\n\n8. Take Breaks: Incorporate regular breaks into your study schedule to prevent mental fatigue and maintain focus.\n\n9. Stay Organized: Keep your study materials, notes, and assignments organized to save time and avoid unnecessary stress.\n\n10. Take Care of Yourself: In addition to studying, prioritize self-care by getting enough sleep, eating well, and engaging in physical activity. A healthy body and mind contribute to academic success.\n\nBy incorporating these study tips into your routine, you'll enhance your learning experience and achieve your academic goals.",
    image: "flu.jpg"
  },
  {
    title: "Navigating Life as a Freshman: A Guide for University Students",
    description:
      "Starting university can be an exciting yet challenging phase in a student's life. Here's a comprehensive guide to help freshmen navigate this new chapter:\n\n1. Make Connections: Attend orientation events and join clubs or organizations to meet fellow students and build a support network.\n\n2. Time Management: Develop effective time management skills to balance coursework, extracurricular activities, and personal commitments.\n\n3. Seek Academic Support: Familiarize yourself with academic resources such as tutoring services, study groups, and office hours to seek assistance when needed.\n\n4. Explore Campus Resources: Take advantage of campus facilities like libraries, computer labs, and fitness centers to enhance your university experience.\n\n5. Get Involved: Participate in campus activities, events, or student government to make the most of your university's social and learning opportunities.\n\n6. Take Care of Mental Health: Prioritize your mental well-being by practicing self-care activities and seeking professional support if needed.\n\n7. Embrace Diversity: University campuses are diverse, embracing different cultures, experiences, and perspectives. Respect and learn from others' unique backgrounds.\n\n8. Manage Finances: Familiarize yourself with budgeting, student discounts, and available financial aid options to effectively manage your finances.\n\n9. Develop Study Habits: Experiment with different study techniques and find the ones that work best for you. Consistent and effective studying will lead to academic success.\n\n10. Have Fun: University is also about enjoying life. Take breaks, explore your interests, and make lifelong memories.\n\nBy following these guidelines, you'll thrive as a freshman and make the most of your university experience.",
    image: "students-sitting.jpg"
  },
  {
    title: "10 Fun and Affordable Weekend Activities for University Students",
    description:
      "Weekends provide a great opportunity for university students to unwind, relax, and engage in enjoyable activities. Here are 10 fun and affordable weekend activities to consider:\n\n1. Explore Local Parks: Visit nearby parks, hiking trails, or botanical gardens for a refreshing and budget-friendly outdoor experience.\n\n2. Host a Movie Marathon: Organize a movie marathon with friends, where each person can contribute a film. Don't forget the popcorn!\n\n3. Volunteer in the Community: Give back to the community by volunteering at local charities, animal shelters, or environmental organizations.\n\n4. Organize a Game Night: Invite friends over for a game night filled with board games, card games, or video games for a fun and competitive evening.\n\n5. Cook a Meal Together: Take turns with your friends to cook a homemade meal and enjoy a cozy dinner at home.\n\n6. Visit Museums or Art Galleries: Many museums and art galleries offer discounted or free admission for students. Explore cultural exhibits and expand your knowledge.\n\n7. Have a Picnic: Pack a picnic basket with homemade sandwiches and snacks and enjoy a picnic in a nearby park. Don't forget a blanket!\n\n8. Explore Local Markets: Visit local farmers' markets or flea markets to discover unique crafts, fresh produce, and delicious treats.\n\n9. Attend Campus Events: Check out university-hosted events such as concerts, performances, or guest lectures. You'll get to enjoy entertainment right on campus.\n\n10. Start a Book Club: Gather a group of friends who are interested in reading and start a book club. Discuss literature and exchange book recommendations.\n\nThese activities provide a balance between relaxation, socialization, and affordable entertainment, making your weekends memorable without breaking the bank.",
    image: "about-us.jpg"
  }
];
