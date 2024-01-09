const mongoose =require("mongoose");
const {Schema}=mongoose;

let userSchema= new mongoose.Schema({
    username:String,
    password:String,
    blog:[
        {
            type:Schema.Types.ObjectId,
            ref:"blog"
        }
    ]
})

module.exports= mongoose.model("User",userSchema);