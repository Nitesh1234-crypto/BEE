const Post=require("../model/post");

module.exports.getAllPost=async(req,res)=>{
       let allPost= await Post.find({});
       res.json(allPost);
}
module.exports.postAddPost=async(req,res)=>{
    const {postName,imageURL,caption} =req.body;
    let newPost= new Post({postName:postName,imageURL:imageURL,caption:caption});
    await newPost.save();
    res.send("post added!!");

}
module.exports.getOnePost=async(req,res)=>{
    const {id} = req.params;
    let post= await Post.findOne({_id:id});
    res.json(post);
}
module.exports.deleteOnePost=async(req,res)=>{
    const {id} =req.params;
   await Post.deleteOne({_id:id});
   res.send("post deleted!!");

    
}
module.exports.putUpdatePost=async(req,res)=>{
    const {id} =req.params;
    const {postName,imageURL,caption} =req.body;
    const post=await Post.findOne({_id:id});
    // console.log(post);
    post.postName=postName;
    post.imageURL=imageURL;
    post.caption=caption;
    await post.save();
    res.send("post updated");
    
}