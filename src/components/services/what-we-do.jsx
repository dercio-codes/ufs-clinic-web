import React, { useState, useEffect } from "react";
import {
	Box,
	Typography,
	Grid,
	Menu,
	Tooltip,
	Paper,
	Button,
} from "@mui/material";

const GREEN = "#449842";
const BLUE = "#001842";
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function WhatWeDo() {
	const [selected, setSelected] = useState("");

	return (
		<Box sx={{ width: "90%", margin: "0 auto" }}>
			<Grid container>
				<Grid
					item
					xs={12}
					sx={{
						minHeight: "90vh",
						margin: "0 0 100px 0",
						border: "8px dashed red",
						borderRadius: "32px",
						padding: "80px 32px",
					}}
				>
					<Grid container>
						<Item number={true} theme={GREEN} />
						<Item number={false} theme={BLUE} />
						<Item number={true} theme={"red"} />
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
					}}
				>
					<Grid container>
						<ItemSmall theme={BLUE} number={true} />
						<ItemSmall theme={BLUE} number={false} />
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					lg={5.7}
					sx={{
						minHeight: "90vh",
						margin: "0 0 100px auto",
						border: `8px dashed RED`,
						borderRadius: "32px",
						padding: "80px 32px",
					}}
				>
					<Grid container>
						<ItemSmall theme={"red"} number={true} />
						<ItemSmall theme={"red"} number={false} />
					</Grid>
				</Grid>
			</Grid>
			<Typography
				sx={{
					fontSize: "24px",
					fontWeight: "600",
					textAlign: "left",
				}}
			>
				Find a topic by its first letter :
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "",
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
									minWidth: "20px",
									"&:hover": {
										background: "#111",
										color: "white",
									},
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
									margin: "21px 0 21px 21px",
									minWidth: "20px",
									"&:hover": {
										background: "#111",
										color: "white",
									},
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
					if (
						selected !== "" &&
						selected.split("")[0].toUpperCase() ===
							item.split("")[0].toUpperCase()
					) {
						return (
							<Grid
								item
								xs={6}
								md={3}
								key={index}
								sx={{
									fontSize: "21px",
									textAlign: "left",
									color: "#111",
									fontWeight: "600",
									padding: "21px",
									margin: "21px 0",
									"&:hover": {
										background: "#111",
										color: "white",
									},
								}}
							>
								{item}
							</Grid>
						);
					}
				})}
			</Grid>

			<Grid container>
				<Grid
					item
					xs={12}
					md={3}
					sx={{
						height: "fit-content",
						background: GREEN,
					}}
				></Grid>

				<Grid
					item
					xs={12}
					md={9}
					sx={{
						padding: "0 32px",
					}}
				>
					<Typography
						sx={{
							fontSize: "50px",
							color: GREEN,
							fontWeight: "500",
						}}
					>
						{" "}
						Contact{" "}
					</Typography>
					<Typography
						sx={{ fontSize: "21px", margin: "12px 0" }}
					>
						{" "}
						Sister Mathapelo Moloi{" "}
					</Typography>
					<Typography
						sx={{ fontSize: "21px", margin: "12px 0" }}
					>
						{" "}
						T: +27 58 718 5210/5228{" "}
					</Typography>
					<Typography
						sx={{ fontSize: "21px", margin: "12px 0" }}
					>
						{" "}
						E: MoloiMA@ufs.ac.za{" "}
					</Typography>

					<Typography
						sx={{
							fontSize: "50px",
							color: GREEN,
							fontWeight: "500",
							margin: "48px 0 32px 0",
						}}
					>
						{" "}
						Clinic Staff{" "}
					</Typography>
					<Typography
						sx={{ fontSize: "21px", margin: "12px 0" }}
					>
						{" "}
						Mathapelo Moloi (Chief Officer){" "}
					</Typography>
					<Typography
						sx={{ fontSize: "21px", margin: "12px 0" }}
					>
						{" "}
						Modise NL (Senior Officer){" "}
					</Typography>
					<Typography
						sx={{ fontSize: "21px", margin: "12px 0" }}
					>
						{" "}
						Mokhethi TF (Assisstant Offer){" "}
					</Typography>
					<Typography
						sx={{ fontSize: "21px", margin: "12px 0" }}
					>
						{" "}
						DR Mohlala (Assisstant Offer){" "}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}

const Item = ({ number, theme }) => {
	return (
		<Grid
			item
			xs={12}
			lg={5.5}
			sx={{
				minHeight: "50vh",
				margin: "50px auto",
				borderRadius: "32px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: number ? "row" : "row-reverse",
				}}
			>
				<Box
					sx={{
						height: "200px",
						width: "200px",
						border: "1px solid black",
					}}
				></Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100px",
						background: theme,
						padding: "50px",
						margin: "0",
					}}
				>
					<Typography
						sx={{
							fontSize: "34px",
							fontWeight: "600",
							color: "white",
							textAlign: "center",
						}}
					>
						WHAT WE DO
					</Typography>
				</Box>
			</Box>
			<ul
				style={{
					padding: "32px",
					width: "fit-contet",
					margin: "0 auto",
					fontSize: "18px",
					textAlign: "center",
				}}
			>
				<li>Medical examinations</li>
				<li>Treatment of minor illnesses and injuries</li>
				<li>
					Screening for sexually transmitted diseases (STDs)
				</li>
				<li>Pregnancy tests</li>
				<li>Psychosocial counseling</li>
				<li>Health education and promotion</li>
			</ul>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Button
					sx={{
						background: theme,
						color: "white",
						padding: "21px",
						margin: "21px auto",
						borderRadius: "32px",
					}}
				>
					{" "}
					Book Appointments{" "}
				</Button>
			</Box>
		</Grid>
	);
};

const ItemSmall = ({ number, theme }) => {
	return (
		<Grid
			item
			xs={12}
			sx={{
				minHeight: "50vh",
				margin: "50px auto",
				borderRadius: "32px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: number ? "row" : "row-reverse",
				}}
			>
				<Box
					sx={{
						height: "200px",
						width: "200px",
						border: "1px solid black",
					}}
				></Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100px",
						background: theme,
						padding: "50px",
						margin: "0",
					}}
				>
					<Typography
						sx={{
							fontSize: "28px",
							fontWeight: "600",
							color: "white",
							textAlign: "center",
						}}
					>
						WHAT WE DO
					</Typography>
				</Box>
			</Box>
			<ul
				style={{
					padding: "32px",
					width: "fit-contet",
					margin: "0 auto",
					fontSize: "18px",
					textAlign: "center",
				}}
			>
				<li>Medical examinations</li>
				<li>Treatment of minor illnesses and injuries</li>
				<li>
					Screening for sexually transmitted diseases (STDs)
				</li>
				<li>Pregnancy tests</li>
				<li>Psychosocial counseling</li>
				<li>Health education and promotion</li>
			</ul>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Button
					sx={{
						background: theme,
						color: "white",
						padding: "21px",
						margin: "21px auto",
						borderRadius: "32px",
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
