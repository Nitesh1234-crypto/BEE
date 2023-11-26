let fs = require("fs");
let path= require("path");
let filepath=path.join(__dirname,"..","data","todo.js")
class todo{
   static gettodo(){
    return new Promise((resolve,reject)=>{
       fs.readFile(
        filepath,
        {
            encoding:"utf-8"
        },
        (err,data)=>{
            if(err) return reject(err.message);
            resolve(JSON.parse(data));
        }
   
       ) 
    })
   }

   static addtodo(value){
    return new Promise((resolve,reject)=>{
        fs.readFile(
            filepath,
            {
                encoding:"utf-8"
            },
            (err,data)=>{
                if(err) return reject(err.message);
               if(data.length==0){
                data=[]
               }else{
                data=JSON.parse(data);
               }
                
                data.push(value);
                fs.writeFile(
                    filepath,
                    JSON.stringify(data),
                    (err)=>{
                        if(err) return reject(err.message);
                        resolve("task added");
                    }
                )
                
            }
       
           ) 
    })
   }
}

module.exports=todo;