import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.scss';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return(
    <div>
      <div>
        <h1>Dołącz</h1>
        <div>
          <input type='text' placeholder='name' onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input type='text' placeholder='room' onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button type='submit'>Wejdź</button>
        </Link>
      </div>
    </div>
  )
};

export default Join;