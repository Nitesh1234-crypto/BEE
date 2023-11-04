let fs= require("fs");
let path= require("path");
let fileName="data3.txt";
let filePath= path.join(__dirname,"..","data",fileName);
fs.writeFile(
    filePath,
    "again again ...!!!!",
    {
        encoding:"utf-8",
        flag:"a"
    },
    (err)=>{
           if(err){
            console.log(err.message);
           }
    }
)