import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


// check authentication

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
  
//   res.send("Hello user , you are authenticated!!")

// })

// // check user

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{

//   res.send("Hello user , you are authenticated and you can delete your account!!")

// })

// // check if is admin


// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{

//   res.send("Hello user , you are authenticated as an admin user , congratulation!!")

// })



//UPDATE
   router.put("/:id",verifyUser,updateUser);
   
//DELETE
router.delete("/:id",verifyUser,deleteUser)
//GET

router.get("/:hotelid",verifyUser,getUser)

//GET ALL

router.get("/",verifyAdmin,getUsers)


export default router;