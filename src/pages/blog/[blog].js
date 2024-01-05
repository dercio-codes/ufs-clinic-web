import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Menu,
  Tooltip,
  Paper,
  Boxider,
} from "@mui/material";
import { Navbar } from "./../../components/main";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import AboutUsSlider from "./../../components/about-us-slider";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const CategoryPage = () => {
  const router = useRouter();
  const { blog } = router.query;
  // Find the category object based on the category parameter
  const currentBlogPost = blogPosts.find(
    (cat) =>
      cat.title.replaceAll(" ", "-").toLowerCase() ===
      blog.replaceAll(" ", "-").toLowerCase(),
  );
  console.log(currentBlogPost);

  if (!currentBlogPost) {
    return <Box>Category not found</Box>;
  }

  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <Box sx={{ width: "90%", background: "", margin: "0 auto" }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          height: { xs: "30vh", lg: "50vh" },
          padding: "30px",
          backgroundImage: `url("/${currentBlogPost.image}")`,
          backgroundSize: { xs: "cover", lg: "cover" },
          backgroundPosition: "left center",
        }}
      />

      <Box sx={{ width: "90%", background: "", margin: "0 auto" }}>
        <Box
          sx={{
            width: "90%",
            background: "",
            margin: "32px 0",
            color: currentBlogPost.color,
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/articles">
              Articles
            </Link>
            <Typography
              color="text.primary"
              sx={{ fontWeight: "600", color: "#111" }}
            >
              {currentBlogPost.title}
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box data-aos="fade-bottom" data-aos-duration={"5000"}>
          <Box
            sx={{
              //   background: "#111",
              minHeight: "350px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 auto",
              color: "#111",
            }}
          >
            <Typography
              sx={{
                fontSize: "42px",
                width: "100%",
                fontWeight: "600",
                textAlign: "center",
                margin: "32px auto",
              }}
            >
              {currentBlogPost.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "21px",
                width: "100%",
                fontWeight: "300",
                whiteSpace: "pre-line",
                // textAlign: "center",
                width: "75%",
                // textAlign: "justify",
                margin: "21px auto",
              }}
            >
              {currentBlogPost.description}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "42px",
                width: "100%",
                fontWeight: "600",
                textAlign: "left",
                margin: "32px auto",
              }}
            >
              Additional Blog Posts
            </Typography>
            <AboutUsSlider />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryPage;
[
  {
    title: "Health and Wellness",
    color: "#111",
  },
  {
    title: "Stress Management",
    color: "#ff5b5b",
  },
  {
    title: "Healthy Eating",
    color: "#00b91e",
  },
  {
    title: "Sleep Hygiene",
    color: "#8a4dff",
  },
  {
    title: "Exercise and Fitness",
    color: "#ffa31a",
  },
  {
    title: "Campus Safety",
    color: "#007bff",
  },
  {
    title: "Sexual Health Education",
    color: "#fe5e51",
  },
  {
    title: "Mental Health Support",
    color: "#ff6b81",
  },
  {
    title: "Managing Relationships",
    color: "#ff99cc",
  },
  {
    title: "Study Techniques",
    color: "#00e0fc",
  },
];

