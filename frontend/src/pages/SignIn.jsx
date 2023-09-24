import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AUTH_API from "../apis/auth";
import React, { useState } from "react";

const SignIn = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const { email, password } = e.target;
      const body = {
        email: email.value,
        password: password.value,
      };

      let res = await AUTH_API.login(body, navigate);
      if (!res) setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(!open)}
      >
        <Alert
          onClose={() => setOpen(!open)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Invalid Credentials !
        </Alert>
      </Snackbar>

      <Box
        sx={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          height: `100vh`,
          flexDirection: `column`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: `1000px`,
            height: `600px`,
            border: `solid`,
            borderRadius: 5,
            border: `none`,
            backgroundColor: `rgb(249, 250, 251)`,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Box
            sx={{
              paddingTop: `150px`,
              paddingBottom: `150px`,
              paddingLeft: `50px`,
              paddingRight: `100px`,
              display: `flex`,
              flexDirection: `column`,
              width: `100%`,
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",

                textAlign: "center",
              }}
            >
              Sign in to platform
            </Typography>

            <TextField
              sx={{
                width: "50%",
                mt: 5,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: `10px`,
                  },
                },
              }}
              label="Email"
              size="medium"
              name="email"
              id="email"
            />

            <TextField
              sx={{
                width: "50%",
                mt: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: `10px`,
                  },
                },
              }}
              label="Password"
              type="password"
              name="password"
              size="medium"
              id="password"
            />

            <Box>
              {" "}
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 5, height: `50px` }}
              >
                Login to your account
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 5 }}>
              {" "}
              <Typography mr={2}>Not Registered?</Typography>
              <Link onClick={() => navigate("/signup")}>
                Create New Account
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default SignIn;
