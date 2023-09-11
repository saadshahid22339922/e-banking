import React from "react";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: `space-between`,

          bgcolor: `lightblue`,
        }}
      >
        <Box sx={{ display: `flex`, alignItems: `center` }}>
          <Avatar
            sx={{
              height: `40px`,
              width: `40px`,
              mr: 2,
            }}
          ></Avatar>

          <Typography
            sx={{ mr: 10, fontWeight: `bold`, color: `black`, fontSize: 27 }}
          >
            FlowBite
          </Typography>
        </Box>

        <Box
          sx={{
            display: `flex`,
            width: `180px`,
            justifyContent: "end",
            alignItems: `center`,
          }}
        >
          <Typography
            sx={{ fontWeight: `bold`, color: `black`, fontSize: 20, mr: 4 }}
          >
            Email@gmail.com
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                height: `50px`,
                width: `50px`,
              }}
              // src={}
            ></Avatar>
            <Typography>Name</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
