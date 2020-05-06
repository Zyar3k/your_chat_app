import React from 'react';
import './Message.scss';

const Message = ({ message: { user, text }, name }) => {
  let currentUserSent = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName){
    currentUserSent = true;
  }

  return(
    currentUserSent
    ?  (
      <div>
        <p>{trimmedName}</p>
        <div>
          <p>{text}</p>
        </div>
      </div>
    )
    :  (
      <div>
        <div>
          <p>{text}</p>
        </div>
        <p>{user}</p>
      </div>
    )
  );
};

export default Message;