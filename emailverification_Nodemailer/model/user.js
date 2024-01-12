const mongoose= require("mongoose");
const {Schema} =mongoose;

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    verify:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model("User",userSchema);
