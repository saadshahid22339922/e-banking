import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React from "react";

const handleSubmit = (e) => {
  try {
    e.preventDefault();

    const { email, password } = e.target;

    const FormData = {
      email: email.value,
      password: password.value,
    };

    console.log(FormData);
  } catch (error) {
    console.log(error);
  }
};

const SignIn = () => {
  return (
    <form onSubmit={handleSubmit}>
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
              paddingTop: `100px`,
              paddingBottom: `100px`,

              display: `flex`,
              flexDirection: `column`,
              alignItems: "center",
              width: `100%`,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              Create Free Account
            </Typography>

            <TextField
              sx={{
                width: "50%",
                mt: 4,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: `10px`,
                  },
                },
              }}
              label="Email"
              name="email"
              size="medium"
              id="email"
            />

            <TextField
              sx={{
                width: "50%",
                mt: 3,
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

            <TextField
              sx={{
                width: "50%",
                mt: 3,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: `10px`,
                  },
                },
              }}
              label="Confirm Password"
              type="password"
              size="medium"
            />

            <Box>
              {" "}
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 4, height: `50px` }}
              >
                Create Account
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              {" "}
              <Typography mr={2}>Already Have Account?</Typography>
              <Link href="#">Login here </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default SignIn;
