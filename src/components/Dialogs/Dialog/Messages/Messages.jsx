import React from 'react';
import './Messages.css';

export default function Messages(props) {
  return (
    <div className='dialog__messages'>
      {props.messages.map((message, i) => (
        <div key={i} className='dialog__message'>
          {message}
        </div>
      ))}
    </div>
  );
}
