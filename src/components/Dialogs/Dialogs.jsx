import React from 'react';
import './Dialogs.css';

export default function Dialogs(props) {
  return (
    <div className='dialogs'>
      <div className='dialogsItems'>
        dialogsElement
      </div>
      <div className='messages'>
        <div>messagesElement</div>
        <div>
          <div><textarea placeholder='Enter your message'></textarea></div>
          <div><button>Send</button></div>
        </div>
      </div>
    </div>
  );
}
