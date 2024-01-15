function fun(name,age){
    this.name=name;
    this.age=age;
}
let obj=new fun("Akash",21);
console.log(obj); //this ---> obj;
