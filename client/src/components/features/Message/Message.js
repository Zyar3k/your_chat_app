import React from 'react';
import './Message.scss';
import ReactEmoji from 'react-emoji';

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
          <p>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    )
    :  (
      <div>
        <div>
          <p>{ReactEmoji.emojify(text)}</p>
        </div>
        <p>{user}</p>
      </div>
    )
  );
};

export default Message;