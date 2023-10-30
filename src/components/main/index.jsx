import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Menu, Tooltip , Paper} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Carousel  from "./../carousel";

const GREEN = "#449842"
const BLUE = "#001842"


export const Main = () => {


  return (
    <Box>
      <Box sx={{ height: "5vh", background: "blue" }} />
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Grid container>
          <Grid item xs={2} sx={{ padding: "30px", backgroundImage: "url('/qwaqwa-logo.jpg')" , backgroundSize:'contain' , backgroundPosition:'left' , backgroundRepeat:'no-repeat' }}></Grid>
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
            <NavItem />
            <MenuDrop />
            <MenuDrop />
            <MenuDrop />
         
          </Grid>
        </Grid>
      </Box>
          <Box sx={{ height:'50vh', padding: "30px", backgroundImage: "url('/qwaqwa-banner.jpg')" , backgroundSize:'cover' , backgroundPosition:'left' }}/>


      <Box sx={{ width: "90%", margin: "0 auto" }}>
<Grid container columnSpacing={6} >
          <Grid item xs={9} sx={{ padding: "30px", background: "" }}>
        <TitleHeader text={"Qwa Qwa Clinic Wellness "}/>

        <Box sx={{ display:'flex' , justifyContent:'space-between' }} >

            <CardItem text={"HIgh Blood Pressure"} />
            <CardItem text={"HIV"} />
            <CardItem text={"Diabetes"} />
            <CardItem text={"Tubercolosis"} />
            <CardItem text={"See All..."} />

        </Box>

 <Typography sx={{ fontSize:'38px' , margin:'8px 0' , fontWeight:'300' , textAlign:'left' , display:'flex' , alignItems:'center'}} > <DoctorHeader />. </Typography>
 <Typography sx={{ fontSize:'24px' , width:'75%' , margin:'8px 0' , fontWeight:'100' , textAlign:'left' }} > Includes Session Doctors and Primary Health Care by Professional nurses. </Typography>

          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              alignItems: "center",
              padding:'115px 0'
            }}
          >
            <Paper elevation={3} sx={{ "&:hover":{ background:'rgba(1,1,1,.2)' } , margin:'32px 0' , width:'100%' , height:'100px' , borderLeft:'10px solid blue' , display:'flex' , alignItems:'center' , justifyContent:'space-between' , padding:'0 21px' }} >

                <SearchIcon sx={{ fontSize:'35px' , color:'blue' }} />
                <Typography sx={{  }} > Find a Nurse  </Typography>
                <ArrowForwardIcon sx={{ color:'blue'}} />

            </Paper>
             <Paper elevation={3} sx={{ "&:hover":{ background:'rgba(1,1,1,.2)' } , margin:'32px 0' , width:'100%' , height:'100px' , borderLeft:'10px solid blue' , display:'flex' , alignItems:'center' , justifyContent:'space-between' , padding:'0 21px' }} >
                <TipsAndUpdatesIcon sx={{ fontSize:'35px' , color:'blue' }} />
                <Typography sx={{  }} > Tips  </Typography>
                <ArrowForwardIcon sx={{ color:'blue'}} />

            </Paper>
             <Paper elevation={3} sx={{ "&:hover":{ background:'rgba(1,1,1,.2)' } , margin:'32px 0' , width:'100%' , height:'100px' , borderLeft:'10px solid blue' , display:'flex' , alignItems:'center' , justifyContent:'space-between' , padding:'0 21px' }} >
                <CallIcon sx={{ fontSize:'35px' , color:'blue' }} />
                <Typography sx={{  }} > Contact Us   </Typography>
                <ArrowForwardIcon sx={{ color:'blue'}} />

            </Paper>
        </Grid>

        <Grid md={3.5} sx={{ margin:'32px auto 80px auto' , height:'350px' , background:'' }} >
          <Box sx={{ height:'300px' , width:'100%' , backgroundImage: "url('/hero-8.png')" , backgroundSize:'cover' , backgroundPosition:'center' , backgroundRepeat:'no-repeat'  }} />
          <Typography sx={{ textAlign:'center' }} > Access quickly to the availablility of all your practitioners </Typography>
        </Grid>
        <Grid md={3.5} sx={{ margin:'32px auto 80px auto' , height:'350px' , background:'' }} >
          <Box sx={{ height:'300px' , width:'100%' , backgroundImage: "url('/hero-7.png')" , backgroundSize:'cover' , backgroundPosition:'center' , backgroundRepeat:'no-repeat'  }} />
          <Typography sx={{ textAlign:'center' }} > A company of practitioners to accompany you. </Typography>
        </Grid>
        <Grid md={3.5} sx={{ margin:'32px auto 80px auto' , height:'350px' , background:'' }} >
          <Box sx={{ height:'300px' , width:'100%' , backgroundImage: "url('/hero-8.png')" , backgroundSize:'cover' , backgroundPosition:'center' , backgroundRepeat:'no-repeat'  }} />
          <Typography sx={{ textAlign:'center' }} > Manage your Appointments and get health tips as well. </Typography>
        </Grid>
        </Grid>


        <Typography style={{ fontWeight:'600' ,color:GREEN , fontSize:'40px' }} >{"Campaigns"}</Typography>
        <Box sx={{ margin:'50px 0' }} >
        <Carousel />
        </Box>

        <Box sx={{ margin:'50px 0' }} >
        <Carousel />
        </Box>

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

function NavItem() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box 
        sx={{ width:'800px' , height:'50vh' , background:'' }}

         >


        </Box>
      </Menu>
    </div>
  );
}


const DoctorHeader = () => {
  const doctors = [  "General practitioner",
  "Emergency physician",
  "Obstetrician (OB)",
  "gynecologist (GYN)",
  "Dermatologist",
  "Disease specialist",
  "HIV/AIDS specialist",];
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);

  // Function to cycle through the doctors
  const cycleDoctors = () => {
    setCurrentDoctorIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  useEffect(() => {
    // Set a timer to change the displayed doctor every 8 seconds
    const timer = setTimeout(cycleDoctors, 3000);

    return () => {
      // Clear the timer when the component unmounts
      clearTimeout(timer);
    };
  }, [currentDoctorIndex]);

  return (
    <Typography sx={{ fontSize:'38px', textDecoration:'uppercase'}} >{"Schedule an appointment with "} <span style={{ fontWeight:'600' ,color:GREEN , fontSize:'40px' }} >{doctors[currentDoctorIndex].toUpperCase()}</span></Typography>
    
  );
};