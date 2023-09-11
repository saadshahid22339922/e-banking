import { Box, Button, Input, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

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
  const [selectedFileName, setSelectedFileName] = useState(""); // State to store selected file name

  // Function to handle file selection
  const handleFileSelect = (e) => {
    console.log(e)
    const fileName = e.target.files[0]?.name || ""; // Get the selected file's name
 
    setSelectedFileName(fileName); // Update the state with the selected file name
  };

  return (
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
        />
        <Button sx={{mt:2}}
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
            Selected File: {selectedFileName}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          sx={{width:"150px", mt: 10, height: `50px` ,alignSelf:"end"}}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Deposit;
