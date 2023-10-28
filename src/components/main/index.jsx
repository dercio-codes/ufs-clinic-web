import React from "react";
import { Box, Typography, Grid, Menu, Tooltip } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GREEN = "#"

export const Main = () => {
  return (
    <Box>
      <Box sx={{ height: "5vh", background: "blue" }} />
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Grid container>
          <Grid item xs={2} sx={{ padding: "30px", backgroundImage: "url('/qwaqwa-logo.jpg')" , backgroundSize:'contain' , backgroundPosition:'left' }}></Grid>
          <Grid
            item
            xs={10}
            sx={{
              padding: "30px",
              background: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <MenuDrop />
            <MenuDrop />
            <MenuDrop />
            <MenuDrop />
         
          </Grid>
        </Grid>
      </Box>
          <Box sx={{ height:'50vh', padding: "30px", backgroundImage: "url('/qwaqwa-banner.jpg')" , backgroundSize:'cover' , backgroundPosition:'left' }}/>


      <Box sx={{ width: "90%", margin: "0 auto" }}>
<Grid container>
          <Grid item xs={9} sx={{ padding: "30px", background: "" }}>
        <TitleHeader text={"Qwa Qwa Clinic Wellness "}/>

        <Box sx={{ display:'flex' , justifyContent:'space-between' }} >

<CardItem text={"HIgh Blood Pressure"} />
<CardItem text={"HIV"} />
<CardItem text={"Diabetes"} />
<CardItem text={"Tubercolosis"} />
<CardItem text={"See All..."} />

        </Box>

 <Typography sx={{ fontSize:'42px' , margin:'8px 0' , fontWeight:'300' , textAlign:'left' }} > Schedule an appointment with <span style={{ color:'green' , fontWeight:'600' , TextDecoration:'uppercase' }} >A PSYCHOLOGIST</span>. </Typography>
 <Typography sx={{ fontSize:'24px' , width:'75%' , margin:'8px 0' , fontWeight:'100' , textAlign:'left' }} > INcludes Session Doctors and Primary Health Care by Professional nurses. </Typography>

          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              background: "green",
              alignItems: "center",
              marginTop:'100px'
            }}
          >
            <Box sx={{ margin:'32px 0' , width:'100%' , height:'150px' , borderLeft:'10px solid blue' }} >


            </Box>
             <Box sx={{ margin:'32px 0' , width:'100%' , height:'150px' , borderLeft:'10px solid blue' }} >


            </Box>
             <Box sx={{ margin:'32px 0' , width:'100%' , height:'150px' , borderLeft:'10px solid blue' }} >


            </Box>
        </Grid>
        </Grid>

      </Box>
    </Box>
  );
};

const MenuDrop = () => {
  const [open,setOpen]=React.useState(false);

  const handleToggle = () => {setOpen(!open)}
  return (
    <Box>
    <Typography onMouseEnter={handleToggle} sx={{ display: "flex", alignItems: "center" }}>
      Campaigns <ExpandMoreIcon />{" "}
    </Typography>
    
    <Menu open={open} onBlur={handleToggle} sx={{ width:'300px' , height:'50vh' , background:'red' }} >


    </Menu>
    </Box>
  );
};


const TitleHeader = ({text}) => {
  return(
 <Typography sx={{ fontSize:'34px' , fontWeight:'600' , margin:'32px 0' }} > {text} </Typography>
    )
} 

const CardItem = ({text}) => {
  return(
<Box sx={{ width:'120px' }} >
<Box sx={{ height:'120px' , width:'120px' , background:'yellow'}} />
 <Typography sx={{ fontSize:'16px' , margin:'8px 0' , fontWeight:'600' , textAlign:'center' }} > {text} </Typography>

</Box>

    )
}