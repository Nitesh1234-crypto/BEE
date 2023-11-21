const express = require("express");
const app = express();
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.json())
let todo = require("./todos/JS/script");
app.use(express.static(path.join(__dirname,"static")))
// let todos=[]


app.get("/gettodo",async (req,res)=>{
    //  res.send(todos);
  let data  = await todo.gettodo();
  res.send(data);
})
app.post("/addtodo",async(req,res)=>{
  let {taskitem} = req.body;
  console.log(taskitem);
//   todos.push(taskitem);
  let mssg=await todo.addtodo(taskitem);
  // res.send(mssg);
  res.redirect("/");
})

app.listen(3000,()=>{
    console.log("server started");
})