import React from 'react';
import './Users.css';
import uniqid from 'uniqid';
import { useSelector, useDispatch } from 'react-redux';
import { follow } from './usersSlice';

export default function Users() {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  return (
    <div className='users'>
      <h1>Users</h1>
      {users.map(user => (
        <div key={uniqid()} className='user'>
          <div className='user__ava'>
            <img src='/Saitama2.jpg' alt='ava'></img>
            <button
              className='btn btn_blue'
              onClick={() => dispatch(follow(user.id))}
            >
              {user.followed ? 'FOLLOW' : 'UNFOLLOW'}
            </button>
          </div>
          <div className='user__info'>
            <div className='user__info-row1'>
              <div>{user.fullName}</div>
              <div>{user.location.country}</div>
            </div>
            <div className='user__info-row2'>
              <div className='user__status'>{user.status}</div>
              <div>{user.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
