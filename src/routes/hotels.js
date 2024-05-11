import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updatedHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";



const router = express.Router();


//CREATE
router.post("/",verifyAdmin,  createHotel);

//UPDATE
   router.put("/:id",verifyAdmin,updatedHotel);
//DELETE
router.delete("/:id",deleteHotel)
//GET

router.get("/:id",getHotel)

//GET ALL

router.get("/",getHotels)





export default router;