const express= require("express")
const app = express()
const path= require("path")
const mongoose =require("mongoose");
const User =require("./model/user");
const blog= require("./model/blog");
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    // resave: false,
    // saveUninitialized: true,
    // cookie: { secure: true }
  }))
app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'hbs');
function checkIsLoggedIn(req,res,next){
    if(req.session.isLoggedIn){
        next()
    }else{
        res.redirect("/login");
    }
}
app.get("/",checkIsLoggedIn,(req,res)=>{
    res.render("home",{user:req.session.user});
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/register",(req,res)=>{
    res.render("register");
})

app.post("/register",async(req,res)=>{
    const {username,password}=req.body;
    const newUser= new User({username,password});
   await  newUser.save();
   res.send("User registered successfully!!!")

})
app.post("/login",async(req,res)=>{
    const {username,password} =req.body;
   let user=await User.findOne({username:username});
   if(user){
    if(user.password!=password){
        res.send("Invalid password");
    }else{
        req.session.isLoggedIn=true;
        req.session.user=user
        res.redirect("/");
    }

   }else{
          res.send("user not found!!!");
   }
})
app.post("/addblog",async(req,res)=>{
    const {title,content} =req.body;
    let newBlog= new blog({title,content,user:req.session.user._id});
    await newBlog.save();
    let user = await User.findOne({_id:req.session.user._id})
    user.blog.push(newBlog._id);
    await user.save();
    res.send("done");
    

})
app.get("/myblog",async(req,res)=>{
    let user=await User.findOne({_id:req.session.user._id}).populate("blog");
    console.log(user);
    res.render("myblog",{blogs:user.blog,user:user});
})
app.get("/blogs",async(req,res)=>{
    let blogs=await blog.find().populate("user");
    console.log(blogs)
    res.render("allblog",{blogs})
})




mongoose.connect("mongodb://127.0.0.1:27017/g26session").then(()=>{
    app.listen(2345,()=>{
        console.log("server started at port 2345");
      })
})
