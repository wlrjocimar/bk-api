import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./src/routes/auth.js";
import userRoute from "./src/routes/users.js"
import roomRoute from "./src/routes/rooms.js"

import hotelsRoute from "./src/routes/hotels.js";
import cookieParser from "cookie-parser";
 

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


app.use(cookieParser());
app.use(express.json());
app.use(basePath + "/auth", authRoute);

app.use(basePath + "/hotels", hotelsRoute);
app.use(basePath + "/users", userRoute)
app.use(basePath + "/rooms", roomRoute)

app.use((err,req,res,next)=>{

 const errorStatus = err.status || 500
 const errorMessage = err.message || "Something went wrong"
 
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
  });
})


app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
