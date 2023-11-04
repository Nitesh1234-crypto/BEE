console.log("running lib2");
let lib1=require("./lib1");
function dog(){
   console.log("cat says brrr...!!");
}

let food ="Chicken";
module.exports.dog=dog;
module.exports.food=food;
module.exports.lib1=lib1; 
// module.exports={
//     dog,
//     food,
//     lib1
    
// }