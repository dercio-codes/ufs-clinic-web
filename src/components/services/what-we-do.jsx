import { Box, Typography, Grid, Menu, Tooltip , Paper , Button} from "@mui/material";


const GREEN = "#449842"
const BLUE = "#001842"


export default function WhatWeDo() {
	return(
 <Box sx={{ width:'90%' , margin:'0 auto' }} >
      <Grid container>
      <Grid item xs={12} sx={{ minHeight:'90vh' , margin:'0 0 100px 0' , border:'8px dashed red' , borderRadius:'32px' , padding:'80px 32px' }} >
          
          <Grid container>
     <Item number={true} theme={GREEN} />
     <Item number={false} theme={BLUE} />
     <Item number={true} theme={'red'} />
      </Grid>

      </Grid>

            <Grid item xs={12} lg={5.7} sx={{ minHeight:'90vh' , margin:'0 0 100px 0' , border:`8px dashed ${BLUE}` , borderRadius:'32px' , padding:'80px 32px' }} >
          
          <Grid container>
     <ItemSmall theme={BLUE} number={true} />
     <ItemSmall theme={BLUE} number={false} />
      </Grid>

      </Grid>

            <Grid item xs={12} lg={5.7} sx={{ minHeight:'90vh' , margin:'0 0 100px auto' , border:`8px dashed RED` , borderRadius:'32px' , padding:'80px 32px' }} >
          
          <Grid container>
     <ItemSmall theme={"red"}  number={true} />
     <ItemSmall theme={"red"} number={false} />
      </Grid>
      </Grid>
      </Grid>

     
      </Box>
		)
} 


const Item = ({ number ,theme }) => {
	return(
 <Grid item xs={12} lg={5.5} sx={{ minHeight:'50vh' , margin:'50px auto' , borderRadius:'32px' }} >
                        <Box sx={{ display:'flex' , alignItems:'center' , justifyContent:'center' , flexDirection:number ? 'row' : 'row-reverse' }} >
          <Box sx={{ height:'250px' , width:'250px' , border:'1px solid black' }} ></Box>
          <Box sx={{ display:'flex' , alignItems:'center' , justifyContent:'center' , height:'100px', background:theme , padding:'50px' , margin:'0' }} >
			<Typography sx={{ fontSize:'34px' , fontWeight:'600' , color:'white' , textAlign:'center' }} >WHAT WE DO</Typography>
			     </Box>
			</Box>
			<ul style={{padding:"32px" , width:'fit-contet' , margin:'0 auto' , fontSize:'18px' , textAlign:'center'}} >
			<li>Medical examinations</li>
			<li>Treatment of minor illnesses and injuries</li>
			<li>Screening for sexually transmitted diseases (STDs)</li>
			<li>Pregnancy tests</li>
			<li>Psychosocial counseling</li>
			<li>Health education and promotion</li>
			</ul>
     	<Box sx={{ display:'flex' , justifyContent:'center' }} >
      <Button sx={{  background:theme , color:'white' , padding:'21px' , margin:'21px auto' , borderRadius:'32px' }} > Book Appointments </Button>
			</Box>
      </Grid>
		)
}


const ItemSmall = ({number  , theme }) => {
	return(
 <Grid item xs={12} sx={{ minHeight:'50vh' , margin:'50px auto' , borderRadius:'32px' }} >
            <Box sx={{ display:'flex' , alignItems:'center' , justifyContent:'center' , flexDirection:number ? 'row' : 'row-reverse' }} >
          <Box sx={{ height:'250px' , width:'250px' , border:'1px solid black' }} ></Box>
          <Box sx={{ display:'flex' , alignItems:'center' , justifyContent:'center' , height:'100px', background:theme , padding:'50px' , margin:'0' }} >
			<Typography sx={{ fontSize:'28px' , fontWeight:'600' , color:'white' , textAlign:'center' }} >WHAT WE DO</Typography>
			     </Box>
			</Box>
			<ul style={{padding:"32px" , width:'fit-contet' , margin:'0 auto' , fontSize:'18px' , textAlign:'center'}} >
			<li>Medical examinations</li>
			<li>Treatment of minor illnesses and injuries</li>
			<li>Screening for sexually transmitted diseases (STDs)</li>
			<li>Pregnancy tests</li>
			<li>Psychosocial counseling</li>
			<li>Health education and promotion</li>
			</ul>
			<Box sx={{ display:'flex' , justifyContent:'center' }} >
      <Button sx={{  background:theme , color:'white' , padding:'21px' , margin:'21px auto' , borderRadius:'32px' }} > Book Appointments </Button>
			</Box>

      </Grid>
		)
}