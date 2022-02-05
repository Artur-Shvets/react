import React from 'react';
import './Dialog.css';
import { useParams } from 'react-router-dom';
import Messages from './Messages/Messages';
import DialogInput from './DialogInput/DialogInput';
import { useSelector } from 'react-redux';
import { changeInput, sendMessage, resetInput } from '../dialogsSlice';

export default function Dialog() {
  const dialogs = useSelector(state => state.dialogs.dialogs);
  const input = useSelector(state => state.dialogs.input);
  let params = useParams();
  let pageId = Number(params.dialogsId);
  let index = dialogs.findIndex(dialog => dialog.id === pageId);
  let messages = dialogs.find(dialog => dialog.id === pageId).messages;

  return (
    <div className='dialog'>
      <Messages messages={messages} />
      <DialogInput
        sendMessage={sendMessage}
        index={index}
        length={dialogs.length}
        changeInput={changeInput}
        input={input}
        resetInput={resetInput}
      />
    </div>
  );
}
