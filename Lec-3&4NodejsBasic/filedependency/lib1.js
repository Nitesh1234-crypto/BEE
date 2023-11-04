console.log("running lib1");
let lib2=require("./lib2");
function cat(){
   console.log("cat says meww");
}

let food ="Fish";
module.exports.cat=cat;
module.exports.food=food;
module.exports.lib2=lib2; //for circular dependency use this method, it return a reference of the object

// module.exports={
//     cat,
//     food,
//     lib2
  
// }