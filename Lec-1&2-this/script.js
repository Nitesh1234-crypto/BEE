console.log(this); //this -->window object

// foo();

//implicit binding
let obj={
    name:"xyz",
    age:20,
    fun:foo
}
let obj2={
    name:"xyz2",
    age:22,
    fun:foo
}

obj.fun(); //this-->obj ------>xyz
obj2.fun();//this-->obj2 ----->xyz2


//explicit binding

let obj3={
    name:"xyz3",
    age:21
}
// foo();
//1.call();

foo.call(obj3)
let arr=["Cricket","Hockey"]
// foo.call(obj3,arr[0],arr[1]);

//2.apply
foo.apply(obj3,arr);

//3.bind
let xyz=foo.bind(obj3);
console.log(xyz);

function fun2(cb){
cb();
}
fun2(xyz);
function foo(...args){
    // console.log(args[0],args[1]);
    console.log(this);
}


let obj4={
    fun:function(){
        function foo(){
            console.log(this) //window object
        }
        foo()
    }
}
obj4.fun();



