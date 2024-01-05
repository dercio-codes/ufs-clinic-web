import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Menu,
  Tooltip,
  Paper,
  Divider,
  TextField
} from "@mui/material";
import { Navbar } from "./../components/main";

const GREEN = "#449842";
const BLUE = "#001842";
const RED = "#6A2F2F";

export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <Box sx={{ width: "100%", background: "", margin: "0 auto" }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          height: { xs: "30vh", lg: "50vh" },
          padding: "30px",
          backgroundImage: "url('/qwaqwa-banner.jpg')",
          backgroundSize: { xs: "contain", lg: "cover" },
          backgroundPosition: "left"
        }}
      />
      <Box
        sx={{
          width: "90%",
          background: "",
          padding: "0 32px",
          margin: "0 auto"
        }}
      >
        <TitleHeader text={"Contact Us"} />

        <Typography
          sx={{
            fontSize: "21px",
            color: "#111",
            fontWeight: "500",
            textAlign: "center"
          }}
        >
          {"Fill in the form below."}
        </Typography>

        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              minHeight: "70vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "",
              padding: "21px 0 0 32px"
            }}
          >
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
              Duration :{" "}
            </Typography>
            <TextField sx={{ ...TextStyles }} fullWidth={true} />
            <Typography component={"label"} sx={{ textAlign: "left" }}>
              {" "}
              Email :{" "}
            </Typography>
            <TextField sx={{ ...TextStyles }} fullWidth={true} />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              minHeight: "70vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "",
              padding: "21px 0 0 32px"
            }}
          >
            <Typography component={"label"} sx={{ textAlign: "left" }}>
              {" "}
              Symptoms :{" "}
            </Typography>
            <TextField sx={{ ...TextStyles }} fullWidth={true} />
            <Typography component={"label"} sx={{ textAlign: "left" }}>
              {" "}
              Type :{" "}
            </Typography>
            <TextField sx={{ ...TextStyles }} fullWidth={true} />
            <Typography component={"label"} sx={{ textAlign: "left" }}>
              {" "}
              Time :{" "}
            </Typography>
            <TextField sx={{ ...TextStyles }} fullWidth={true} />

            <Typography component={"label"} sx={{ textAlign: "left" }}>
              {" "}
              Query :{" "}
            </Typography>
            <TextField
              multiline={true}
              rows={6.3}
              sx={{ ...TextStyles }}
              fullWidth={true}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
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
                  backgroundRepeat: "no-repeat"
                }
              }}
            >
              {" "}
              Get Involved{" "}
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={2.5}
            sx={{
              minHeight: "70vh"
            }}
          >
            <Box
              sx={{
                height: "",
                width: "100%",
                margin: "0 auto"
              }}
            >
              <Box
                sx={{
                  height: "80px",
                  background: "",
                  margin: "32px 0",
                  backgroundImage: "url('/plain.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  scale: "0.7"
                }}
              ></Box>
              <Box
                sx={{
                  height: "35vh",
                  backgroundImage: 'url("/sky.jpg")',
                  backgroundPosition: "right",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed"
                }}
              >
                <Box
                  sx={{
                    background: "rgba(1,1,1,.5)",
                    width: "100%",
                    height: "100%",
                    opacity: "0.5"
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  margin: "0 auto",
                  background: RED,
                  padding: "32px 21px",
                  borderRadius: "0 0 21px 21px"
                }}
              >
                {" "}
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "white",
                    fontWeight: "600"
                  }}
                >
                  {" "}
                  +27 51 401 9111 | info@ufs.ac.za | www.ufs.ac.za
                </Typography>
              </Box>

              <Grid container>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      fontSize: "10px"
                    }}
                  >
                    {" "}
                    Inspiring excellence,transforming lives through quality
                    impact and care.{" "}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    height: "50px",
                    background: "",
                    margin: "32px 0",
                    backgroundImage: "url('/qwaqwa-logo.jpg')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    scale: "0.7"
                  }}
                ></Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={5.5}
            sx={{
              padding: "0 32px"
            }}
          >
            <Typography
              sx={{
                fontSize: "50px",
                color: GREEN,
                fontWeight: "500"
              }}
            >
              {" "}
              Contact{" "}
            </Typography>
            <Typography sx={{ fontSize: "21px", margin: "12px 0" }}>
              {" "}
              Sister Mathapelo Moloi{" "}
            </Typography>
            <Typography sx={{ fontSize: "21px", margin: "12px 0" }}>
              {" "}
              T: +27 58 718 5210/5228{" "}
            </Typography>
            <Typography sx={{ fontSize: "21px", margin: "12px 0" }}>
              {" "}
              E: MoloiMA@ufs.ac.za{" "}
            </Typography>

            <Typography
              sx={{
                fontSize: "50px",
                color: GREEN,
                fontWeight: "500",
                margin: "48px 0 32px 0"
              }}
            >
              {" "}
              Clinic Staff{" "}
            </Typography>
            <Typography sx={{ fontSize: "21px", margin: "12px 0" }}>
              {" "}
              Mathapelo Moloi (Chief Officer){" "}
            </Typography>
            <Typography sx={{ fontSize: "21px", margin: "12px 0" }}>
              {" "}
              Modise NL (Senior Officer){" "}
            </Typography>
            <Typography sx={{ fontSize: "21px", margin: "12px 0" }}>
              {" "}
              Mokhethi TF (Assisstant Offer){" "}
            </Typography>
            <Typography sx={{ fontSize: "21px", margin: "12px 0" }}>
              {" "}
              DR Mohlala (Assisstant Offer){" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              minHeight: { lg: "70vh" },
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <Box
              sx={{
                height: "250px",
                width: "100%",
                backgroundImage: `url("/contact-image.png")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const TitleHeader = ({ text }) => {
  return (
    <Typography
      className={"tracking-in-expand"}
      sx={{
        fontSize: "34px",
        fontWeight: "600",
        margin: "32px 0",
        color: GREEN
      }}
    >
      {" "}
      {text}{" "}
    </Typography>
  );
};

const TextStyles = {
  margin: "21px 0"
};
