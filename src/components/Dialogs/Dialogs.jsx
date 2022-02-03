import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dialogs.css';

const getStyle = ({ isActive }) =>
	isActive ? 'nav-bar__item nav-bar__item_red' : 'nav-bar__item';

export default function Dialogs(props) {
	let dialogs = props.dialogsData;

	return (
		<div className='dialogs'>
			<nav className='nav-bar'>
				{dialogs.map(dialog => (
					<NavLink
						className={getStyle}
						to={`/dialogs/${dialog.id}`}
						key={dialog.id}
					>
						{dialog.name}
					</NavLink>
				))}
			</nav>
			<Outlet />
		</div>
	);
}
