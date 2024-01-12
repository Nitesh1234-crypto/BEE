const express= require("express");
const router=express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const crypto=require("crypto");
const sendEmail=require("../utils/util");
const Token=require("../model/token");
const User=require("../model/user");



router.get("/",(req,res)=>{
    res.render("home");
})
router.get("/register",(req,res)=>{
    res.render("register");
})

router.post("/register",async(req,res)=>{
    const {username,email,password}=req.body;
    console.log(email);
    bcrypt.hash(password, saltRounds).then(async function(hash) {
        // Store hash in your password DB.
        const newUser=new User({username,email,password:hash});
        await newUser.save();
        let token = await new Token({
            userId: newUser._id,
            token: crypto.randomBytes(32).toString("hex"),
          }).save();
          const message = `${process.env.BASE_URL}/user/verify/${newUser.id}/${token.token}`;
          await sendEmail(newUser.email, "Verify Email", message);
          res.send("verify your email by clicking link send to your email");
    });

})

router.get("/verify/:id/:token",async(req,res)=>{
    const {id}=req.params;
    let user= await User.findOne({_id:id});
    if(!user) return res.status(400).send("Invalid link");

    let token=await Token.findOne({userId:id,token:req.params.token});
    if(!token) return res.status(400).send("Invalid link");
    // await User.updateOne({_id:user.id,verify:true});
    user.verify=true;
    await user.save();
    await Token.findByIdAndDelete(token._id);
    res.redirect("/api/user");
})

module.exports=router;