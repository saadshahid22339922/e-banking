import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import AUTH_API from "../apis/auth";
import { useNavigate } from "react-router-dom";
import LocalStorage from "../utils/local.storage";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const el = LocalStorage.getStorage();
    setUser(el);
  }, []);

  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: `space-between`,
          bgcolor: `white`,
          pb: 2,
        }}
      >
        <Box sx={{ display: `flex`, alignItems: `center`, mt: 1.5 }}>
          <Typography
            sx={{ mr: 10, fontWeight: `bold`, color: `black`, fontSize: 27 }}
          >
            E-Banking
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 2,
            display: `flex`,
            width: `180px`,
            justifyContent: "end",
            alignItems: `center`,
          }}
        >
          <Typography
            sx={{ fontWeight: `bold`, color: `black`, fontSize: 20, mr: 3 }}
          >
            {user?.email}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LogoutIcon
              onClick={() => AUTH_API.logout(navigate)}
              sx={{
                fontSize: "34px",

                color: "red",
                cursor: "pointer",
              }}
            />
            <Typography sx={{ color: "black", fontWeight: "bold" }}>
              Logout
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
