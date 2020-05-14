let socket = io.connect('https://xno-sockets.herokuapp.com/');
$(document).ready(function(){
    let player = $('#player');
    
    let box0 = $('#0')
    let box1 = $('#1')
    let box2 = $('#2')
    let box3 = $('#3')
    let box4 = $('#4')
    let box5 = $('#5')
    let box6 = $('#6')
    let box7 = $('#7')
    let box8 = $('#8')
    let grid = [box0,box1,box2,box3,box4,box5,box6,box7,box8]
    let char = ['X',"O"]
    let playerChar;

    socket.on('init',function(index){
        playerChar = char[Number(index)]
        player.html(playerChar)
    })
    
    socket.on('play',function(data){
        grid[data.box].html(data.char)
    })

    function play(box,player){
        if(grid[box].text() === ('.')){
            grid[box].html(char[player])
        }
    }

    box0.on('click',()=>{
        if(box0.text() == '.'){
          socket.emit('play',{box:0,char:playerChar})
        }
    })
    box1.on('click',()=>{
        if(box1.text() == '.'){
            socket.emit('play',{box:1,char:playerChar})
        }
    })
    box2.on('click',()=>{
        if(box2.text() == '.'){
            socket.emit('play',{box:2,char:playerChar})
        }
    })
    box3.on('click',()=>{
        if(box3.text() == '.'){
            socket.emit('play',{box:3,char:playerChar})
        }
    })
    box4.on('click',()=>{
        if(box4.text() == '.'){
            socket.emit('play',{box:4,char:playerChar})
        }
    })
    box5.on('click',()=>{
        if(box5.text() == '.'){
            socket.emit('play',{box:5,char:playerChar})
        }
    })
    box6.on('click',()=>{
        if(box6.text() == '.'){
            socket.emit('play',{box:6,char:playerChar})
        }
    })
    box7.on('click',()=>{
        if(box7.text() == '.'){
            socket.emit('play',{box:7,char:playerChar})
        }
    })
    box8.on('click',()=>{
        if(box8.text() == '.'){
            socket.emit('play',{box:8,char:playerChar})
        }
    })

})









 // setTimeout(function(){
    //     stopwatch.html('GO!')
    //     setInterval(function(){
    //         stopwatch.html(seconds+' s')
    //         seconds++
    //     },1000)
    // },4000)