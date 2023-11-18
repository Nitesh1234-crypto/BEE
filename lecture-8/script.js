let express =require("express");
let app=express();
let path = require("path");
let todos=[];
app.use(express.urlencoded({extended:true}));


app.get("/gettodo",(req,res)=>{
    res.send(todos);
})

app.post("/addtodo",(req,res)=>{
   let {name}= req.body;
   todos.push(name);
   res.send("task added successfully");
})





app.listen(2222,()=>{
    console.log("server started")
})