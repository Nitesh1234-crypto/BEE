let obj={
    name:"Akash",
    age:21,
    fun:()=>{
        console.log(this); //window
    }
}
obj.fun();
let obj2={
    name:"Akash",
    age:21,
    foo:function(){

       let fun=()=>{
        console.log(this); //same as foo

    }
    fun();
 }
}
obj.foo();

function foo2(){
    let fun2=()=>{
        console.log(this);//window
    }
    fun2();
}
foo2();