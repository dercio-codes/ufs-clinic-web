import React from "react";
import { Box, Typography, Grid, Menu, Tooltip } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Main = () => {
  return (
    <Box>
      <Box sx={{ height: "5vh", background: "blue" }} />
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Grid container>
          <Grid item xs={3} sx={{ padding: "30px", background: "red" }}></Grid>
          <Grid
            item
            xs={9}
            sx={{
              padding: "30px",
              background: "green",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <MenuDrop />
            <Typography> Contact </Typography>
            <Typography> Login </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const MenuDrop = () => {
    const [open,setOpen]=React.useState(false)onst 
  return (
    <Box>
    <Typography sx={{ display: "flex", alignItems: "center" }}>
      Campaigns <ExpandMoreIcon />{" "}
    </Typography>
    
    </Box>
  );
};
