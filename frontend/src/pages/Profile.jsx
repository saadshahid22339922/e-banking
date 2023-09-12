import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const handleSubmit = (e) => {
  try {
    e.preventDefault();

    const {
      name,
      email,
      password,
      address,
      phone,
      bankName,
      amount,
      accountNumber,
    } = e.target;

    const FormData = {
      name: name.value,
      email: email.value,
      password: password.value,
      address: address.value,
      phone: phone.value,
      bankName: bankName.value,
      amount: amount.value,
      accountNumber: accountNumber.value,
    };

    console.log(FormData);
  } catch (error) {
    console.log(error);
  }
};

const Field = ({ name, label, id }) => {
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
        label={label}
        type="text"
        size="small"
        id={id}
      />
    </Box>
  );
};
const Profile = () => {
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
              <Field name={"Name"} label={"Ali"} id={"name"} />
              <Field name={"Email"} label={"Email@gmail.com"} id={"email"} />
              <Field name={"Password"} label={"1234"} id={"password"} />
              <Field name={"Address"} label={"Tulip ext"} id={"address"} />
              <Field name={"Phone"} label={"03004312331"} id={"phone"} />
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
              <Field name={"Bank Name"} label={"Bank"} id={"bankName"} />
              <Field name={"Amount"} label={"300000"} id={"amount"} />
              <Field
                name={"Account Number"}
                label={"1234"}
                id={"accountNumber"}
              />
            </Box>
          </Grid>

          <Box sx={{ width: "100%", textAlign: "end", mt: 2 }}>
            {" "}
            <Button
              variant="contained"
              style={{ width: "200px", height: "50px", alignSelf: "end" }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Box>
    </form>
  );
};

export default Profile;
