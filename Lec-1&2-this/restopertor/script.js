function add(a,b){
    let sum=0;
    sum=a+b;
    console.log(sum)
}
add(2,3);

function add2(...args){
    let sum=0;
  args.forEach((a)=>{
         sum+=a;
  })
  console.log(sum);
}
add2(1,2,3)