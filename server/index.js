const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);


server.listen(PORT, () => console.log(`Wonderful!! Server has started on ${PORT}`));