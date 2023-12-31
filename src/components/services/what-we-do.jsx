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
import Link from "next/link";

const GREEN = "#449842";
const BLUE = "#001842";
const RED = "#6A2F2F";
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
import { useRouter } from "next/router";

export default function WhatWeDo() {
  const [selected, setSelected] = useState("");
  const router = useRouter();

  return (
    <Box data-aos="fade-down" data-aos-duration="1000">
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              minHeight: "90vh",
              margin: "0 0 100px 0",
              border: "8px dashed #6A2F2F",
              borderRadius: "32px",
              padding: "80px 32px"
            }}
          >
            <Grid container>
              <Item
                image={"green-icon.png"}
                number={true}
                topic={"PREVENTATIVE CARE"}
                theme={GREEN}
                items={[
                  "Awareness Campaigns",
                  "Adult Vaccinations",
                  "Travel Medicines Clinic"
                ]}
              />
              <Item
                image={"health-status.png"}
                number={false}
                topic={"PRIMARY HEALTH CARE"}
                theme={BLUE}
                items={[
                  "Primary Health Care services are rendered  by Professional nurses for students without medical aid. Consultation is available on an appointment basis and an admin fee apply."
                ]}
              />
              <Item
                image={"red-icon.png"}
                number={true}
                topic={"CONSULTATION"}
                theme={"#6A2F2F"}
                items={[
                  "Consultation is available on an appointment basis and medical aid tariffs apply. Book Now!"
                ]}
              />
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            lg={5.7}
            sx={{
              minHeight: "90vh",
              margin: "0 0 100px 0",
              border: `8px dashed ${BLUE}`,
              borderRadius: "32px",
              padding: "80px 32px",
              "&:hover": {
                background: "rgba(0,24,66,0.3)"
              }
            }}
          >
            <Box data-aos="fade-right" data-aos-duration="1000">
              <Grid container>
                <ItemSmall
                  image={"Thermometer.png"}
                  topic={"MINOR ALIGNMENTS"}
                  theme={BLUE}
                  number={true}
                  items={[
                    "Respiratory Conditions. e.g FLU",
                    "Ear Nose and Throat Conditions",
                    "Eye Conditions",
                    "Skin Conditions",
                    "Sexually Transmitted Infections"
                  ]}
                />
                <ItemSmall
                  image={"medicines.png"}
                  topic={"CHRONIC MEDICATION"}
                  theme={BLUE}
                  number={false}
                  items={[
                    "Antiretroviral (ARV) Medication",
                    "Pre-xposure Prophylaxis",
                    " ",
                    " ",
                    " "
                  ]}
                />
              </Grid>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            lg={5.7}
            sx={{
              minHeight: "90vh",
              margin: "0 0 100px auto",
              border: `8px dashed #6A2F2F`,
              borderRadius: "32px",
              padding: "80px 32px",
              "&:hover": {
                background: "rgb(106,47,47,0.1)"
              }
            }}
          >
            <Box data-aos="fade-left" data-aos-duration="1000">
              <Grid container>
                <ItemSmall
                  image={"doctors-prescription.png"}
                  topic={"SCREENINGS"}
                  theme={"#6A2F2F"}
                  number={false}
                  items={[
                    "Blood Pressure",
                    "Weight",
                    "Body Mass Index",
                    "Blood Glucose",
                    "Blood Cholesterol"
                  ]}
                />
                <ItemSmall
                  image={"young-woman-in-consultations.png"}
                  topic={"WOMENS HEALTH"}
                  theme={"#6A2F2F"}
                  number={true}
                  items={[
                    "Contraceptives",
                    "Oral",
                    "Emergency Pill ( Morning After )",
                    "Infection",
                    "Female Condoms"
                  ]}
                />
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Typography
          className={"hover-me"}
          sx={{
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "left"
          }}
        >
          Find a topic by its first letter :{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: ""
          }}
        >
          {alphabets.map((item, index) => {
            if (selected === item) {
              return (
                <Typography
                  onClick={() => {
                    setSelected(item);
                  }}
                  key={index}
                  sx={{
                    fontSize: "21px",
                    textAlign: "center",
                    background: "#111",
                    color: "white",
                    fontWeight: "600",
                    padding: "12px 21px",
                    margin: "21px 0 21px 21px",
                    transition: "800ms",
                    minWidth: "20px",
                    "&:hover": {
                      background: "#111",
                      color: "white"
                    }
                  }}
                >
                  {item}
                </Typography>
              );
            } else {
              return (
                <Typography
                  onClick={() => {
                    setSelected(item);
                  }}
                  key={index}
                  sx={{
                    fontSize: "21px",
                    textAlign: "center",
                    padding: "12px 21px",
                    transition: "800ms",
                    margin: "21px 0 21px 21px",
                    minWidth: "20px",
                    "&:hover": {
                      background: "#111",
                      color: "white"
                    }
                  }}
                >
                  {item}
                </Typography>
              );
            }
          })}
        </Box>

        <Grid container sx={{ margin: "50px 0" }}>
          {sicknesses.map((item, index) => {
            // if (
            //   selected !== "" &&
            //   selected.split("")[0].toUpperCase() ===
            //     item.title.split("")[0].toUpperCase()
            // ) {
            if (
              selected !== "" &&
              item.title.startsWith(selected.charAt(0).toUpperCase())
            ) {
              console.log(item.url);
              console.log(typeof item.url);
              return (
                <Grid
                  item
                  xs={6}
                  md={3}
                  key={index}
                  // onClick={() => {
                  //   router.push(`${item.url}`, "_blank");
                  // }}
                  sx={{
                    fontSize: "21px",
                    textAlign: "left",
                    color: "#111",
                    transition: "800ms",
                    fontWeight: "600",
                    padding: "21px",
                    margin: "21px 0",
                    "&:hover": {
                      background: "#111",
                      color: "white"
                    }
                  }}
                >
                  <Box aos="fade-up" data-aos-duration="1000">
                    <Link href={item.url} target="_blank">
                      {item.title}
                    </Link>
                  </Box>
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </Box>
  );
}

const Item = ({ number, theme, image, topic, items }) => {
  return (
    <Grid
      item
      xs={12}
      lg={5.5}
      sx={{
        minHeight: { xs: "35vh", lg: "50vh" },
        margin: "50px auto",
        borderRadius: "32px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: number ? "row" : "row-reverse"
        }}
      >
        <Box
          sx={{
            height: { xs: "75px", lg: "180px" },
            width: { xs: "75px", lg: "180px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(2,2,2,.5)"
          }}
        >
          <Box
            sx={{
              height: { xs: "45px", lg: "120px" },
              width: { xs: "45px", lg: "120px" },
              backgroundImage: `url("/${image}")`,
              margin: "auto auto",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat()"
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60px",
            background: theme,
            padding: { xs: "0 12px", lg: "50px" },
            margin: "0"
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "13px", lg: "28px" },
              fontWeight: "600",
              color: "white",
              textAlign: "center"
            }}
          >
            {topic}
          </Typography>
        </Box>
      </Box>
      <ul
        style={{
          padding: "32px",
          width: "fit-contet",
          margin: "0 auto",
          fontSize: "18px",
          textAlign: "center"
        }}
      >
        {items.map((item, index) => {
          return <li key={index}> {item} </li>;
        })}
      </ul>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            background: theme,
            color: "white",
            padding: "21px",
            margin: "21px auto",
            borderRadius: "32px"
          }}
        >
          {" "}
          Book Appointments{" "}
        </Button>
      </Box>
    </Grid>
  );
};

const ItemSmall = ({ number, theme, image, topic, items }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        minHeight: { xs: "35vh", lg: "50vh" },
        margin: "50px auto",
        borderRadius: "32px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: number ? "row" : "row-reverse"
        }}
      >
        <Box
          sx={{
            height: { xs: "75px", lg: "180px" },
            width: { xs: "75px", lg: "180px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(2,2,2,.5)"
          }}
        >
          <Box
            sx={{
              height: { xs: "45px", lg: "120px" },
              width: { xs: "45px", lg: "120px" },
              backgroundImage: `url("/${image}")`,
              margin: "auto auto",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat()"
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60px",
            background: theme,
            padding: { xs: "0 12px", lg: "50px" },
            margin: "0"
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "13px", lg: "28px" },
              fontWeight: "600",
              color: "white",
              textAlign: "center"
            }}
          >
            {topic}
          </Typography>
        </Box>
      </Box>
      <ul
        style={{
          padding: "32px",
          width: "fit-contet",
          margin: "0 auto",
          fontSize: "18px",
          textAlign: "center"
        }}
      >
        {items.map((item, index) => {
          return <li key={index}> {item} </li>;
        })}
      </ul>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            background: theme,
            color: "white",
            padding: "21px",
            margin: "21px auto",
            borderRadius: "32px"
          }}
        >
          {" "}
          Book Appointments{" "}
        </Button>
      </Box>
    </Grid>
  );
};

