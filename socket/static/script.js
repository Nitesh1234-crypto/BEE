const socket = io();


socket.on("signIn",(msg)=>{
    console.log(msg);
})
socket.emit("hello","ek baat batani hai");
socket.on("reply",(msg)=>{
    console.log(msg);
})