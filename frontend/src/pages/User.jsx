import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AUTH_API from "../apis/auth";
import { Box, Typography } from "@mui/material";

function createData(name, country, email) {
  return { name, country, email };
}

const rows = [
  createData("Ahmed", "Pakistan", "email@gmail.com"),
  createData("Ahmed", "Pakistan", "email@gmail.com"),
  createData("Ahmed", "Pakistan", "email@gmail.com"),
  createData("Ahmed", "Pakistan", "email@gmail.com"),
];

export default function BasicTable() {
  const [users, setUsers] = React.useState([]);

  const getAllUsers = async () => {
    try {
      let res = await AUTH_API.getUsers();
      setUsers(res.data);
      console.log("DATA ", res.data);
    } catch (error) {}
  };

  React.useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <Box
      sx={{
        width: `calc(100%-300px)`,
        ml: `290px`,
        pt: 10,
        padding: 10,
      }}
    >
      <Typography
        sx={{ fontSize: "40px", fontWeight: "bold", mt: 5, mb: 5, ml: 5 }}
      >
        User Listing
      </Typography>
      <TableContainer component={Paper} sx={{ width: `100%` }}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", width: "30%" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Account Type
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Role
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Amount ($)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">
                  {row.account_type.account_type}
                </TableCell>
                <TableCell align="left">{row.role.role}</TableCell>
                <TableCell align="left">{row.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
