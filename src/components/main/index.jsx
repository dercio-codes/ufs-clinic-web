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
import { motion } from "framer-motion";

const GREEN = "#449842";
const BLUE = "#001842";
const RED = "#6A2F2F";

export const Main = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "120px",
          width: "65px",
          backgroundImage: `url('dots.png')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          right: "0",
          top: "calc(20%)",
        }}
      />
      <Box
        sx={{
          height: "120px",
          width: "65px",
          backgroundImage: `url('dots.png')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          left: "0",
          rotate: "180deg",
          top: "calc(120%)",
        }}
      />

      <Box
        sx={{
          height: "120px",
          width: "65px",
          backgroundImage: `url('dots.png')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          left: "0",
          rotate: "180deg",
          top: "calc(320%)",
        }}
      />
      <Box sx={{ height: "5vh", background: BLUE }} />
      <Navbar />
      <Box
        sx={{
          height: { xs: "30vh", lg: "50vh" },
          padding: "30px",
          backgroundImage: "url('/qwaqwa-banner.jpg')",
          backgroundSize: { xs: "cover", lg: "cover" },
          backgroundPosition: "left center",
        }}
      />

      <div id="" />

      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Grid container columnSpacing={6}>
          <Grid item xs={12} lg={9} sx={{ padding: "30px", background: "" }}>
            <TitleHeader text={"Health & Wellness Centre Qwa Qwa Campus "} />

            <Box sx={{ display: "flex", justifyContent: "space-between" , flexWrap:'wrap' }}>
              <Box data-aos="fade-right" data-aos-duration="1000">
                <CardItem
                  image={"/blood-pressure.jpg"}
                  text={"HIgh Blood Pressure"}
                />
              </Box>

              <Box data-aos="fade-right" data-aos-duration="2000">
                <CardItem image={"/hiv.png"} text={"HIV"} />
              </Box>

              <Box data-aos="fade-right" data-aos-duration="3000">
                <CardItem image={"/diabetes.jpg"} text={"Diabetes"} />
              </Box>

              <Box data-aos="fade-right" data-aos-duration="4000">
                <CardItem image={"/tb.jpg"} text={"Tubercolosis"} />
              </Box>

              <Box data-aos="fade-right" data-aos-duration="5000">
                <CardItem text={"See All..."} />
              </Box>
            </Box>
            <Box data-aos="fade-bottom" data-aos-duration="5000">
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
                  width: { xs:'100%' , lg: "75%"},
                  margin: "8px 0",
                  fontWeight: "100",
                  textAlign: "left",
                }}
              >
                {" "}
                Includes Session Doctors and Primary Health Care by Professional
                nurses.{" "}
              </Typography>
            </Box>
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
            <Box data-aos="fade-bottom" data-aos-duration="5000">
              <Paper
                className="hero-cards"
                elevation={3}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    background: "rgba(1,1,1,.2)",
                  },
                  margin: "32px 0",
                  width: "100%",
                  height: "100px",
                  borderLeft: "10px solid #001842",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 21px",
                }}
              >
                <SearchIcon
                  className="hero-card-icon-search"
                  sx={{ fontSize: "35px", color: "#001842" }}
                />
                <Typography className={"card-text"} sx={{}}>
                  {" "}
                  Find a Nurse{" "}
                </Typography>
                <ArrowForwardIcon
                  className="hero-card-icon"
                  sx={{ color: "#001842" }}
                />
              </Paper>
            </Box>
            <Box data-aos="fade-bottom" data-aos-duration="5000">
              <Paper
                className="hero-cards"
                elevation={3}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    background: "rgba(1,1,1,.2)",
                  },
                  margin: "32px 0",
                  width: "100%",
                  height: "100px",
                  borderLeft: "10px solid #001842",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 21px",
                }}
              >
                <TipsAndUpdatesIcon
                  sx={{ fontSize: "35px", color: "#001842" }}
                />
                <Typography sx={{}}> Tips </Typography>
                <ArrowForwardIcon
                  className="hero-card-icon"
                  sx={{ color: "#001842" }}
                />
              </Paper>
            </Box>
            <Box data-aos="fade-bottom" data-aos-duration="5000">
              <Paper
                className="hero-cards"
                elevation={3}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    background: "rgba(1,1,1,.2)",
                  },
                  margin: "32px 0",
                  width: "100%",
                  height: "100px",
                  borderLeft: "10px solid #001842",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 21px",
                }}
              >
                <CallIcon sx={{ fontSize: "35px", color: "#001842" }} />
                <Typography sx={{}}> Contact Us </Typography>
                <ArrowForwardIcon
                  className="hero-card-icon"
                  sx={{ color: "#001842" }}
                />
              </Paper>
            </Box>
          </Grid>

          <Grid
            xs={12}
            md={3.5}
            sx={{
              margin: "32px auto",
              height: "350px",
              background: "",
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Box data-aos="fade-left" data-aos-duration="2000">
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
              <Box data-aos="fade-bottom" data-aos-duration="3000">
                <Typography sx={{ textAlign: "center" }}>
                  {" "}
                  Access quickly to the availablility of all your practitioners{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={3.5}
            sx={{
              margin: "32px auto",
              height: "350px",
              background: "",
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Box data-aos="fade-bottom" data-aos-duration="2000">
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
              <Box data-aos="fade-bottom" data-aos-duration="3000">
                <Typography sx={{ textAlign: "center" }}>
                  {" "}
                  A company of practitioners to accompany you.{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={3.5}
            sx={{
              margin: "32px auto",
              height: "350px",
              background: "",
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Box data-aos="fade-right" data-aos-duration="2000">
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
              <Box data-aos="fade-bottom" data-aos-duration="3000">
                <Typography sx={{ textAlign: "center" }}>
                  {" "}
                  Manage your Appointments and get health tips as well.{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Typography sx={{ fontWeight: "600", color: GREEN, fontSize: "40px" }}>
          {"Campaigns"}
        </Typography>
        <Box
          data-aos="fade-bottom"
          data-aos-duration="2000"
          sx={{ margin: "50px 0" }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              color: "rgba(1, 1, 1, 0.5)",
              fontSize: "32px",
              textAlign: "",
              margin: "40px 0",
            }}
          >
            {"Womens Health"}
          </Typography>
          <Carousel />
        </Box>

        <Box data-aos="fade-bottom" data-aos-duration="2000" sx={{ margin: "50px 0" }}>
          <Typography
            sx={{
              fontWeight: "600",
              color: "rgba(1, 1, 1, 0.5)",
              fontSize: "32px",
              textAlign: "",
              margin: "40px 0",
            }}
          >
            {"Mens Health"}
          </Typography>
          <Carousel />
        </Box>

        <Box data-aos="fade-bottom" data-aos-duration="2000" sx={{ margin: "50px 0" }}>
          <Typography
            sx={{
              fontWeight: "600",
              color: "rgba(1, 1, 1, 0.5)",
              fontSize: "32px",
              textAlign: "",
              margin: "40px 0",
            }}
          >
            {"Protective Sex Health"}
          </Typography>
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
              height: "85vh",
              backgroundImage: `url('/about-us.jpg')`,
              backgroundSize: "cover",
              margin: "0 0 0 0",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Grid
            item
            xs={12}
            lg={8}
            sx={{
              minHeight: "500px",
              background: "",
              padding: { xs: "50px 0", lg: "0 32px" },
            }}
          >
          <Box data-aos="fade-right" data-aos-duration="2000" >
            <Typography
              className={"tracking-in-expand"}
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
</Box>
            <br />
            <Box data-aos="flip-up" data-aos-duration="800" >

            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "21px",
                lineHeight: "42px",
              }}
            >
              {"We offer a wide range of services, including:"}
            </Typography>
</Box>
            <br />
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "21px",
                lineHeight: "42px",
              }}
            >
              <ul style={{ padding: "0 32px" }}>
                <li  data-aos="fade-bottom" data-aos-duration="2000">Medical examinations</li>
                <li  data-aos="fade-bottom" data-aos-duration="2100">Treatment of minor illnesses and injuries</li>
                <li  data-aos="fade-bottom" data-aos-duration="2200">Screening for sexually transmitted diseases (STDs)</li>
                <li  data-aos="fade-bottom" data-aos-duration="2300">Pregnancy tests</li>
                <li  data-aos="fade-bottom" data-aos-duration="2400">Psychosocial counseling</li>
                <li  data-aos="fade-bottom" data-aos-duration="2500">Health education and promotion</li>
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
            <Box data-aos="zoom-in" data-aos-duration="800" >
         
          <Typography
            sx={{ fontSize: "34px", fontWeight: "600", margin: "100px 0" }}
          >
            {" "}
            {"Exploring The Frontiers of Health: Articles and Blogs"}{" "}
          </Typography>
        </Box>

          <AboutUsSlider />
        </Box>
      </Box>
      <Box
        sx={{ background: GREEN, padding: "50px", margin: "50px 0 100px 0" }}
      >
            <Box data-aos="fade-down" data-aos-duration="1000" >

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
      </Box>

      <WhatWeDo />

      <Box
        sx={{
          height: { xs: "30vh", lg: "50vh" },
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

export const Navbar = () => {
  return (
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
          <NavItem doctors={doctors} text={"Health Tips "} />
          <NavItem doctors={sicknesses} text={"Campaigns"} />
          <NavItem doctors={about} text={"About"} />
          <NavItem doctors={false} text={"Login "} />
        </Grid>
      </Grid>
    </Box>
  );
};

const TitleHeader = ({ text }) => {
  return (
    <Box data-aos="slide-down" data-aos-duration="4000">
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
    </Box>
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

const sicknesses = [
  "Acanthosis nigricans",
  "Acne",
  "Acute coronary syndrome",
  "Acute lymphocytic leukemia",
  "Acute myeloid leukemia",
  "AIDS",
  "Alcohol dependence",
  "Alzheimer's disease",
  "Amyotrophic lateral sclerosis",
  "Anorexia nervosa",
  "Anxiety disorders",
  "Aortic aneurysm",
  "Appendicitis",
  "Arthritis",
  "Asthma",
  "Autism spectrum disorder",
  "Bacterial meningitis",
  "Bipolar disorder",
  "Bronchitis",
  "Bulimia nervosa",
  "Cancer",
  "Cardiomyopathy",
  "Cerebral palsy",
  "Chronic obstructive pulmonary disease",
  "Cirrhosis",
  "Colitis",
  "Congenital heart defects",
  "Crohn's disease",
  "Cystic fibrosis",
  "Dengue fever",
  "Depression",
  "Diabetes",
  "Down syndrome",
  "Ebola virus disease",
  "Eczema",
  "Epilepsy",
  "Esophageal cancer",
  "Fibromyalgia",
  "Flu",
  "Food poisoning",
  "Fractures",
  "Gastritis",
  "Glaucoma",
  "Gonorrhea",
  "Heart attack",
  "Hepatitis",
  "Herpes",
  "HIV infection",
  "Huntington's disease",
  "Inflammatory bowel disease",
  "Influenza",
  "Kidney disease",
  "Leukemia",
  "Lupus",
  "Lyme disease",
  "Malaria",
  "Multiple sclerosis",
  "Muscular dystrophy",
  "Myocardial infarction",
  "Obesity",
  "Obsessive-compulsive disorder",
  "Osteoporosis",
  "Pancreatitis",
  "Parkinson's disease",
  "Pelvic inflammatory disease",
  "Pneumonia",
  "Post-traumatic stress disorder",
  "Prostate cancer",
  "Psoriasis",
  "Psychosis",
  "Pulmonary embolism",
  "Rabies",
  "Rheumatoid arthritis",
  "Schizophrenia",
  "Seizures",
  "Sepsis",
  "Sickle cell anemia",
  "Skin cancer",
  "Spinal cord injury",
  "Stroke",
  "Syphilis",
  "Tetanus",
  "Thalassemia",
  "Tuberculosis",
  "Ulcerative colitis",
  "Urinary tract infections",
  "Viral meningitis",
  "West Nile virus",
  "Zika virus disease",
];

const doctors = [
  "Nurse.",
  "Psychology.",
  "Therapist.",
  "Psychiatrist.",
  "Academic Advisor.",
  "Nurse.",
  "Psychology.",
  "Therapist.",
  "Psychiatrist.",
  "Academic Advisor.",
  "Nurse.",
  "Psychology.",
  "Therapist.",
  "Psychiatrist.",
  "Academic Advisor.",
  "Therapist.",
];

const about = ["Our Story", "Our Vision", "Our Values", "Our Partners"];
function NavItem({ text, doctors }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (doctors !== false) {
      setAnchorEl(event.currentTarget);
    }
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
        onMouseEnter={handleClick}
        sx={{ fontSize: "12px", color: BLUE }}
      >
        {text}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onMouseLeave={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ width: "800px", minHeight: "50vh", background: "" }}>
          <Grid container>
            <Grid item xs={12} sx={{ display: "flex", flexWrap: "wrap" }}>
              {doctors &&
                doctors.map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        padding: "16px 0",
                        cursor: "pointer",
                        width: "50%",
                        textAlign: "center",
                        margin: "auto auto",
                        borderRadius: "42px",
                        "&:hover": {
                          background: GREEN,
                          color: "white",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  );
                })}
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
      {"Schedule an appointment with a "}{" "}
      <span style={{ fontWeight: "600", color: GREEN, fontSize: "40px" }}>
        {doctors[currentDoctorIndex].toUpperCase()}
      </span>
    </Typography>
  );
};