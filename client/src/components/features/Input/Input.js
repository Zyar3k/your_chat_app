import React from 'react';
import './Input.scss';
import { Link } from 'react-router-dom';

const Input = ({ message, sendMessage, setMessage }) => (
<form>
  <input
  type='text'
  placeholder='wpisz coś'
  value={message}
  onChange={(event) => setMessage(event.target.value)}
  onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
  />
  <button onClick={(event) => sendMessage(event)}>
    wyślij
  </button>
</form>

);

export default Input;