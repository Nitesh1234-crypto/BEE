const mongoose= require("mongoose");
const {Schema}= mongoose;

const tokenSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    token:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model("Token",tokenSchema);
