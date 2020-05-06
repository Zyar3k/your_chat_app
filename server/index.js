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

    socket.emit('message', { user: 'szef', text: `${user.name}, witaj w pokoju ${user.room}`});

    socket.broadcast.to(user.room).emit('message', { user: 'szef', text: `${user.name}, wreszie się pojawił :)`})

    socket.join(user.room);

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });    
    io.to(user.room).emit('roomData', { user: user.room, users: getUsersInRoom(user.room) });    

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'szef', text: `Użytkownik ${user.name} opuścił pokój`})
    }
  });
});


server.listen(PORT, () => console.log(`Wonderful!! Server has started on ${PORT}`));