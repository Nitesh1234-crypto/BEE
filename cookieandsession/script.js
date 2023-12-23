const express= require("express")
const app = express()
const path= require("path")
const mongoose =require("mongoose");
const session = require('express-session')
const User =require("./model/user");
app.use(session({
    secret: 'secret',
    // resave: false,
    // saveUninitialized: true,
    // cookie: { secure: true }
  }))
app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","hbs");
function checkIsLoggedIn(req,res,next){
    if(req.session.isLoggedIn){
        next()
    }else{
        res.redirect("/login");
    }

}
app.get("/",checkIsLoggedIn,(req,res)=>{
    res.render("home");
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/register",(req,res)=>{
    res.render("register");
})
app.post("/register",async(req,res)=>{
    const {username,password}=req.body;
    let newUser =new User({username,password});
    await newUser.save();
    res.send("user registered successfully!!");
})
app.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    let user=await User.findOne({username:username});
    if(user){
        if(user.password!=password){
            res.send("Invalid password!!")
        }else{
            req.session.isLoggedIn=true;
            res.redirect("/");
        }

    }else{
        res.send("user not found!!");
    }
})


mongoose.connect("mongodb://127.0.0.1:27017/g17session").then(()=>{
    app.listen(3234,()=>{
        console.log("server started at port 3334");
      })
})
