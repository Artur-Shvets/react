import React from 'react';
import './NavBar.css';
import { NavLink, Outlet } from 'react-router-dom';

const getStyle = ({ isActive }) =>
  isActive ? 'nav-bar__item nav-bar__item_red' : 'nav-bar__item';

export default function NavBar() {
  return (
    <>
      <nav className='nav-bar'>
        <NavLink className={getStyle} to='dialogs'>
          Dialogs
        </NavLink>
        <NavLink className={getStyle} to='/profile/me'>
          Profile
        </NavLink>
        <NavLink className={getStyle} to='users'>
          Users
        </NavLink>
        <NavLink className={getStyle} to='counter'>
          Counter
        </NavLink>
      </nav>
      <div className='app-wrapper-content-main'>
        <Outlet />
      </div>
    </>
  );
}
