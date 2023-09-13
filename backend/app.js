import express from "express";
import logger from "morgan";
import cors from "cors";
import RouteSetup from "./routes";
require("dotenv").config();
require("./config/db");

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger("dev"));
app.use(cors());

// Parse incoming requests data
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

RouteSetup(app);

app.get("*", async (req, res) => {
  return res.status(200).send({
    message: "Welcome to the beginning",
  });
});

export default app;
