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

export default function Carousel() {
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
          backgroundSize: { xs: "cover", lg: "cover" },
          backgroundPosition: "left center"
        }}
      />
      <Box sx={{ width: "100%", background: "", padding: "0 32px" }}>
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
        />
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
          CAMPAGINS
        </Typography>

        <Grid
          container
          sx={{
            margin: "auto auto",
            display: "flex",
            flexDirection: { xs: "column-reverse", lg: "row" }
          }}
        >
          <Grid
            item
            xs={12}
            lg={2.5}
            sx={{
              margin: { xs: "12px auto", lg: "32px auto" },
              background: "#D7D7D7",
              zIndex: "3"
            }}
          >
            {/* <Typography
              sx={{
                fontSize: "24px",
                width: "250px",
                margin: "0",
                padding: "21px",
                fontWeight: "600",
                textAlign: "center",
                color: "white",
                background: GREEN,
                position: "fixed",
                left: "0",
                cursor: "pointer",
                opacity: "0.75",
                transition: "800ms",
                "&:hover": {
                  opacity: "1"
                },
                bottom: "32px",
                display: { xs: "block", lg: "none" }
              }}
              onClick={handleToggle}
            >
              HELPLINES
            </Typography> */}

            <Typography
              sx={{
                fontSize: "24px",
                width: "100%",
                margin: "0",
                padding: "21px",
                fontWeight: "600",
                textAlign: "center",
                color: "white",
                background: GREEN
                // display: { xs: "none", lg: "block" }
              }}
            >
              HELPLINES
            </Typography>

            <Box
              sx={{
                // display: { xs: open ? "block" : "none", lg: "block" },
                padding: "0 21px"
              }}
            >
              {Helplines.map((item, index) => {
                return (
                  <Box key={index}>
                    <Typography
                      key={item.category}
                      sx={{
                        fontSize: "18px",
                        width: "100%",
                        margin: "0",
                        padding: "12px 0",
                        fontWeight: "300",
                        textAlign: "center",
                        color: "#111"
                      }}
                    >
                      {item.category}
                    </Typography>
                    {item.helplines &&
                      item.helplines.map((line, indexIndex) => {
                        return (
                          <Box key={indexIndex}>
                            <Typography
                              key={line.name}
                              sx={{
                                fontSize: "18px",
                                width: "100%",
                                margin: "21px 0 0 0",
                                padding: "12px 0",
                                fontWeight: "600",
                                textAlign: "center",
                                color: GREEN
                              }}
                            >
                              {line.name}
                            </Typography>
                            {line.phone_number && (
                              <Typography
                                key={line.phone_number}
                                sx={{
                                  fontSize: "18px",
                                  width: "100%",
                                  margin: "0",
                                  padding: "0",
                                  fontWeight: "300",
                                  textAlign: "center",
                                  color: "#111"
                                }}
                              >
                                {line.phone_number}
                              </Typography>
                            )}
                            {line.sms_number && (
                              <Typography
                                key={line.sms_number}
                                sx={{
                                  fontSize: "16px",
                                  width: "100%",
                                  margin: "0",
                                  padding: "6px 0",
                                  fontWeight: "300",
                                  textAlign: "center",
                                  color: "#111"
                                }}
                              >
                                {"SMS"} {line.sms_number}
                              </Typography>
                            )}
                          </Box>
                        );
                      })}
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} lg={9.5} sx={{}}>
            {campaigns.map((item, index) => {
              return (
                <CampaignRow
                  key={index}
                  reversed={index % 2 == 0}
                  campaign={item}
                />
              );
            })}
          </Grid>
        </Grid>
      </Box>
      {/* <Box data-aos="fade-right" data-aos-duration="5000"> */}
      <Box
        sx={{
          height: { xs: "30vh", lg: "50vh" },
          padding: "30px",
          backgroundImage: "url('/tips-banner.jpg')",
          backgroundSize: { xs: "cover", lg: "contain" },
          backgroundPosition: "left center"
        }}
      />
      {/* </Box> */}
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
          top: "calc(220%)"
        }}
      />
    </Box>
  );
}

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
          backgroundRepeat: "no-repeat"
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
          justifyContent: "center"
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
            color: "#111"
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
            color: "#111"
          }}
        >
          {campaign.description}
        </Typography>
        <Button
          sx={{
            background: "#111",
            color: "white",
            fontWeight: "600",
            padding: "21px 48px",
            margin: "21px auto",
            transition: "800ms",
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
      <Grid item xs={12}>
        <Divider
          sx={{ width: "50%", margin: { xs: "21px auto", lg: "64px auto" } }}
        />
      </Grid>
    </Grid>
  );
};

