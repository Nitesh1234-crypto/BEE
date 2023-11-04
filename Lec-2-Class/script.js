class Vehicle{
    constructor(name,price,model){
        this.name=name;
        this.price=price;
        this.model=model;
    }
    set setPrice(price){
        this.price=price;
    }
    get getPrice(){
        return this.price;
    }
    getModel(){
        return this.model
    }
  static  fun(){
        console.log("fun");
    }
  
}
// let vehicle1=new Vehicle("BMW",20000000,2022);
// vehicle1.setPrice=30;
// console.log(vehicle1);
// console.log(vehicle1.getPrice)
// console.log(vehicle1.getModel());
// Vehicle.fun()

//Inheritance

class Car extends Vehicle{
    constructor(name,price,model,tyers,color){
       super(name,price,model);
       this.tyers=tyers;
       this.color=color; 
    }
}
let car1= new Car("BMW",20000000,2022,4,"Blue");
console.log(car1);

