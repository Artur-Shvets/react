import React, { useEffect, useRef } from 'react';
import './DialogInput.css';
import { useDispatch } from 'react-redux';

export default function DialogInput(props) {
  const dispatch = useDispatch();
  const textArea = useRef(null);

  const onChangeInput = e => {
    let element = e.target;
    dispatch(props.changeInput(element.value));
    element.style.cssText = 'height:auto';
    element.style.cssText = 'height:' + (element.scrollHeight - 20) + 'px';
  };

  const onClickButton = () => {
    dispatch(props.sendMessage(props.index));
    textArea.current.style.cssText = 'height: auto';
  };

  useEffect(() => {
    dispatch(props.resetInput());
  }, [props.index]);

  return (
    <div className='input'>
      <textarea
        ref={textArea}
        placeholder='Написать сообщение...'
        value={props.input}
        rows={1}
        onChange={onChangeInput}
      />
      <button className='btn btn_blue' onClick={onClickButton}>
        Send
      </button>
    </div>
  );
}
