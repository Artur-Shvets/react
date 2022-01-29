import React from 'react';
import s from './NavBar.module.css';
import { NavLink, Outlet } from "react-router-dom";

const getStyle = ({ isActive }) => isActive ? s.red : s.blue;

const NavBar = () => {
  return <>
    <nav className={s.nav}>
      <NavLink className={getStyle} to='/Dialogs'>Dialogs</NavLink>
      <NavLink className={getStyle} to='/Profile'>Profile</NavLink>
      <NavLink className={getStyle} to='/Users'>Users</NavLink>
    </nav>
    <div className='app-wrapper-content-main'>
      <Outlet />
    </div>
  </>;
}

export default NavBar;
