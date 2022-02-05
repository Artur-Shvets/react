import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dialogs.css';
import { useSelector } from 'react-redux';

const getStyle = ({ isActive }) =>
  isActive ? 'nav-bar__item nav-bar__item_red' : 'nav-bar__item';

export default function Dialogs() {
  const dialogs = useSelector(state => state.dialogs.dialogs);

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
