var socket = io();

// Sending Event From Client to Server
let btn = document.getElementById('btn');
btn.onclick = function exec () {
    socket.emit('from_client');
}


// Receiving Event From Server
socket.on('from_server', () => {
    console.log("Collected a new event from server");
    const div = document.createElement('div');
    div.innerText = 'New event from server';
    document.body.appendChild(div);
});