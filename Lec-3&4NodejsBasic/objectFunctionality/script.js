let obj={
    a:10,
    b:"xyz"
}
let obj1={
    ...obj,
    c:30
}
console.log(obj1);

function add(a,b,c,...args){
    let sum=0
   args.map((el)=>{
      sum+=el;
   })
   return a+b+c+sum;
}
console.log(add(1,2,3,4,5,6,7,8,9));

let obj2={
    a:10,
    b:20,
    c:30
}
let a=20;
let b=30;
let c=40;
//shorthand
let obj3={
    a,
    b,
    c
}

