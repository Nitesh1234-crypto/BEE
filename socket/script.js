const express = require('express');
const app =express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path=require("path")
app.use(express.static(path.join(__dirname,"static")));
io.on('connection', (socket) => { 
 console.log(socket);
 socket.emit("signIn","your are connected to chat application!!");
 socket.on("hello",(msg)=>{
    console.log(msg);
    socket.emit("reply","bta kya batana hai!!");
 })
});
server.listen(3000);