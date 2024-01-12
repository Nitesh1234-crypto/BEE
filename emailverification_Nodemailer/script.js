require("dotenv").config();
const express= require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const PORT=process.env.PORT || 2000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","hbs");


app.use("/api/user",require("./routes/verify"));

mongoose.connect("mongodb://127.0.0.1:27017/etproject").then(()=>{
    app.listen(PORT,()=>{
        console.log("http://localhost:"+PORT);
    })
})






