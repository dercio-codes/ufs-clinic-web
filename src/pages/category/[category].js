import { useRouter } from "next/router";
import categoriesData from "./../../config/categories.json";
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
import { Navbar } from "./../../components/main";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  // Find the category object based on the category parameter
  const currentCategory = categoriesData.find(
    cat =>
      cat.title.replaceAll(" ", "-").toLowerCase() ===
      category.replaceAll(" ", "-").toLowerCase()
  );

  if (!currentCategory) {
    return <Box>Category not found</Box>;
  }

  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <Box sx={{ width: "90%", background: "", margin: "0 auto" }}>
        <Navbar />
      </Box>
      <Box data-aos="fade-bottom" data-aos-duration={"5000"}>
        <Box
          sx={{
            background: currentCategory.color,
            height: "350px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
            color: "white"
          }}
        >
          <Typography
            sx={{
              fontSize: "60px",
              width: "100%",
              fontWeight: "600",
              textAlign: "center"
            }}
          >
            {currentCategory.title}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "90%", background: "", margin: "0 auto" }}>
        {HealthTips.map((item, index) => {
          return (
            <Grid
              container
              key={index}
              sx={{
                display: "flex",
                margin: "32px 0",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                padding: "21px 0"
              }}
            >
              <Grid item xs={6}>
                <Typography sx={{ fontSize: "21px", fontWeight: "300" }}>
                  {" "}
                  {item.Tip}{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "21px 0",
                    color: currentCategory.color
                  }}
                >
                  {item.Description}
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ height: "250px" }}>
                <Box
                  sx={{
                    width: "250px",
                    height: "250px",
                    backgroundImage: `url('${item.Image}')`,
                    margin: "0 auto",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                />
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};

export default CategoryPage;
[
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

const HealthTips = [
  {
    Tip:
      "Limit sugary drinks. Sugary drinks like sodas, fruit juices, and sweetened teas are the primary source of added sugar in the diet. They can increase the risk of heart disease and type 2 diabetes. Healthier alternatives include water, unsweetened teas, sparkling water, and coffee.",
    Image: "https://pbs.twimg.com/media/FURqtyZX0AAhwCt.jpg",
    Description:
      "This tip emphasizes the importance of limiting the intake of sugary drinks and suggests healthier alternatives."
  },
  {
    Tip:
      "Eat more whole foods and less processed food. Whole foods are foods that haven’t been heavily processed or altered. They provide your body with more vitamins, minerals, and essential nutrients than processed foods.",
    Image:
      "https://swsphn.com.au/wp-content/uploads/2022/04/eating-healthy.jpg",
    Description:
      "This tip encourages the consumption of whole foods over processed foods for better health and wellness."
  },
  {
    Tip:
      "Start at a comfortable pace, walking as though you are slightly late for an appointment. Maintain good posture while you walk and look straight ahead. Swinging your arms increases your caloric burn greatly. Make sure your arms are moving forward and not crossing in front of you.",
    Image:
      "https://www.healthifyme.com/blog/wp-content/uploads/2020/01/gym-diet-cover-1.jpg",
    Description:
      "This tip is about the importance of walking and maintaining good posture. It's a simple and effective way to boost your health and wellness."
  }
];
