const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on('connection', (socket) => {
  // console.log('Amazing... New connection');

  socket.on('join', ({ name, room }, callback) => {
    // console.log(name, room)
    const { error, user } = addUser({ id: socket.id, name, room});

    if(error) return callback(error);

    socket.join(user.room);
    
  });

  socket.on('disconnect', () => {
    console.log('User had left :( ')
  });

});


server.listen(PORT, () => console.log(`Wonderful!! Server has started on ${PORT}`));