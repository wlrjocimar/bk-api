import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyUser } from "../utils/verifyToken.js";


const router = express.Router();


//CREATE A NEW ROOM
router.post("/:hotelid",verifyUser,createRoom);


// GET A ROOM

router.get("/:id",getRoom)


// GET ALL ROOMS

router.get("/",getRooms)



//UPDATE ROOM

router.put("/:id",verifyUser,updateRoom);


//DELETE ROOM

router.delete("/:id/:hotelid",verifyUser,deleteRoom)




export default router;