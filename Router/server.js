const express=require("express");
const app=express();
let PORT=3001;
const { v4: uuidv4 } = require('uuid');
let POST=require("./database/JS/post");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Router")
})

// app.get("/posts",)
// app.post("/posts",)
// app.get("/posts/:id",  )
// app.delete("/posts/:id",)
// app.put("/posts/:id",)
app.use("/posts",require("./routes/post"))


















app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
})