import {
  Box,
  List,
  ListItemIcon,
  Typography,
  ListItemButton,
} from "@mui/material";
import React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";

const Tabs = ({ name }) => {
  return (
    <ListItemButton sx={{ mb: 2, borderRadius: 3 }}>
      <ListItemIcon>
        <DashboardIcon sx={{ fontSize: 30 }} />
      </ListItemIcon>
      <Typography sx={{ fontSize: 20 }}>{name}</Typography>
    </ListItemButton>
  );
};

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: `flex`,
        flexDirection: `column`,
        position: `fixed`,
        width: `290px`,
        bgcolor: `lightblue`,
        height: "100vh",
        justifyContent: `space-between`,
        mt: 10,
      }}
    >
      <Box sx={{ width: `100%` }}>
        {" "}
        <List sx={{ width: "270px", mt: 4, pl: 1, pr: 1 }}>
          <Tabs name={"Users"} />
          <Tabs name={"Withdraw"} />
          <Tabs name={"Deposit"} />
          <Tabs name={"Transfer"} />
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
