import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import queryString from 'query-string';
import './Chat.scss';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {
      
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
    
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // sendMessage = () => {

  // };

  return(
    <h1>
      Chat
    </h1>
  )
};

export default Chat;