import {
  Box,
  Button,
  Input,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import AUTH_API from "../apis/auth";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 20px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const Deposit = () => {
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [open, setOpen] = useState(false);

  // Function to handle file selection
  const handleFileSelect = (e) => {
    try {
      const fileName = e.target.files[0]; // Get the selected file's name

      setSelectedFileName(fileName); // Update the state with the selected file name
      console.log("FILENAME ", fileName);
    } catch (error) {
      console.log("FILE UPLOAD ERROR ", error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const { amount } = e.target;

      let formData = new FormData();
      formData.append("amount", amount.value);
      formData.append("file", selectedFileName);

      let res = await AUTH_API.deposit(formData);
      if (res) {
        e.target.reset();
        setOpen(true);
        setSelectedFileName(null);
      }

      console.log("FORM DATA ", formData);
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
          Amount Deposited !
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
            Deposit
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
            sx={{ mt: 2 }}
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload a Image
            <VisuallyHiddenInput type="file" onChange={handleFileSelect} />
          </Button>
          {/* Display the selected file name */}
          {selectedFileName && (
            <Typography sx={{ mt: 2 }}>
              Selected File: {selectedFileName.name}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "150px", mt: 10, height: `50px`, alignSelf: "end" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Deposit;
