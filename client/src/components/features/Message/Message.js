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
      <div className='messageContainer justifyEnd'>
        <p className='sentText mr-10'>{trimmedName}</p>
        <div className='messageBox backgroundBlue'>
          <p className='messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    )
    :  (
      <div className='messageContainer justifyStart'>
        <div className='messageBox backgroundLight'>
          <p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
        </div>
        <p className='sentText ml-10'>{user}</p>
      </div>
    )
  );
};

export default Message;