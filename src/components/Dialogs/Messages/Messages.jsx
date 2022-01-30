import React from 'react';
import './Messages.css';
import { useParams } from 'react-router-dom';
import { getDialog } from '../../../data';

function Messages() {
	let params = useParams();
	let dialogData = getDialog(Number(params.dialogsId));
	return (
		<div className='messages'>
			{dialogData.messages.map((message, i) => (
				<div key={i} className='message'>
					{message}
				</div>
			))}
		</div>
	);
}

export default Messages;
