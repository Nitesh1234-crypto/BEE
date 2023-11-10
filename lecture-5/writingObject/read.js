let fs = require("fs");
let path=require("path");
let fileName="user.json";
let filePath=path.join(__dirname,"..","data",fileName);

fs.readFile(
    filePath,
    {
        encoding:"utf-8"
    },
    (err,data)=>{
        if(err) return err.message;
        console.log(data[0]);
        data= JSON.parse(data);
        console.log(data[0]);
    }
)