import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken,verifyUser } from "../utils/verifyToken.js";


const router = express.Router();


// check authentication

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
  
  res.send("Hello user , you are authenticated!!")

})

// check user

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{

  res.send("Hello user , you are authenticated and you can delete your account!!")

})


//UPDATE
   router.put("/:id",verifyToken,updateUser);
//DELETE
router.delete("/:id",deleteUser)
//GET

router.get("/:id",getUser)

//GET ALL

router.get("/",getUsers)


export default router;