const blogPosts = [
  {
    title: "10 Essential Study Tips for University Students",
    description:
      "Studying effectively is crucial for university students to excel academically. Here are 10 essential study tips that can help you make the most of your study sessions:\n\n1. Create a Study Schedule: Develop a study schedule that includes dedicated time for each subject and breaks to avoid burnout.\n\n2. Find Your Ideal Study Environment: Experiment with different study environments to identify the one where you can focus and retain information best.\n\n3. Take Effective Notes: Use abbreviations, diagrams, and highlight important points while taking notes to aid comprehension and revision.\n\n4. Break Down Complex Topics: If you come across a challenging topic, break it down into smaller, manageable parts to better understand and remember it.\n\n5. Use Active Learning Techniques: Engage in activities like group discussions, quizzes, and problem-solving to actively engage with the material and enhance retention.\n\n6. Practice Regularly: Regular practice, especially for subjects like math and science, is key to mastering concepts and improving problem-solving skills.\n\n7. Seek Clarification: Don't hesitate to ask your professors or classmates for clarification on topics you find confusing. It's crucial to have a clear understanding of the material.\n\n8. Take Breaks: Incorporate regular breaks into your study schedule to prevent mental fatigue and maintain focus.\n\n9. Stay Organized: Keep your study materials, notes, and assignments organized to save time and avoid unnecessary stress.\n\n10. Take Care of Yourself: In addition to studying, prioritize self-care by getting enough sleep, eating well, and engaging in physical activity. A healthy body and mind contribute to academic success.\n\nBy incorporating these study tips into your routine, you'll enhance your learning experience and achieve your academic goals.",
    image: "flu.jpg",
  },
  {
    title: "Navigating Life as a Freshman: A Guide for University Students",
    description:
      "Starting university can be an exciting yet challenging phase in a student's life. Here's a comprehensive guide to help freshmen navigate this new chapter:\n\n1. Make Connections: Attend orientation events and join clubs or organizations to meet fellow students and build a support network.\n\n2. Time Management: Develop effective time management skills to balance coursework, extracurricular activities, and personal commitments.\n\n3. Seek Academic Support: Familiarize yourself with academic resources such as tutoring services, study groups, and office hours to seek assistance when needed.\n\n4. Explore Campus Resources: Take advantage of campus facilities like libraries, computer labs, and fitness centers to enhance your university experience.\n\n5. Get Involved: Participate in campus activities, events, or student government to make the most of your university's social and learning opportunities.\n\n6. Take Care of Mental Health: Prioritize your mental well-being by practicing self-care activities and seeking professional support if needed.\n\n7. Embrace Diversity: University campuses are diverse, embracing different cultures, experiences, and perspectives. Respect and learn from others' unique backgrounds.\n\n8. Manage Finances: Familiarize yourself with budgeting, student discounts, and available financial aid options to effectively manage your finances.\n\n9. Develop Study Habits: Experiment with different study techniques and find the ones that work best for you. Consistent and effective studying will lead to academic success.\n\n10. Have Fun: University is also about enjoying life. Take breaks, explore your interests, and make lifelong memories.\n\nBy following these guidelines, you'll thrive as a freshman and make the most of your university experience.",
    image: "students-sitting.jpg",
  },
  {
    title: "10 Fun and Affordable Weekend Activities for University Students",
    description:
      "Weekends provide a great opportunity for university students to unwind, relax, and engage in enjoyable activities. Here are 10 fun and affordable weekend activities to consider:\n\n1. Explore Local Parks: Visit nearby parks, hiking trails, or botanical gardens for a refreshing and budget-friendly outdoor experience.\n\n2. Host a Movie Marathon: Organize a movie marathon with friends, where each person can contribute a film. Don't forget the popcorn!\n\n3. Volunteer in the Community: Give back to the community by volunteering at local charities, animal shelters, or environmental organizations.\n\n4. Organize a Game Night: Invite friends over for a game night filled with board games, card games, or video games for a fun and competitive evening.\n\n5. Cook a Meal Together: Take turns with your friends to cook a homemade meal and enjoy a cozy dinner at home.\n\n6. Visit Museums or Art Galleries: Many museums and art galleries offer discounted or free admission for students. Explore cultural exhibits and expand your knowledge.\n\n7. Have a Picnic: Pack a picnic basket with homemade sandwiches and snacks and enjoy a picnic in a nearby park. Don't forget a blanket!\n\n8. Explore Local Markets: Visit local farmers' markets or flea markets to discover unique crafts, fresh produce, and delicious treats.\n\n9. Attend Campus Events: Check out university-hosted events such as concerts, performances, or guest lectures. You'll get to enjoy entertainment right on campus.\n\n10. Start a Book Club: Gather a group of friends who are interested in reading and start a book club. Discuss literature and exchange book recommendations.\n\nThese activities provide a balance between relaxation, socialization, and affordable entertainment, making your weekends memorable without breaking the bank.",
    image: "about-us.jpg",
  },
];
