import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Menu,
  Tooltip,
  Paper,
  Divider
} from "@mui/material";
import { Navbar } from "./../components/main";

const GREEN = "#449842";

export default function TipPage() {
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <Box sx={{ width: "90%", background: "", margin: "0 auto" }}>
        <Navbar />
      </Box>

      <Box
        sx={{
          height: { xs: "30vh", lg: "50vh" },
          padding: "30px",
          backgroundImage: "url('/Health-Sciences-Banner.jpg')",
          backgroundSize: { xs: "cover", lg: "contain" },
          backgroundPosition: "left center"
        }}
      />
      <Box
        sx={{
          width: "100%",
          background: "",
          padding: "0 32px",
          margin: "32px 0"
        }}
      >
        {/* <Box
          sx={{
            height: "120px",
            width: "65px",
            backgroundImage: `url('dots.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            right: "0",
            top: "calc(20%)"
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
            top: "calc(120%)"
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
            top: "calc(320%)"
          }}
        /> */}

        <Typography
          sx={{
            fontSize: "40px",
            width: "100%",
            margin: { xs: "32px 0", lg: "64px 0 32px 0" },
            padding: "21px 0",
            fontWeight: "600",
            textAlign: "center",
            color: GREEN
          }}
        >
          Health Tips
        </Typography>

        <Grid container>
          {categories.map((category, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12}
                md={5.6}
                sx={{
                  margin: "21px auto"
                }}
              >
                <Box
                  data-aos="fade-bottom"
                  data-aos-duration={index % 2 === 0 ? "5000" : "10000"}
                >
                  <Box
                    sx={{
                      background: category.color,
                      height: "150px",
                      display: "flex",
                      alignItems: "center",
                      margin: "0 auto",
                      color: "white",
                      borderRadius: "21px",
                      "&:hover": {
                        background: "transparent",
                        color: category.color,
                        border: `1px solid ${category.color}`,
                        cursor: "pointer"
                      }
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "40px",
                        width: "100%",
                        fontWeight: "600",
                        textAlign: "center"
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box data-aos="fade-right" data-aos-duration="5000">
        <Box
          sx={{
            height: { xs: "30vh", lg: "50vh" },
            padding: "30px",
            backgroundImage: "url('/tips-banner.jpg')",
            backgroundSize: { xs: "cover", lg: "contain" },
            backgroundPosition: "left center"
          }}
        />
      </Box>
    </Box>
  );
}

const categories = [
  {
    title: "Health and Wellness",
    color: "#111"
  },
  {
    title: "Stress Management",
    color: "#ff5b5b"
  },
  {
    title: "Healthy Eating",
    color: "#00b91e"
  },
  {
    title: "Sleep Hygiene",
    color: "#8a4dff"
  },
  {
    title: "Exercise and Fitness",
    color: "#ffa31a"
  },
  {
    title: "Campus Safety",
    color: "#007bff"
  },
  {
    title: "Sexual Health Education",
    color: "#fe5e51"
  },
  {
    title: "Mental Health Support",
    color: "#ff6b81"
  },
  {
    title: "Managing Relationships",
    color: "#ff99cc"
  },
  {
    title: "Study Techniques",
    color: "#00e0fc"
  }
];
