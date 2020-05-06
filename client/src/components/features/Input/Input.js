import React from 'react';
import './Input.scss';
// import { Link } from 'react-router-dom';

const Input = ({ message, sendMessage, setMessage }) => (
<form className='form'>
  <input
  className='input'
  type='text'
  placeholder='wpisz coś'
  value={message}
  onChange={(event) => setMessage(event.target.value)}
  onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
  />
  <button button='sendButton' onClick={(event) => sendMessage(event)}>
    wyślij
  </button>
</form>

);

export default Input;