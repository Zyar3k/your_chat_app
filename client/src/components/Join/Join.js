import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.scss';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return(
    <div className='join'>
      <div className='joinContainer'>
        <h1>Cz@-App</h1>
        <p>
          Wybierz swój nick, wybierz pokój, zaporś przyjaciół, rozmawiaj do woli...
        </p>
        <div className='inputWrapper'>
          <label >Imię</label>
          <input name='name' type='text' onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='inputWrapper'>
          <label >Twój pokój</label>
          <input name='room' type='text' onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className='joinButton' type='submit'>Wejdź</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;