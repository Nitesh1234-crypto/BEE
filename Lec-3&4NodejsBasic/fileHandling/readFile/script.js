let fs= require("fs");
let path= require("path");
let fileName="data3.txt";
let filePath= path.join(__dirname,"..","data",fileName);

fs.readFile(
    filePath,
    {
        encoding:"utf-8"
    },
    (err,data)=>{
        if(err) return err.message;
        console.log(data);
    }
)

