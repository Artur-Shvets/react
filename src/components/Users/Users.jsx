import React, { useEffect } from 'react';
import './Users.css';
import uniqid from 'uniqid';
import { useSelector, useDispatch } from 'react-redux';
import { follow, setUsers, pageChanged } from './usersSlice';
import * as axios from 'axios';

export default function Users() {
  const usersData = useSelector(state => state.users);
  const users = usersData.users;
  const totalCount = usersData.totalCount;
  const pageSize = usersData.pageSize;
  const currentPage = usersData.currentPage;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then(response => dispatch(setUsers(response.data)));
  }, [currentPage]);

  function getPages() {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let minPage = 1;
    if (pagesCount > 11) {
      if (currentPage > 5) {
        minPage = currentPage - 5;
      }
      if (currentPage >= pagesCount - 5) {
        minPage = pagesCount - 10;
      }
      pagesCount = 11;
    }
    return [...Array(pagesCount)].map(i => minPage++);
  }

  return (
    <div className='users'>
      <h1>Users</h1>
      <div className='users__pagination'>
        <span
          onClick={() => dispatch(pageChanged(currentPage - 1))}
          className='users__page'
        >
          {'<<'}
        </span>
        {getPages().map(p => (
          <span
            key={p}
            onClick={() => dispatch(pageChanged(p))}
            className={
              currentPage === p
                ? 'users__page users__page_selected'
                : 'users__page'
            }
          >
            {p}
          </span>
        ))}
        <span
          onClick={() => dispatch(pageChanged(currentPage + 1))}
          className='users__page'
        >
          {'>>'}
        </span>
      </div>

      {users.map(user => (
        <div key={uniqid()} className='user'>
          <div className='user__ava'>
            <img
              src={user.photos.small ? user.photos.small : 'Saitama2.jpg'}
              alt='ava'
            ></img>
            <button
              className='btn btn_blue'
              onClick={() => dispatch(follow(user.id))}
            >
              {user.followed ? 'UNFOLLOW' : 'FOLLOW'}
            </button>
          </div>
          <div className='user__info'>
            <div className='user__info-row1'>
              <div>{user.name}</div>
            </div>
            <div className='user__info-row2'>
              <div className='user__status'>{user.status}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
