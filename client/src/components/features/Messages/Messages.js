import React from 'react';
import './Messages.scss';
import ScrollToBotoom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

const Messages = ({ messages, name }) => (
  <ScrollToBotoom>
    {messages.map((message, index) => <div key={index}><Message message={message} name={name} /></div>)}
  </ScrollToBotoom>
);

export default Messages;