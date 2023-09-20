import {
  Box,
  List,
  ListItemIcon,
  Typography,
  ListItemButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import LocalStorage from "../utils/local.storage";

const Tabs = ({ name, path }) => {
  const navigate = useNavigate();

  return (
    <ListItemButton
      sx={{ mb: 2, borderRadius: 3 }}
      onClick={() => {
        navigate(path);
      }}
    >
      <ListItemIcon>
        <DashboardIcon sx={{ fontSize: 30 }} />
      </ListItemIcon>
      <Typography sx={{ fontSize: 20 }}>{name}</Typography>
    </ListItemButton>
  );
};

const Sidebar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const el = LocalStorage.getStorage();
    setUser(el);
  }, []);

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
        <List sx={{ width: "270px", mt: 4, pl: 1, pr: 1 }}>
          {user?.role?.role_enum === "CUSTOMER" ? (
            <React.Fragment>
              <Tabs name={"Dashboard"} path={"dashboard"} />
              <Tabs name={"Withdraw"} path={"withdraw"} />
              <Tabs name={"Deposit"} path={"deposit"} />
              <Tabs name={"Transfer"} path={"transfer"} />
              <Tabs name={"Profile"} path={"profile"} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Tabs name={"Dashboard"} path={"dashboard"} />
              <Tabs name={"Users"} path={"user"} />
              <Tabs name={"Transaction"} path={"transaction"} />
              <Tabs name={"Profile"} path={"profile"} />
            </React.Fragment>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
