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
const RED = "#6A2F2F";
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function WhatWeDo() {
	const [selected, setSelected] = useState("");

	return (
            <Box data-aos="fade-down" data-aos-duration="1000" >

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
						padding: "80px 32px",
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
								"Travel Medicines Clinic",
							]}
						/>
						<Item
							image={"health-status.png"}
							number={false}
							topic={"PRIMARY HEALTH CARE"}
							theme={BLUE}
							items={[
								"Primary Health Care services are rendered  by Professional nurses for students without medical aid. Consultation is available on an appointment basis and an admin fee apply.",
							]}
						/>
						<Item
							image={"red-icon.png"}
							number={true}
							topic={"CONSULTATION"}
							theme={"#6A2F2F"}
							items={[
								"Consultation is available on an appointment basis and medical aid tariffs apply. Book Now!",
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
						"&:hover":{
background:'rgba(0,24,66,0.3)',
						}
					}}
				>
            <Box data-aos="fade-right" data-aos-duration="1000" >

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
								"Sexually Transmitted Infections",
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
								" ",
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
						"&:hover":{
							background:"rgb(106,47,47,0.1)"
						}
					}}
				>
            <Box data-aos="fade-left" data-aos-duration="1000" >

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
								"Blood Cholesterol",
							]}
						/>
						<ItemSmall
							image={
								"young-woman-in-consultations.png"
							}
							topic={"WOMENS HEALTH"}
							theme={"#6A2F2F"}
							number={true}
							items={[
								"Contraceptives",
								"Oral",
								"Emergency Pill ( Morning After )",
								"Infection",
								"Female Condoms",
							]}
						/>
					</Grid>
					</Box>
				</Grid>
			</Grid>
			<Typography className={"hover-me"}
				sx={{
					fontSize: "24px",
					fontWeight: "600",
					textAlign: "left",
				}}
			>
				Find a topic by its first letter :{" "}
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
					md={2.5}
					sx={{
						height: "70vh",
					}}
				>
					<Box
						sx={{
							height: "",
							width: "100%",
							margin: "0 auto",
						}}
					>
						<Box
							sx={{
								height: { xs:"65px" , lg:"120px"},
								background: "",
								margin: "32px 0",
								backgroundImage:
									"url('/plain.png')",
								backgroundSize: "contain",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								scale: "1",
							}}
						></Box>
						<Box
							sx={{
								height: "35vh",
								backgroundImage:
									'url("/sky.jpg")',
								backgroundPosition: "right",
								backgroundSize: "cover",
								backgroundAttachment: "fixed",
							}}
						>
							<Box
								sx={{
									background:
										"rgba(1,1,1,.5)",
									width: "100%",
									height: "100%",
									opacity: "0.5",
								}}
							/>
						</Box>
						<Box
							sx={{
								width: "100%",
								margin: "0 auto",
								background: RED,
								padding: "32px 21px",
								borderRadius: "0 0 21px 21px",
							}}
						>
							{" "}
							<Typography
								sx={{
									fontSize: "12px",
									color: "white",
									fontWeight: "600",
								}}
							>
								{" "}
								+27 51 401 9111 | info@ufs.ac.za
								| www.ufs.ac.za
							</Typography>
						</Box>

						<Grid container>
							<Grid
								item
								xs={6}
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{
										fontStyle: "italic",
										fontSize: "10px",
									}}
								>
									{" "}
									Inspiring
									excellence,transforming
									lives through quality
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
									backgroundImage:
										"url('/qwaqwa-logo.jpg')",
									backgroundSize: "contain",
									backgroundRepeat:
										"no-repeat",
									backgroundPosition:
										"center",
									scale: "0.7",
								}}
							></Grid>
						</Grid>
					</Box>
				</Grid>

				<Grid
					item
					xs={12}
					md={4}
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
				<Grid
					item
					xs={4}
					sx={{
						display: "flex",
						minHeight: { lg: "70vh" },
						justifyContent: "flex-end",
						alignItems: "flex-end",
					}}
				>
					<Box
						sx={{
							height: "250px",
							width: "100%",
							backgroundImage: `url("/contact-image.png")`,
							backgroundSize: "contain",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					/>
				</Grid>
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
						height: { xs:'75px', lg:"180px"},
						width: { xs:'75px', lg:"180px"},
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						border: "1px solid rgba(2,2,2,.5)",
					}}
				>

					<Box
						sx={{
							height: { xs:"65px" , lg:"120px"},
							width: { xs:"65px" , lg:"120px"},
							backgroundImage: `url("/${image}")`,
							margin: "auto auto",
							backgroundSize: "contain",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat()",
						}}
					/>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100px",
						background: theme,
						padding: { xs:'0 12px' , lg:"50px"},
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
					textAlign: "center",
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

const ItemSmall = ({ number, theme, image, topic, items }) => {
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
						height: { xs:'75px', lg:"180px"},
						width: { xs:'75px', lg:"180px"},
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						border: "1px solid rgba(2,2,2,.5)",
					}}
				>
					<Box
						sx={{
							height: { xs:"65px" , lg:"120px"},
							width: { xs:"65px" , lg:"120px"},
							backgroundImage: `url("/${image}")`,
							margin: "auto auto",
							backgroundSize: "contain",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat()",
						}}
					/>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100px",
						background: theme,
						padding: { xs:'0 12px' , lg:"50px"},
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
					textAlign: "center",
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
