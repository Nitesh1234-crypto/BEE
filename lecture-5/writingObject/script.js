let userData=[
    {
        name:"Akash",
        age:22
    },
    {
        name:"Yashu",
        age:20
    }
]

let fs = require("fs");
let path=require("path");
let fileName="user.json";
let filePath=path.join(__dirname,"..","data",fileName);

fs.writeFile(
    filePath,
    JSON.stringify(userData),
    (err)=>{
         if(err) console.log(err.message);
    }
)