const sicknesses = [
  {
    title: "Acanthosis nigricans",
    url: "https://en.wikipedia.org/wiki/Acanthosis_nigricans"
  },
  {
    title: "Acne",
    url: "https://en.wikipedia.org/wiki/Acne"
  },
  {
    title: "Acute coronary syndrome",
    url: "https://en.wikipedia.org/wiki/Acute_coronary_syndrome"
  },
  {
    title: "Acute lymphocytic leukemia",
    url: "https://en.wikipedia.org/wiki/Acute_lymphocytic_leukemia"
  },
  {
    title: "Acute myeloid leukemia",
    url: "https://en.wikipedia.org/wiki/Acute_myeloid_leukemia"
  },
  {
    title: "AIDS",
    url: "https://en.wikipedia.org/wiki/AIDS"
  },
  {
    title: "Alcohol dependence",
    url: "https://en.wikipedia.org/wiki/Alcohol_dependence"
  },
  {
    title: "Alzheimer's disease",
    url: "https://en.wikipedia.org/wiki/Alzheimer%27s_disease"
  },
  {
    title: "Amyotrophic lateral sclerosis",
    url: "https://en.wikipedia.org/wiki/Amyotrophic_lateral_sclerosis"
  },
  {
    title: "Anorexia nervosa",
    url: "https://en.wikipedia.org/wiki/Anorexia_nervosa"
  },
  {
    title: "Anxiety disorders",
    url: "https://en.wikipedia.org/wiki/Anxiety_disorder"
  },
  {
    title: "Aortic aneurysm",
    url: "https://en.wikipedia.org/wiki/Aortic_aneurysm"
  },
  {
    title: "Appendicitis",
    url: "https://en.wikipedia.org/wiki/Appendicitis"
  },
  {
    title: "Arthritis",
    url: "https://en.wikipedia.org/wiki/Arthritis"
  },
  {
    title: "Asthma",
    url: "https://en.wikipedia.org/wiki/Asthma"
  },
  {
    title: "Autism spectrum disorder",
    url: "https://en.wikipedia.org/wiki/Autism_spectrum_disorder"
  },
  {
    title: "Bacterial meningitis",
    url: "https://en.wikipedia.org/wiki/Bacterial_meningitis"
  },
  {
    title: "Bipolar disorder",
    url: "https://en.wikipedia.org/wiki/Bipolar_disorder"
  },
  { title: "Bronchitis", url: "https://en.wikipedia.org/wiki/Bronchitis" },
  {
    title: "Bulimia nervosa",
    url: "https://en.wikipedia.org/wiki/Bulimia_nervosa"
  },
  { title: "Cancer", url: "https://en.wikipedia.org/wiki/Cancer" },
  {
    title: "Cardiomyopathy",
    url: "https://en.wikipedia.org/wiki/Cardiomyopathy"
  },
  {
    title: "Cerebral palsy",
    url: "https://en.wikipedia.org/wiki/Cerebral_palsy"
  },
  {
    title: "Chronic obstructive pulmonary disease",
    url: "https://en.wikipedia.org/wiki/Chronic_obstructive_pulmonary_disease"
  },
  { title: "Cirrhosis", url: "https://en.wikipedia.org/wiki/Cirrhosis" },
  { title: "Colitis", url: "https://en.wikipedia.org/wiki/Colitis" },
  {
    title: "Congenital heart defects",
    url: "https://en.wikipedia.org/wiki/Congenital_heart_defect"
  },
  {
    title: "Crohn's disease",
    url: "https://en.wikipedia.org/wiki/Crohn%27s_disease"
  },
  {
    title: "Cystic fibrosis",
    url: "https://en.wikipedia.org/wiki/Cystic_fibrosis"
  },
  { title: "Dengue fever", url: "https://en.wikipedia.org/wiki/Dengue_fever" },
  { title: "Depression", url: "https://en.wikipedia.org/wiki/Depression" },
  { title: "Diabetes", url: "https://en.wikipedia.org/wiki/Diabetes" },
  {
    title: "Down syndrome",
    url: "https://en.wikipedia.org/wiki/Down_syndrome"
  },

  {
    title: "Ebola virus disease",
    url: "https://en.wikipedia.org/wiki/Ebola_virus_disease"
  },
  { title: "Eczema", url: "https://en.wikipedia.org/wiki/Eczema" },
  { title: "Epilepsy", url: "https://en.wikipedia.org/wiki/Epilepsy" },
  {
    title: "Esophageal cancer",
    url: "https://en.wikipedia.org/wiki/Esophageal_cancer"
  },
  { title: "Fibromyalgia", url: "https://en.wikipedia.org/wiki/Fibromyalgia" },
  { title: "Flu", url: "https://en.wikipedia.org/wiki/Influenza" },
  {
    title: "Food poisoning",
    url: "https://en.wikipedia.org/wiki/Foodborne_illness"
  },
  { title: "Fractures", url: "https://en.wikipedia.org/wiki/Fracture" },
  { title: "Gastritis", url: "https://en.wikipedia.org/wiki/Gastritis" },
  { title: "Glaucoma", url: "https://en.wikipedia.org/wiki/Glaucoma" },
  { title: "Gonorrhea", url: "https://en.wikipedia.org/wiki/Gonorrhea" },
  { title: "Gout", url: "https://en.wikipedia.org/wiki/Gout" },
  {
    title: "Heart attack",
    url: "https://en.wikipedia.org/wiki/Myocardial_infarction"
  },
  { title: "Hepatitis", url: "https://en.wikipedia.org/wiki/Hepatitis" },
  { title: "Herpes", url: "https://en.wikipedia.org/wiki/Herpes_simplex" },
  { title: "HIV infection", url: "https://en.wikipedia.org/wiki/HIV/AIDS" },
  {
    title: "Huntington's disease",
    url: "https://en.wikipedia.org/wiki/Huntington%27s_disease"
  },
  {
    title: "Inflammatory bowel disease",
    url: "https://en.wikipedia.org/wiki/Inflammatory_bowel_disease"
  },
  { title: "Influenza", url: "https://en.wikipedia.org/wiki/Influenza" },
  {
    title: "Kidney disease",
    url: "https://en.wikipedia.org/wiki/Kidney_disease"
  },
  { title: "Leukemia", url: "https://en.wikipedia.org/wiki/Leukemia" },
  { title: "Lupus", url: "https://en.wikipedia.org/wiki/Lupus" },
  { title: "Lyme disease", url: "https://en.wikipedia.org/wiki/Lyme_disease" },
  { title: "Malaria", url: "https://en.wikipedia.org/wiki/Malaria" },
  {
    title: "Multiple sclerosis",
    url: "https://en.wikipedia.org/wiki/Multiple_sclerosis"
  },
  {
    title: "Muscular dystrophy",
    url: "https://en.wikipedia.org/wiki/Muscular_dystrophy"
  },
  { title: "Mumps", url: "https://en.wikipedia.org/wiki/Mumps" },
  {
    title: "Myocardial infarction",
    url: "https://en.wikipedia.org/wiki/Myocardial_infarction"
  },
  { title: "Obesity", url: "https://en.wikipedia.org/wiki/Obesity" },
  {
    title: "Obsessive-compulsive disorder",
    url: "https://en.wikipedia.org/wiki/Obsessive-compulsive_disorder"
  },
  { title: "Osteoporosis", url: "https://en.wikipedia.org/wiki/Osteoporosis" },
  { title: "Pancreatitis", url: "https://en.wikipedia.org/wiki/Pancreatitis" },
  {
    title: "Parkinson's disease",
    url: "https://en.wikipedia.org/wiki/Parkinson%27s_disease"
  },
  {
    title: "Pelvic inflammatory disease",
    url: "https://en.wikipedia.org/wiki/Pelvic_inflammatory_disease"
  },
  { title: "Pneumonia", url: "https://en.wikipedia.org/wiki/Pneumonia" },
  {
    title: "Post-traumatic stress disorder",
    url: "https://en.wikipedia.org/wiki/Post-traumatic_stress_disorder"
  },
  {
    title: "Prostate cancer",
    url: "https://en.wikipedia.org/wiki/Prostate_cancer"
  },
  { title: "Psoriasis", url: "https://en.wikipedia.org/wiki/Psoriasis" },
  { title: "Psychosis", url: "https://en.wikipedia.org/wiki/Psychosis" },
  {
    title: "Pulmonary embolism",
    url: "https://en.wikipedia.org/wiki/Pulmonary_embolism"
  },
  { title: "Rabies", url: "https://en.wikipedia.org/wiki/Rabies" },
  {
    title: "Rheumatoid arthritis",
    url: "https://en.wikipedia.org/wiki/Rheumatoid_arthritis"
  },
  {
    title: "Schizophrenia",
    url: "https://en.wikipedia.org/wiki/Schizophrenia"
  },
  { title: "Seizures", url: "https://en.wikipedia.org/wiki/Seizure" },
  { title: "Sepsis", url: "https://en.wikipedia.org/wiki/Sepsis" },
  {
    title: "Sickle cell anemia",
    url: "https://en.wikipedia.org/wiki/Sickle_cell_disease"
  },
  { title: "Skin cancer", url: "https://en.wikipedia.org/wiki/Skin_cancer" },
  {
    title: "Spinal cord injury",
    url: "https://en.wikipedia.org/wiki/Spinal_cord_injury"
  },
  { title: "Stroke", url: "https://en.wikipedia.org/wiki/Stroke" },
  { title: "Syphilis", url: "https://en.wikipedia.org/wiki/Syphilis" },
  { title: "Tetanus", url: "https://en.wikipedia.org/wiki/Tetanus" },
  { title: "Thalassemia", url: "https://en.wikipedia.org/wiki/Thalassemia" },
  { title: "Tuberculosis", url: "https://en.wikipedia.org/wiki/Tuberculosis" },
  {
    title: "Ulcerative colitis",
    url: "https://en.wikipedia.org/wiki/Ulcerative_colitis"
  },
  {
    title: "Urinary tract infections",
    url: "https://en.wikipedia.org/wiki/Urinary_tract_infection"
  },
  {
    title: "Viral meningitis",
    url: "https://en.wikipedia.org/wiki/Viral_meningitis"
  },
  {
    title: "West Nile virus",
    url: "https://en.wikipedia.org/wiki/West_Nile_virus"
  },
  {
    title: "Zika virus disease",
    url: "https://en.wikipedia.org/wiki/Zika_virus_disease"
  }
];
