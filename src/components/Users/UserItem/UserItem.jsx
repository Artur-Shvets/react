import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './UserItem.css';

export default function UserItem(props) {
  const [user, follow] = props.data;
  const dispatch = useDispatch();

  return (
    <div className='user-item'>
      <div className='user-item__ava'>
        <NavLink to={`/profile/${user.id}`}>
          <img
            src={user.photos.small ? user.photos.small : '/Saitama2.jpg'}
            alt='ava'
          ></img>
        </NavLink>
        <button
          className='btn btn_blue'
          onClick={() => dispatch(follow(user.id))}
        >
          {user.followed ? 'UNFOLLOW' : 'FOLLOW'}
        </button>
      </div>
      <div className='user-item__info'>
        <div className='user-item__info-row1'>
          <div>{user.name}</div>
        </div>
        <div className='user-item__info-row2'>
          <div className='user-item__status'>{user.status}</div>
        </div>
      </div>
    </div>
  );
}
