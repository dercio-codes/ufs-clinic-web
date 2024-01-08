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
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left"
        }}
      />
      <Box
        sx={{
          width: "90%",
          background: "",
          padding: { xs: "0 12px", lg: "0 32px" },
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
              padding: { xs: "0 12px", lg: "21px 0 0 32px" }
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
              padding: { xs: "0 12px", lg: "21px 0 0 32px" }
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
