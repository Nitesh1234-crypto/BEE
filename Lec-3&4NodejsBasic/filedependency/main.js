let lib1=require("./lib1");// {cat,foo}
let lib2=require("./lib2"); //{dog,food}
console.log(lib1);
console.log(lib2);
console.log(lib1.lib2.lib1==lib1);