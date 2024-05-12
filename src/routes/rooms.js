import express from "express";
import { createRoom, getRoom, getRooms } from "../controllers/room.js";


const router = express.Router();


//CREATE A NEW ROOM
router.post("/:hotelid",createRoom);


// GET A ROOM

router.get("/:id",getRoom)


// GET ALL ROOMS

router.get("/",getRooms)




export default router;