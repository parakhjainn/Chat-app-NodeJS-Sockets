const express = require('express');
const app = express();

// Add Below lines to Setup a SocketIO server
const http = require('http');
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

// Middleware
app.use('/', express.static(__dirname + '/public'));

// start a new connection
io.on('connection', (socket) => {
    console.log('a user connected', socket.id); // For Every connection, there is a socketID = socket.id

    // Emitting an Event From Server
    setInterval(() => {
        socket.emit('from_server');
    }, 2000);

    // Receiving that Event From Client in Server
    socket.on('from_client', () => {
        console.log("Collected a new event coming from client");
    });
});

server.listen(3000, () => {
    console.log('Server Started');
})