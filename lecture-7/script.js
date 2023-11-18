const express = require('express');
const app = express();
const path=require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"static")));
app.get("/",(req,res)=>{
      res.send("HEllo world");
    // res.sendFile(path.join(__dirname,"index.html"))
})

// app.get("/index.js",(req,res)=>{
//     res.sendFile(path.join(__dirname,"index.js"))
// })

app.get("/users/:name",(req,res)=>{
   const username= req.params.name;
   console.log(username);
   res.send(username);
   
})

app.get("/users",(req,res)=>{
    let {name,age}=req.query;
//    let username= req.query.name;
//     let age= req.query.age;
//    console.log(username);
   res.send(`${name},${age}`);
})

app.post("/users/adduser",(req,res)=>{
   let username= req.body.username;
   let password=req.body.password;
   console.log(username,password);
   res.send("user added");
})

app.get("/about",(req,res)=>{
 res.send("about");
})
app.get("/information",(req,res)=>{
    res.send("<h1>Information</h1>")
})

app.listen(3333,()=>{
    console.log("sever started");
});