const express = require('express');
const app = express();
const socket = require('socket.io')
const port = 3000;
let players = [];

app.use("/", express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

const server = app.listen(port || 'localhost' || '192.168.0.28',()=>console.log(`listening to port ${port}`));
const io = socket(server);

io.on('connection',(socket)=>{
    console.log('new player ->',socket.id);
    let char = players.length == 0 ? 0 : 1
    let player = {
        id:socket.id,
        char:char
    }
    if(players.length < 2){
        players.push(player)
        io.to(socket.id).emit('init',char)
    }else{
        players = []
    }

    socket.on('play',(data)=>{
       console.log('new play',data)
       io.sockets.emit('play',data)
    })

})