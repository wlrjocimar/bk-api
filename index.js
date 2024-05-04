import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./src/routes/auth.js";

import hotelsRoute from "./src/routes/hotels.js";


const basePath = '/bk-api';
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

// Middleware

app.use(express.json())
app.use(basePath + "/auth", authRoute);

app.use(basePath + "/hotels", hotelsRoute);


app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
