import express from "express";
import { createRoom, getRoom } from "../controllers/room.js";


const router = express.Router();


//CREATE A NEW ROOM
router.post("/:hotelid",createRoom);


// GET A ROOM

router.get("/:id",getRoom)




export default router;