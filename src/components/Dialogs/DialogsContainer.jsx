import React from 'react';
import s from './Dialogs.module.css';

function DialogsContainer(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        dialogsElement
      </div>
      <div className={s.messages}>
        <div>messagesElement</div>
        <div>
          <div><textarea placeholder='Enter your message'></textarea></div>
          <div><button>Send</button></div>
        </div>
      </div>
    </div>
  );
}

export default DialogsContainer;
