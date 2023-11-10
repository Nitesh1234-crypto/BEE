const express= require("express");
let app=express();

app.get("/",function(req,res,next){
 res.send("Hello");
}
);

app.get("/about/:username",(req,res,next)=>{
res.send(`<h1>about${req.params.username}</h1>`);
});



app.listen(4444,()=>{
    console.log("server started");
});