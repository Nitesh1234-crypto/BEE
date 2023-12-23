const express= require("express")
const app = express()
const path= require("path")
const mongoose=require("mongoose");
app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'hbs');

app.use("/posts",require("./routes/post"));




mongoose.connect("mongodb://127.0.0.1:27017/mongoose2").then(()=>{
    app.listen(5555,()=>{
        console.log("server started at port 5555");
      })
})
