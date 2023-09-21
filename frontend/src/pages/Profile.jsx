import React, { useState, useEffect } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import LocalStorage from "../utils/local.storage";
import AUTH_API from "../apis/auth";

const handleSubmit = (e) => {
  try {
    e.preventDefault();

    const { name, password } = e.target;

    const data = {
      name: name.value,
      password: password.value,
    };

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const Field = ({ name, label, id, disabled = true }) => {
  return (
    <Box>
      <Typography sx={{ ml: 1, mt: 1 }} variant="h6">
        {name}
      </Typography>
      <TextField
        sx={{
          width: "500px",
          mt: 1,

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: `10px`,
            },
          },
        }}
        disabled={disabled}
        label={label}
        type="text"
        size="small"
        id={id}
      />
    </Box>
  );
};
const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const el = LocalStorage.getStorage();
      let res = await AUTH_API.getDetailUser(el._id);
      if (res?.data) setUser(res.data);
    } catch (error) {
      console.log("Error Occured ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: `calc(100%-290px)`,
          ml: `290px`,
          pt: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} sx={{ mt: 10, padding: 10 }}>
          <Grid
            item
            sx={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              padding: 10,
            }}
            xs={6}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Field name={"Name"} label={user?.name} id={"name"} />
              <Field
                disabled={true}
                name={"Email"}
                label={user?.email}
                id={"email"}
              />
              <Field name={"Password"} label={user?.password} id={"password"} />
              {/* <Field name={"Address"} label={"Tulip ext"} id={"address"} />
              <Field name={"Phone"} label={"03004312331"} id={"phone"} /> */}
            </Box>
          </Grid>
          <Grid
            sx={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              padding: 10,
            }}
            item
            xs={6}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Field
                disabled={true}
                name={"Amount"}
                label={user?.balance}
                id={"amount"}
              />
              <Field
                disabled={true}
                name={"Account Number"}
                label={user?.acc_no}
                id={"accountNumber"}
              />
            </Box>
          </Grid>

          <Box sx={{ width: "100%", textAlign: "end", mt: 2 }}>
            {" "}
            {/* <Button
              variant="contained"
              style={{ width: "200px", height: "50px", alignSelf: "end" }}
              type="submit"
            >
              Submit
            </Button> */}
          </Box>
        </Grid>
      </Box>
    </form>
  );
};

export default Profile;
