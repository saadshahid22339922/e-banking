import React from "react";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: `space-between`,

          bgcolor: `white`,
        }}
      >
        <Box sx={{ display: `flex`, alignItems: `center` }}>
          {/* <Avatar
            sx={{
              height: `40px`,
              width: `40px`,
              mr: 2,
            }}
          ></Avatar> */}

          <Typography
            sx={{ mr: 10, fontWeight: `bold`, color: `black`, fontSize: 27 }}
          >
            E-Banking
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
            sx={{ fontWeight: `bold`, color: `black`, fontSize: 17, mr: 4 }}
          >
            email@gmail.com
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
              style={{
                marginTop: 13,
              }}
              sx={{
                height: `40px`,
                width: `40px`,
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
