import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Menu, Tooltip, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import CallIcon from "@mui/icons-material/Call";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "./../carousel";
import AboutUsSlider from "./../about-us-slider";
import WhatWeDo from "./../services/what-we-do";
import FrequentlyAsked from "./../f-a-q";
import Footer from "./../footer";

const GREEN = "#449842";
const BLUE = "#001842";

export const Main = () => {
  return (
    <Box>
      <Box sx={{ height: "5vh", background: "blue" }} />
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Grid container>
          <Grid
            item
            xs={2}
            sx={{
              padding: "30px",
              backgroundImage: "url('/qwaqwa-logo.jpg')",
              backgroundSize: "contain",
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
            }}
          ></Grid>
          <Grid
            item
            xs={10}
            sx={{
              padding: "30px",
              background: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <NavItem text={"Health Tips "} />
            <NavItem text={"Campaigns"} />
            <NavItem text={"About"} />
            <NavItem text={"Login "} />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          height: {xs:'30vh',lg:"50vh"},
          padding: "30px",
          backgroundImage: "url('/qwaqwa-banner.jpg')",
          backgroundSize: { xs:'contain' , lg: "cover"},
          backgroundPosition: "left",
        }}
      />

      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Grid container columnSpacing={6}>
          <Grid item xs={12} lg={9} sx={{ padding: "30px", background: "" }}>
            <TitleHeader text={"Qwa Qwa Clinic Wellness "} />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <CardItem
                image={"/blood-pressure.jpg"}
                text={"HIgh Blood Pressure"}
              />
              <CardItem image={"/hiv.png"} text={"HIV"} />
              <CardItem image={"/diabetes.jpg"} text={"Diabetes"} />
              <CardItem image={"/tb.jpg"} text={"Tubercolosis"} />
              <CardItem text={"See All..."} />
            </Box>

            <Typography
              sx={{
                fontSize: "38px",
                margin: "8px 0",
                fontWeight: "300",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <DoctorHeader />{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                width: "75%",
                margin: "8px 0",
                fontWeight: "100",
                textAlign: "left",
              }}
            >
              {" "}
              Includes Session Doctors and Primary Health Care by Professional
              nurses.{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              alignItems: "center",
              padding: "115px 0",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                "&:hover": { cursor: "pointer", background: "rgba(1,1,1,.2)" },
                margin: "32px 0",
                width: "100%",
                height: "100px",
                borderLeft: "10px solid blue",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 21px",
              }}
            >
              <SearchIcon sx={{ fontSize: "35px", color: "blue" }} />
              <Typography sx={{}}> Find a Nurse </Typography>
              <ArrowForwardIcon sx={{ color: "blue" }} />
            </Paper>
            <Paper
              elevation={3}
              sx={{
                "&:hover": { cursor: "pointer", background: "rgba(1,1,1,.2)" },
                margin: "32px 0",
                width: "100%",
                height: "100px",
                borderLeft: "10px solid blue",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 21px",
              }}
            >
              <TipsAndUpdatesIcon sx={{ fontSize: "35px", color: "blue" }} />
              <Typography sx={{}}> Tips </Typography>
              <ArrowForwardIcon sx={{ color: "blue" }} />
            </Paper>
            <Paper
              elevation={3}
              sx={{
                "&:hover": { cursor: "pointer", background: "rgba(1,1,1,.2)" },
                margin: "32px 0",
                width: "100%",
                height: "100px",
                borderLeft: "10px solid blue",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 21px",
              }}
            >
              <CallIcon sx={{ fontSize: "35px", color: "blue" }} />
              <Typography sx={{}}> Contact Us </Typography>
              <ArrowForwardIcon sx={{ color: "blue" }} />
            </Paper>
          </Grid>

          <Grid
            md={3.5}
            sx={{
              margin: "32px auto 80px auto",
              height: "350px",
              background: "",
            }}
          >
            <Box
              sx={{
                height: "300px",
                width: "50%",
                margin: "auto auto",
                backgroundPosition: "center",
                backgroundImage: "url('/student-using.jpg')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Typography sx={{ textAlign: "center" }}>
              {" "}
              Access quickly to the availablility of all your practitioners{" "}
            </Typography>
          </Grid>
          <Grid
            md={3.5}
            sx={{
              margin: "32px auto 80px auto",
              height: "350px",
              background: "",
            }}
          >
            <Box
              sx={{
                height: "300px",
                width: "50%",
                margin: "auto auto",
                backgroundPosition: "center",
                backgroundImage: "url('/practitioners.jpg')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Typography sx={{ textAlign: "center" }}>
              {" "}
              A company of practitioners to accompany you.{" "}
            </Typography>
          </Grid>
          <Grid
            md={3.5}
            sx={{
              margin: "32px auto 80px auto",
              height: "350px",
              background: "",
            }}
          >
            <Box
              sx={{
                height: "300px",
                width: "50%",
                margin: "auto auto",
                backgroundPosition: "center",
                backgroundImage: "url('/appointment-booking.jpg')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Typography sx={{ textAlign: "center" }}>
              {" "}
              Manage your Appointments and get health tips as well.{" "}
            </Typography>
          </Grid>
        </Grid>

        <Typography sx={{ fontWeight: "600", color: GREEN, fontSize: "40px" }}>
          {"Campaigns"}
        </Typography>
        <Box sx={{ margin: "50px 0" }}>
          <Carousel />
        </Box>

        <Box sx={{ margin: "50px 0" }}>
          <Carousel />
        </Box>
      </Box>
      <Box
        sx={{
          height: "35vh",
          margin: "120px 0 0 0",
          backgroundImage: "url('/Health-Sciences-Banner.jpg')",
          backgroundSize: "fill",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box sx={{ width: "90%", margin: "120px auto" }}>
        <TitleHeader text={"About Us "} />

        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              height: "70vh",
              backgroundImage: `url('/about-us.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Grid
            item
            xs={12}
            lg={8}
            sx={{ height: "500px", background: "", padding: "0 32px" }}
          >
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "21px",
                lineHeight: "42px",
              }}
            >
              {
                "The University of the Free State (UFS) School Clinic is a comprehensive medical facility that provides high-quality care to registered UFS staff and students. Our experienced team of healthcare professionals is dedicated to promoting well-being and providing innovative healthcare solutions. We emphasize compassionate care, advanced technology, and medical expertise."
              }
            </Typography>

            <br />
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "21px",
                lineHeight: "42px",
              }}
            >
              {"We offer a wide range of services, including:"}
            </Typography>
            <br />
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "21px",
                lineHeight: "42px",
              }}
            >
              <ul style={{ padding: "0 32px" }}>
                <li>Medical examinations</li>
                <li>Treatment of minor illnesses and injuries</li>
                <li>Screening for sexually transmitted diseases (STDs)</li>
                <li>Pregnancy tests</li>
                <li>Psychosocial counseling</li>
                <li>Health education and promotion</li>
              </ul>
              <br />
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "21px",
                lineHeight: "42px",
              }}
            >
              {
                "We are committed to maintaining strict confidentiality, and our care is available to all registered UFS staff and students, regardless of their financial situation."
              }
            </Typography>
            <br />
          </Grid>
        </Grid>
        <Box sx={{ margin: "100px 0" }}>
          <Typography sx={{ fontSize: "34px", fontWeight: "600", margin: "0" }}>
            {" "}
            {"Exploring The Frontiers of Health: Articles and Blogs"}{" "}
          </Typography>

          <AboutUsSlider />
        </Box>
      </Box>
      <Box
        sx={{ background: GREEN, padding: "50px", margin: "50px 0 100px 0" }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: "900",
            color: "white",
            textAlign: "center",
          }}
        >
          WHAT WE DO
        </Typography>
      </Box>

      <WhatWeDo />

      <Box
        sx={{
          height: {xs:'30vh',lg:"50vh"},
          margin: "120px 0 0 0",
          backgroundImage: "url('/builing-banner.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "bottom",
        }}
      />
      <Box sx={{ width: "90%", margin: "120px auto 21px auto" }}>
        <TitleHeader text={"Frequently Asked Questions "} />
        <FrequentlyAsked />
      </Box>

      <Footer />
    </Box>
  );
};

const MenuDrop = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Typography
        onMouseEnter={handleToggle}
        sx={{ display: "flex", alignItems: "center" }}
      >
        Campaigns <ExpandMoreIcon />{" "}
      </Typography>

      <Menu
        open={open}
        onBlur={handleToggle}
        sx={{ width: "300px", height: "50vh", background: "red" }}
      ></Menu>
    </Box>
  );
};

const TitleHeader = ({ text }) => {
  return (
    <Typography
      sx={{
        fontSize: "34px",
        fontWeight: "600",
        margin: "32px 0",
        color: GREEN,
      }}
    >
      {" "}
      {text}{" "}
    </Typography>
  );
};

const CardItem = ({ text, image }) => {
  return (
    <Box sx={{ width: "120px" }}>
      <Box
        sx={{
          height: "120px",
          width: "120px",
          backgroundImage: `url('${image}')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Typography
        sx={{
          fontSize: "16px",
          margin: "8px 0",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        {" "}
        {text}{" "}
      </Typography>
    </Box>
  );
};

function NavItem({ text }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ fontSize: "12px", color: BLUE }}
      >
        {text}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ width: "800px", minHeight: "50vh", background: "" }}>
          <Grid container>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundImage: '"/poster-1.png"',
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", flexWrap: "wrap" }}>
              <Typography
                sx={{
                  minHeight: "100px",
                  background: GREEN,
                  width: "50%",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                {" "}
                HIV{" "}
              </Typography>
              <Typography
                sx={{
                  minHeight: "100px",
                  background: BLUE,
                  width: "50%",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                {" "}
                TB{" "}
              </Typography>
              <Typography
                sx={{
                  minHeight: "100px",
                  background: GREEN,
                  width: "50%",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                {" "}
                Gynercologist{" "}
              </Typography>
              <Typography
                sx={{
                  minHeight: "100px",
                  background: BLUE,
                  width: "50%",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                {" "}
                High Blood Pressure{" "}
              </Typography>
              <Typography
                sx={{
                  minHeight: "100px",
                  background: GREEN,
                  width: "50%",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                {" "}
                Flu{" "}
              </Typography>
              <Typography
                sx={{
                  minHeight: "100px",
                  background: BLUE,
                  width: "50%",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                {" "}
                Covid{" "}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Menu>
    </div>
  );
}

const DoctorHeader = () => {
  const doctors = [
    "Nurse.",
    "Psychology.",
    "Therapist.",
    "Psychiatrist.",
    "Academic Advisor.",
  ];
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);

  // Function to cycle through the doctors
  const cycleDoctors = () => {
    setCurrentDoctorIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  useEffect(() => {
    // Set a timer to change the displayed doctor every 8 seconds
    const timer = setTimeout(cycleDoctors, 3000);

    return () => {
      // Clear the timer when the component unmounts
      clearTimeout(timer);
    };
  }, [currentDoctorIndex]);

  return (
    <Typography sx={{ fontSize: "38px", textDecoration: "uppercase" }}>
      {"Schedule an appointment with "}{" "}
      <span style={{ fontWeight: "600", color: GREEN, fontSize: "40px" }}>
        {doctors[currentDoctorIndex].toUpperCase()}
      </span>
    </Typography>
  );
};
