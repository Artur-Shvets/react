import React from 'react';
import './Dialog.css';
import { useParams } from 'react-router-dom';
import Messages from './Messages/Messages';
import DialogInput from './DialogInput/DialogInput';

function Dialog(props) {
	let params = useParams();
	let id = Number(params.dialogsId);
	let messages = props.dialogsData.find(dialog => dialog.id === id).messages;

	return (
		<div className='dialog'>
			<Messages messages={messages} />
			<DialogInput
				sendMessage={props.sendMessage}
				id={id}
				length={props.dialogsData.length}
			/>
		</div>
	);
}

export default Dialog;
