const express=require("express");
const router=express.Router();

router.get("/",async(req,res)=>{
    try {
        let postdata=await POST.getpost()
        if(postdata.lenght==0){
           return res.send("No post found");
        }
        res.json(postdata);
    } catch (error) {
        res.send(error);
    }
}
)
router.post("/",async(req,res)=>{
    let {postName,postImage,postCaption}=req.body;
    let newPost={id:uuidv4(),postName:postName,postImage:postImage,postCaption:postCaption}
    await POST.addpost(newPost)
    res.redirect("/posts");
})
router.get("/:id",async(req,res)=>{
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
router.delete("/:id",async(req,res)=>{
    let {id} =req.params;
    await POST.deletepost(id);
    res.redirect("/posts");
 })
 router.put("/:id",async(req,res)=>{
    let {id} =req.params;
    let {postName,postImage,postCaption} =req.body;
    await POST.editpostput(id,{id,postName,postImage,postCaption})
    res.redirect("/posts");
})

module.exports=router;
