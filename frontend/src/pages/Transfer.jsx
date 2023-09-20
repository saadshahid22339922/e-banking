import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import AUTH_API from "../apis/auth";
import LocalStorage from "../utils/local.storage";

const Transfer = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const el = LocalStorage.getStorage();

      const { amount, name } = e.target;
      const data = {
        amount: amount.value,
        sender_id: el._id,
        reciever_acc: name.value,
      };

      let res = await AUTH_API.transfer(data);
      if (res) {
        e.target.reset();
        setOpen(true);
      }

      console.log(data);
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
          severity="success"
          sx={{ width: "100%" }}
        >
          Amount Transfered !
        </Alert>
      </Snackbar>
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
        <Box
          sx={{
            mt: 30,
            width: "700px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "40px" }}>
            Transfer
          </Typography>
          <TextField
            sx={{
              width: "100%",
              mt: 4,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: `10px`,
                },
              },
            }}
            label="Amount"
            type="number"
            name="Amount"
            size="medium"
            id="amount"
          />
          <TextField
            sx={{
              width: "100%",
              mt: 4,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: `10px`,
                },
              },
            }}
            label="Transfer to"
            type="text"
            name="name"
            size="medium"
            id="name"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "150px", mt: 4, height: `50px`, alignSelf: "end" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Transfer;
