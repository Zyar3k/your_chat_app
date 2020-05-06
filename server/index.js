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

    socket.emit('message', { user: 'szef', text: `${user.name}, witaj wreszcie w pokoju ${user.room}`});

    socket.broadcast.to(user.room).emit('message', { user: 'szef', text: `${user.name}, wreszie się pojawił :)`})

    socket.join(user.room);
    
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    console.log('User had left :( ')
  });

});


server.listen(PORT, () => console.log(`Wonderful!! Server has started on ${PORT}`));