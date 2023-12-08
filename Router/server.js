const express=require("express");
const app=express();
let PORT=3003;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Router")
})


app.use("/posts",require("./routes/post"))
// app.use("/users",require("./routes/user")).

















app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
})