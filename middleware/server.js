const express=require("express");
const app=express();

//middleware will run for every request
app.use(m1);
app.use(m3);
app.use(m2);

function m4(req,res,next){
console.log("rnning middlewAre 4");
if(req.query.username=="nitesh"){
    req.admin=true;
next();
}else{
    req.admin=false;
    next();
}
}

// app.get("/about",m4) //middleware will run only for request starting with /about.
app.get("/",(req,res,next)=>{
    console.log("running /")
    res.send("home");
    next();
})

app.get("/about",m4,(req,res)=>{
    console.log("running about");
    if(req.admin){
    res.send("about");
    }else{
        res.send("user not authorize to view about page");
    }
})
//calling next() is not same as calling return
function m1(req,res,next){
    console.log("running middleware 1");
    let flag=true
    if(flag){
      return next();
    }
    console.log("m1 after calling next")
}
function m2(req,res,next){
    console.log("running m2");
    next();
}
function m3(req,res,next){
    console.log("running m3");
    next();
}



app.listen(3333,()=>{
    console.log("server started");
})