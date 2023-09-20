import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import AUTH_API from "../apis/auth";
import { useNavigate } from "react-router-dom";
import LocalStorage from "../utils/local.storage";

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
            sx={{ fontWeight: `bold`, color: `black`, fontSize: 17, mr: 4 }}
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
            <Avatar
              onClick={() => AUTH_API.logout(navigate)}
              style={{
                marginTop: 13,
              }}
              sx={{
                height: `40px`,
                width: `40px`,
                mb: "25%",
              }}
            ></Avatar>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
