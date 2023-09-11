import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Withdraw = () => {
  return (
    <Box sx={{ width: `calc(100%-290px)`, ml: `290px`,pt:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
     
     <Box sx={{mt:30,width:"700px" ,display:"flex",alignItems:"center",flexDirection:"column"}}>
     <Typography sx={{fontWeight:"bold",fontSize:"40px"}}>Withdraw</Typography>
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
              type='number'
              name="Amount"
              size="medium"
            />
                <Button
                type="submit"
                variant="contained"
                sx={{width:"150px",  mt: 4, height: `50px`,alignSelf:"end" }}
              >
                Submit
              </Button>

     </Box>
      
        </Box>
  )
}

export default Withdraw