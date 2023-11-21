let tasklist=document.querySelector(".tasklist");
let form = document.querySelector(".myform");
let input=document.querySelector("#taskitem");

form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    let taskitem=input.value;
    // axios.post("/addtodo",{
    //      taskitem:taskitem
    // }).then((data)=>{
    //     console.log(data);
    //     input.value="";
    //     let div =document.createElement("div");
    //     div.innerText=`${taskitem}`;
    //     tasklist.append(div); 

    // })
    axios.post("/addtodo",{
        taskitem:taskitem
    },{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
      
    }
    ).then((data)=>{
        console.log(data);
    })
})

function showData(data){
    console.log(data);
    console.log(tasklist);
    data.forEach(task => {
        console.log(task);
        let div =document.createElement("div");
        div.innerText=`${task}`;
        tasklist.append(div); 
    });
}
async function getdata(Api){
    let data = await fetch(Api);
   let responsedata=await data.json()
   console.log(responsedata);
   showData(responsedata);
}


getdata("/gettodo");