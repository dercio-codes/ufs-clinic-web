import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Menu,
  Tooltip,
  Paper,
  Button
} from "@mui/material";

const GREEN = "#449842";
const BLUE = "#001842";
const RED = "#6A2F2F";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Footer() {
  return (
    <Box sx={{ height: "", width: "100%", margin: "0 auto" }}>
      <Box sx={{ width: "90%", margin: " 50px auto", background: "" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={2.5}
            sx={{
              height: "70vh"
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
                  height: { xs: "45px", lg: "120px" },
                  background: "",
                  margin: "32px 0",
                  backgroundImage: "url('/qwaqwa-logo-transparent.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  scale: "1"
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
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6.5}
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
            <Typography sx={{ fontSize: "16px", margin: "12px 0" }}>
              {" "}
              Sister Mathapelo Moloi{" "}
            </Typography>
            <Typography sx={{ fontSize: "16px", margin: "12px 0" }}>
              {" "}
              T: +27 58 718 5210/5228{" "}
            </Typography>
            <Typography sx={{ fontSize: "16px", margin: "12px 0" }}>
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
            <Typography sx={{ fontSize: "16px", margin: "12px 0" }}>
              {" "}
              Mathapelo Moloi (Chief Officer){" "}
            </Typography>
            <Typography sx={{ fontSize: "16px", margin: "12px 0" }}>
              {" "}
              Modise NL (Senior Officer){" "}
            </Typography>
            <Typography sx={{ fontSize: "16px", margin: "12px 0" }}>
              {" "}
              Mokhethi TF (Assisstant Offer){" "}
            </Typography>
            <Typography sx={{ fontSize: "16px", margin: "12px 0" }}>
              {" "}
              DR Mohlala (Assisstant Offer){" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              display: "flex",
              minHeight: { xs: "50vh", lg: "70vh" },
              background: "",
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <Box
              sx={{
                height: "250px",
                width: "100%",
                backgroundImage: `url("/contact-image-transparent.png")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
          background: RED,
          padding: "32px 21px",
          borderRadius: "0 0 21px 21px"
        }}
      >
        {" "}
        <Typography
          sx={{ fontSize: "18px", color: "white", fontWeight: "600" }}
        >
          {" "}
          +27 51 401 9111 | info@ufs.ac.za | www.ufs.ac.za
        </Typography>
      </Box>

      <Grid container>
        <Grid
          item
          xs={12}
          md={3.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography
            sx={{
              fontStyle: "italic",
              width: { xs: "85%", lg: "60%" },
              fontSize: "21px",
              margin: { xs: "21px auto", lg: "0" }
            }}
          >
            {" "}
            Inspiring excellence,transforming lives through quality impact and
            care.{" "}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            padding: "0 21px"
          }}
        >
          <Box
            sx={{
              height: { xs: "120px", lg: "180px" },
              background: "",
              margin: "32px 0",
              backgroundImage: "url('/atomus_logo_transparent.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              scale: "1.2"
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            height: { xs: "120px", lg: "180px" },
            background: "",
            margin: "32px 0",
            backgroundImage: "url('/qwaqwa-logo-transparent.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            scale: "0.7"
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography
            sx={{
              width: { xs: "85%", lg: "60%" },
              fontSize: "12px",
              textAlign: "center",
              fontWeight: "600",
              margin: { xs: "21px auto" }
            }}
          >
            {"2024 Copyright LTD"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
