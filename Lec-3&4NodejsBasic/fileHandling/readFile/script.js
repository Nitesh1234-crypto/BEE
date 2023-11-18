let fs= require("fs");
let path= require("path");
let filePath= path.join(__dirname,"..","data","data2.txt");

fs.readFile(
    filePath,
    {
        encoding:"utf-8"
    },
    (err,data)=>{
         if(err){
            console.log(err.message);
         }else{
            console.log(data);
         }
    }
)