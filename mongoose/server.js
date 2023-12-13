const express= require("express")
const app = express()
const path= require("path")
const mongoose = require('mongoose');
app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
let mydb="g17"
const Kitten=require("./model/kitty");

app.post("/api/addkitty",async(req,res)=>{
    const {kittyName} =req.body;
    const newKitty= new Kitten({name:kittyName});
    await newKitty.save();
    res.send("kitty added");
})




mongoose.connect(`mongodb://127.0.0.1:27017/${mydb}`)
  .then(() => {
    app.listen(3344,()=>{
        console.log("server started at port 3344");
     })
  });

