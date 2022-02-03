import React, { useState, useEffect } from 'react';
import './DialogInput.css';

function DialogInput(props) {
	const [input, setInput] = useState('');

	const changeInput = e => {
		let element = e.target;
		setInput(element.value);
		element.style.cssText = 'height:auto';
		element.style.cssText = 'height:' + (element.scrollHeight - 20) + 'px';
	};

	const sendMessage = () => {
		if (input) {
			props.sendMessage(input, props.id);
			setInput('');
		}
	};

	useEffect(() => {
		setInput('');
	}, [props.id]);

	return (
		<div className='dialog__input'>
			<textarea
				placeholder='Написать сообщение...'
				value={input}
				rows={1}
				onChange={changeInput}
			/>
			<button className='btn btn_blue' onClick={sendMessage}>
				Send
			</button>
		</div>
	);
}

export default DialogInput;
