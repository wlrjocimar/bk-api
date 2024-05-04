import express from "express";


const router = express.Router();


router.get("/",(req,res)=>{
    res.send("hello, this is auth endpoint");

})





router.get("/register",(req,res)=>{
    res.send("hello, this is auth register endpoint");

})  


router.get("/login",(req,res)=>{
    res.send("hello, this is login register endpoint");

})




export default router;