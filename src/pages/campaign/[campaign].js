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
  TextField,
  Divider,
} from "@mui/material";
import { Navbar } from "./../../components/main";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";

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
            height: { xs: "30vh", lg: "50vh" },
            padding: "30px",
            backgroundImage: "url('/qwaqwa-banner.jpg')",
            backgroundSize: { xs: "cover", lg: "cover" },
            backgroundPosition: "left center",
          }}
        />
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
            <Link underline="hover" color="inherit" href="/campaigns">
              Campaigns
            </Link>
            <Typography color="text.primary" sx={{ fontWeight: "600" }}>
              {currentCampaign.title}
            </Typography>
          </Breadcrumbs>
        </Box>

        <CampaignRow campaign={currentCampaign} />
      </Box>
    </Box>
  );
};

export default GetInvoldedPage;

const CampaignRow = ({ reversed, campaign }) => {
  return (
    <Grid
      container
      sx={{ display: "flex", flexDirection: reversed ? "row" : "row-reverse" }}
    >
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          height: "75vh",
          margin: "32px auto",
          backgroundImage: `url(${campaign.image})`,
          backgroundSize: { xs: "contain", lg: "contain" },
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          height: "75vh",
          margin: "32px auto",
          background: "",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            width: "100%",
            margin: "0",
            padding: "12px 0",
            fontWeight: "600",
            textAlign: "center",
            color: "#111",
          }}
        >
          {campaign.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "21px",
            width: "100%",
            margin: "0",
            padding: "12px 0",
            fontWeight: "300",
            textAlign: "center",
            color: "#111",
          }}
        >
          {campaign.description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider
          sx={{ width: "50%", margin: { xs: "21px auto", lg: "64px auto" } }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "",
          margin: "0 auto",
          padding: { xs: "0 12px", lg: "21px 0 0 32px" },
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            width: "100%",
            margin: "0",
            padding: "12px 0",
            fontWeight: "600",
            textAlign: "center",
            color: "#111",
          }}
        >
          Volunteer Now
        </Typography>
        <Box
          sx={{
            height: { xs: "300px", lg: "350px" },
            padding: "30px",
            backgroundImage: "url('/volunteer.gif')",
            backgroundSize: { xs: "contain" },
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Typography
          sx={{
            fontSize: "21px",
            width: "100%",
            margin: "0",
            padding: "12px 0",
            fontWeight: "300",
            textAlign: "center",
            color: "#111",
          }}
        >
          Fill in the form below to volunteer and assist with this campaign.
        </Typography>

        <Typography component={"label"} sx={{ textAlign: "left" }}>
          {" "}
          Name :{" "}
        </Typography>
        <TextField sx={{ ...TextStyles }} fullWidth={true} />
        <Typography component={"label"} sx={{ textAlign: "left" }}>
          {" "}
          Surname :{" "}
        </Typography>
        <TextField sx={{ ...TextStyles }} fullWidth={true} />
        <Typography component={"label"} sx={{ textAlign: "left" }}>
          {" "}
          Phone Number :{" "}
        </Typography>
        <TextField sx={{ ...TextStyles }} fullWidth={true} />
        <Typography component={"label"} sx={{ textAlign: "left" }}>
          {" "}
          Email :{" "}
        </Typography>
        <TextField sx={{ ...TextStyles }} fullWidth={true} />
        <Typography component={"label"} sx={{ textAlign: "left" }}>
          {" "}
          Campaign :{" "}
        </Typography>
        <TextField sx={{ ...TextStyles }} fullWidth={true} />
      </Grid>

      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            background: "#111",
            color: "white",
            fontWeight: "600",
            padding: "21px 48px",
            transition: "800ms",
            margin: "21px 0",
            border: "1px solid transparent",
            "&:hover": {
              color: "white",
              border: "1px solid #111",
              backgroundImage: "url('/hover.png')",
              backgroundSize: { xs: "cover", lg: "cover" },
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            },
          }}
        >
          {" "}
          Get Involved{" "}
        </Button>
      </Grid>
    </Grid>
  );
};

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

const TextStyles = {
  margin: "21px 0",
};
