import React from 'react';
import './Topbar.scss';
import { Link } from 'react-router-dom';

const Topbar = ({ room }) => (
<div>
  <div>
    <div>ON!</div>
    <div>{room}</div>
  </div>
  <div>
    <Link to='/'>
      X
    </Link>
  </div>
</div>

);

export default Topbar;