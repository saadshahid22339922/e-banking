import express from "express";
import logger from "morgan";
import cors from "cors";
import RouteSetup from "./routes";
const path = require("path");
const folderName = "uploads";
const folderPath = path.join(__dirname, folderName);
require("dotenv").config();
require("./config/db");

// Set up the express app
const app = express();

app.use(express.static(folderPath));

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
