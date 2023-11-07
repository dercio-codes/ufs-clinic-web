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

export default function Footer() {
	return (
		<Box sx={{ height: "", width: "100%", margin: "0 auto" }}>
			<Box
				sx={{
					width: "90%",
					margin: "0 auto",
					background: "red",
					padding: "32px 21px",
					borderRadius: "0 0 21px 21px",
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

			<Grid container columnSpacing={12}>
				<Grid
					item
					xs={6}
					md={3.5}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography
						sx={{
							fontStyle: "italic",
							width: "50%",
							fontSize: "21px",
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
					md={3}
					sx={{
						height: "180px",
						background: "",
						margin: "32px 0",
						backgroundImage: "url('/footer-atomus-logo.png')",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "right",
						scale: "0.7",
					}}
				></Grid>
				<Grid
					item
					xs={12}
					md={5}
					sx={{
						height: "180px",
						background: "",
						margin: "32px 0",
						backgroundImage: "url('/qwaqwa-logo.jpg')",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						scale: "0.7",
					}}
				></Grid>
			</Grid>
		</Box>
	);
}
