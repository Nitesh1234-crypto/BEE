const fs=require("fs");
const path=require("path");
const filePath=path.join(__dirname,"..","data","post.json");


class POST{
    static getpost(){
        return new Promise((resolve,reject)=>{
            fs.readFile(filePath,{encoding:"utf-8"},(err,data)=>{
                if(err) return reject(err.message);
                if(data.length==0) return resolve([]);
                resolve(JSON.parse(data));
            })
        })
    }
    static getOnePost(id){
        return new Promise(async(resolve,reject)=>{
            try {
                let data= await POST.getpost();
                let onepost= data.filter((d)=>d.id==id);
                console.log(onepost);
                if(onepost.length==0){
                    return  reject([]);
                }
                resolve(onepost[0]);
                
            } catch (error) {
                reject(error);
            }
           
        })
    }
    static  addpost(newpost){
        return new Promise(async (resolve,reject)=>{
            try{
            let data=await POST.getpost();
            console.log(data);
            data.push(newpost);
            fs.writeFile(filePath,JSON.stringify(data),(err)=>{
                if(err) return reject(err.message);
                resolve("new post added");
            })
          }catch(err){
               reject(err);
         }
        }) 
    }
    static deletepost(id){
        return new Promise(async(resolve,reject)=>{
            try {
                let data= await POST.getpost();
                let newdata=data.filter((d)=>d.id!=id);
                fs.writeFile(filePath,JSON.stringify(newdata),(err)=>{
                if(err) return reject(err.message)
                resolve("post deleted");
            })
            } catch (error) {
                reject(error);
            }
            
        })
    }
    static editpostput(id,editdata){
         return new Promise(async(resolve, reject) => {
            try {
                let data=await POST.getpost()
                let updatedData= data.map((d)=>{
                    if(d.id==id){
                        return editdata;
                    }else{
                        return d;
                    }
                   
    
                })
                fs.writeFile(filePath,JSON.stringify(updatedData),(err)=>{
                    if(err) return reject(err.message);
                    resolve("post updated");
                })
                
            } catch (error) {
                reject(error)
            }
           
        })


    }
}
module.exports=POST;