import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AUTH_API from "../apis/auth";
import ROLE_API from "../apis/role";
import ACCOUNT_TYPE_API from "../apis/account.type";
import React, { useEffect, useState } from "react";

const SignIn = () => {
  const [roles, setRoles] = useState([]);
  const [accountTypes, setAccountTypes] = useState([]);

  const [selectedRole, setselectedRole] = useState(null);
  const [selectedAccountType, setselectedAccountType] = useState(null);

  const getData = async () => {
    try {
      let res1 = await ROLE_API.getAll();
      let res2 = await ACCOUNT_TYPE_API.getAll();
      setRoles(res1.data);
      setAccountTypes(res2.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const { name, email, password } = e.target;

      const body = {
        name: name.value,
        email: email.value,
        password: password.value,
        role: selectedRole,
        account_type: selectedAccountType,
      };

      let res = await AUTH_API.signUp(body);
      if (res) navigate("/");

      console.log(body);
    } catch (error) {
      console.log(error);
    }
  };

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
              label="Name"
              name="name"
              size="medium"
              id="name"
            />

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

            <InputLabel
              sx={{ width: "50%", mt: 3 }}
              id="demo-simple-select-label"
            >
              Select Role
            </InputLabel>
            <Select
              sx={{
                width: "50%",
                // mt: 3,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: `10px`,
                  },
                },
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => {
                setselectedRole(e.target.value);
              }}
            >
              {roles.map((el) => {
                return <MenuItem value={el._id}>{el.role}</MenuItem>;
              })}
            </Select>

            <InputLabel
              sx={{ width: "50%", mt: 3 }}
              id="demo-simple-select-label"
            >
              Select Account Type
            </InputLabel>
            <Select
              sx={{
                width: "50%",
                // mt: 3,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: `10px`,
                  },
                },
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => {
                setselectedAccountType(e.target.value);
              }}
            >
              {accountTypes.map((el) => {
                return <MenuItem value={el._id}>{el.account_type}</MenuItem>;
              })}
            </Select>

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
              <Link onClick={() => navigate("/signin")}>Login here </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default SignIn;
