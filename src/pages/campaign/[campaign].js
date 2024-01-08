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
  Boxider,
} from "@mui/material";
import { Navbar } from "./../../components/main";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const GetInvoldedPage = () => {
  const router = useRouter();
  const { campaign } = router.query;
  // Find the Campaign object based on the Campaign parameter
  console.log(campaign);
  const currentCampaign = campaigns.find(
    (camp) =>
      camp.title.replaceAll(" ", "-").toLowerCase() ===
      campaign.replaceAll(" ", "-").toLowerCase(),
  );

  if (!currentCampaign) {
    return <Box>Campaign not found</Box>;
  }

  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <Box sx={{ width: "100%", background: "", margin: "0 auto" }}>
        <Navbar />
      </Box>
      <Box data-aos="fade-bottom" data-aos-duration={"5000"}>
        <Box
          sx={{
            // background: currentCampaign.color,
            height: "350px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: "60px",
              width: "100%",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {currentCampaign.title}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "90%", background: "", margin: "0 auto" }}>
        <Box
          sx={{
            width: "90%",
            background: "",
            margin: "32px 0",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/tips">
              Tips
            </Link>
            <Typography color="text.primary" sx={{ fontWeight: "600" }}>
              {currentCampaign.title}
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInvoldedPage;

const campaigns = [
  {
    id: 1,
    title: "Join the Student Volunteer Initiative",
    description:
      "Make a positive impact on your community! Join our student volunteer initiative and contribute to meaningful projects that tackle important social issues. By volunteering, you can gain valuable skills, make new friends, and create lasting memories. Together, let's make a difference!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBVLDk7Wyd95R2jpxl1kPUN_6jYSvP_Nw0NdkylkzcQ&s",
  },
  {
    id: 2,
    title: "Raise Awareness for Mental Health",
    description:
      "Help break the stigma surrounding mental health! Join our campaign to raise awareness and promote mental well-being on campus. Through informative workshops, engaging events, and open discussions, we aim to create a supportive environment for all students. Together, let's advocate for mental health and ensure that no one faces these challenges alone.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxQhwLBwDj0ISC4Trj_TRz6-NXWm334NqI6eKMblFog&s",
  },
  {
    id: 3,
    title: "Support Sustainable Living",
    description:
      "Be part of the sustainability movement! Join our campaign to promote eco-friendly practices and raise awareness about environmental issues. From organizing sustainable events to implementing recycling initiatives, we are committed to creating a greener campus. Together, let's build a more sustainable future!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7CKU0ZRP_TxKHrRQszu9T6bjOTBWxUjVPan4otJT7g&s",
  },
];
