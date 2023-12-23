const mongoose=require("mongoose");

const postSchema= new mongoose.Schema({
    postName:String,
    imageURL:String,
    caption:String
})

module.exports=mongoose.model("Post",postSchema)