const paralaxxEffect = () => {
  return (
    <Box
      sx={{
        fontSize: "24px",
        width: "250px",
        width: "250px",
        margin: "0",
        padding: "21px",
        fontWeight: "600",
        textAlign: "center",
        color: "red",
        background: GREEN,
        position: "fixed",
        left: "0",
        cursor: "pointer",
        opacity: "0.75",
        transition: "800ms",
        "&:hover": {
          opacity: "1"
        },
        top: "32px",
        zIndex: 9999
      }}
    >
      HELPLINES
    </Box>
  );
};

const campaigns = [
  {
    id: 1,
    title: "Join the Student Volunteer Initiative",
    description:
      "Make a positive impact on your community! Join our student volunteer initiative and contribute to meaningful projects that tackle important social issues. By volunteering, you can gain valuable skills, make new friends, and create lasting memories. Together, let's make a difference!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBVLDk7Wyd95R2jpxl1kPUN_6jYSvP_Nw0NdkylkzcQ&s"
  },
  {
    id: 2,
    title: "Raise Awareness for Mental Health",
    description:
      "Help break the stigma surrounding mental health! Join our campaign to raise awareness and promote mental well-being on campus. Through informative workshops, engaging events, and open discussions, we aim to create a supportive environment for all students. Together, let's advocate for mental health and ensure that no one faces these challenges alone.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxQhwLBwDj0ISC4Trj_TRz6-NXWm334NqI6eKMblFog&s"
  },
  {
    id: 3,
    title: "Support Sustainable Living",
    description:
      "Be part of the sustainability movement! Join our campaign to promote eco-friendly practices and raise awareness about environmental issues. From organizing sustainable events to implementing recycling initiatives, we are committed to creating a greener campus. Together, let's build a more sustainable future!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7CKU0ZRP_TxKHrRQszu9T6bjOTBWxUjVPan4otJT7g&s"
  }
];

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
  "Zika virus disease"
];

const Helplines = [
  {
    category: "24-HOUR TOLL-FREE EMERGENCY HELPLINES",
    helplines: [
      {
        name: "Suicide Crisis Helpline",
        phone_number: "0800 567 567"
      },
      {
        name: "Department of Social Development Substance Abuse Helpline",
        phone_number: "0800 12 13 14",
        sms_number: "32312"
      },
      {
        name: "Cipla Mental Health Helpline",
        phone_number: "0800 456 789",
        sms_number: "31393"
      },
      {
        name: "NPOwer SA Helpline",
        phone_number: "0800 515 515",
        sms_number: "43010"
      },
      {
        name: "Healthcare Workers Care Network Helpline",
        phone_number: "0800 21 21 21",
        sms_number: "43001"
      },
      {
        name: "UFS #Fair Kitchens Chefs Helpline",
        phone_number: "0800 006 333"
      }
    ]
  },
  {
    category: "8AM-8PM TOLL-FREE HELPLINES",
    helplines: [
      {
        name: "Dr Reddy’s Mental Health Helpline",
        phone_number: "0800 21 22 23"
      },
      {
        name: "Adcock Ingram Depression & Anxiety Helpline",
        phone_number: "0800 70 80 90"
      },
      {
        name: "ADHD Helpline",
        phone_number: "0800 55 44 33"
      },
      {
        name: "Pharma Dynamics Police & Trauma Helpline",
        phone_number: "0800 20 50 26"
      }
    ]
  },
  {
    category: "8AM-8PM SADAG OFFICE NUMBER",
    helplines: [
      {
        name: "SADAG",
        phone_number: "011 234 4837"
      }
    ]
  }
];
