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

app.get("/posts",async(req,res)=>{
    try {
        let postdata=await POST.getpost()
        if(postdata.lenght==0){
           return res.send("No post found");
        }
        res.json(postdata);
    } catch (error) {
        res.send(error);
    }
  
})
app.post("/posts",async(req,res)=>{
    let {postName,postImage,postCaption}=req.body;
    let newPost={id:uuidv4(),postName:postName,postImage:postImage,postCaption:postCaption}
    await POST.addpost(newPost)
    res.redirect("/posts");
})
app.get("/posts/:id",async(req,res)=>{
    try {
        let {id}=req.params;
        let post=await POST.getOnePost(id);
        console.log(post);
        if(post.lenght==0){
           return res.send("No post found");
        }
        res.json(post);
    
    } catch (error) {
        res.send(error);
    }
 

})
app.delete("/posts/:id",async(req,res)=>{
   let {id} =req.params;
   await POST.deletepost(id);
   res.redirect("/posts");
})
app.put("/posts/:id",async(req,res)=>{
     let {id} =req.params;
     let {postName,postImage,postCaption} =req.body;
     await POST.editpostput(id,{id,postName,postImage,postCaption})
     res.redirect("/posts");
})

















app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
})