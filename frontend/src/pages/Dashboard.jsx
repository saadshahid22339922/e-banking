import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import AUTH_API from "../apis/auth";
import LocalStorage from "../utils/local.storage";

const getCard = ({ title = "Hello World", count = 0, footer = "" }) => {
  return (
    <Card sx={{ minWidth: 200, ml: 3 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 21,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          color="blue"
          fontWeight={"bold"}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {count}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            color: "red",
          }}
        >
          <br />
          {`*${footer}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const storage = LocalStorage.getStorage();
      let res = await AUTH_API.getStats(storage._id);
      if (res) {
        console.log("RES ", res);
        setData(res.data);
      }
    } catch (error) {
      console.log("Error ", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box
      sx={{
        ml: `290px`,
        display: "flex",
      }}
    >
      <Box
        sx={{
          mt: 15,
          width: "100%",
        }}
      >
        <Grid container display={"flex"} justifyContent={"center"}>
          <Typography sx={{ fontWeight: "bold", fontSize: "40px" }}>
            Welcome to E-Banking
          </Typography>
        </Grid>

        <Grid
          spacing={4}
          container
          display="flex"
          flexDirection={"row"}
          justifyContent={"center"}
          sx={{ mt: 2 }}
        >
          <Grid item>
            {getCard({
              title: "Balance",
              count: data?.balance,
              footer: "current balance",
            })}
          </Grid>
          <Grid item>
            {getCard({
              title: "Transactions",
              count: data?.transaction,
              footer: "all transactions",
            })}
          </Grid>
          {data?.users ? (
            <Grid item>
              {getCard({
                title: "Users",
                count: data?.users,
                footer: "all users",
              })}
            </Grid>
          ) : null}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
