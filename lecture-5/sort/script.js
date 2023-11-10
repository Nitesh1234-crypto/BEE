let fs= require("fs");
let path=require("path");
let fileA=path.join(__dirname,"fileA.txt");
let fileB=path.join(__dirname,"fileB.txt");
let resultFile=path.join(__dirname,"result.json");

function read(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(
          file,
          {
            encoding:"utf-8"
          },
           (err,data)=>{
              if(err) return reject(err.message);
              resolve(data);
           } 
        )
    })
}

read(fileA).then((data1)=>{
    data1=data1.split("\r\n");
    console.log(data1);
    read(fileB).then((data2)=>{
        data2=data2.split("\r\n");
        console.log(data2);

        let res=[...data1,...data2];
        res = res.sort((a,b)=>a-b);
        console.log(res);
        fs.writeFile(
            resultFile,
            JSON.stringify(res),
            (err)=>{
                if(err) console.log(err.message);
            }
        )

    })
})