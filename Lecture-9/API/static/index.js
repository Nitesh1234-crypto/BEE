let tasklist=document.querySelector(".tasklist");

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