import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import AUTH_API from "../apis/auth";
import React, { useState } from "react";
import LocalStorage from "../utils/local.storage";


const Withdraw = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const user = LocalStorage.getStorage();
      console.log(user)

      const { amount } = e.target;
      const body = {
        amount: amount.value,
      };
      console.log(body);

     
      if(user.balance <=0)
      {
        setOpen2(true);
        
      }
      
      else{
        let res = await AUTH_API.withdraw(user?._id, body);
        console.log(res)
        setOpen(true);
        e.target.reset();

      }




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
          Amount Withdrawed !
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open2}
        autoHideDuration={3000}
        onClose={() => setOpen2(!open2)}
      >
        <Alert
          onClose={() => setOpen2(!open2)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Invalid Ammount
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
            Withdraw
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

export default Withdraw;
