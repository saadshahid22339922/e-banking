import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TRANSACTION_API from "../apis/transaction";
import LocalStorage from "../utils/local.storage";
import { Box, Typography } from "@mui/material";

const Transaction = () => {
  const [transactions, setTransactions] = React.useState([]);

  const getData = async () => {
    try {
      let el = LocalStorage.getStorage();
      let res = await TRANSACTION_API.getAll(el?._id);
      if (res) setTransactions(res.data);
    } catch (error) {}
  };

  const isReciever = (rcvr_acc, amount, transaction_type) => {
    if (transaction_type === "DEPOSIT" || transaction_type === "WITHDRAW")
      return amount;
    const el = LocalStorage.getStorage();
    if (el.acc_no === rcvr_acc) return amount * -1;
    return amount;
  };

  React.useEffect(() => {
    getData();
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
        Transactions
      </Typography>
      <TableContainer component={Paper} sx={{ width: `100%` }}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", width: "30%" }}>
                Sender
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", width: "30%" }}>
                Reciever
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Amount
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Transaction Type
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {`${row?.send_acc?.name}`}{" "}
                  <span style={{ fontWeight: "bold" }}>
                    ({row?.send_acc?.acc_no})
                  </span>
                </TableCell>

                <TableCell align="left">
                  {`${row?.reciever_acc?.name}  `}
                  <span
                    style={{ fontWeight: "bold" }}
                  >{`(${row?.reciever_acc?.acc_no})`}</span>
                </TableCell>

                <TableCell align="left">
                  {isReciever(
                    row?.reciever_acc?.acc_no,
                    row?.amount,
                    row?.transaction_type
                  )}
                </TableCell>
                <TableCell align="left">{row?.transaction_type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Transaction;
