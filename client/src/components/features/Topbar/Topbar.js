import React from 'react';
import './Topbar.scss';
import { Link } from 'react-router-dom';

const Topbar = ({ room }) => (
<div className='topbar'>
  <div className='dot active'></div>
  <div>{room}</div>
  <Link to='/'>
    <div className='dot out'></div>
  </Link>
</div>

);

export default Topbar;