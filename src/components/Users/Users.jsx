import React, { useEffect } from 'react';
import './Users.css';
import uniqid from 'uniqid';
import { useSelector, useDispatch } from 'react-redux';
import { follow, setUsers, pageChanged, toggleIsFetching } from './usersSlice';
import * as axios from 'axios';
import Pagination from './Pagination/Pagination';
import UserItem from './UserItem/UserItem';
import Preloader from './Preloader/Preloader';

export default function Users() {
  const { users, totalUsersCount, pageSize, currentPage, isFetching } =
    useSelector(state => state.users);

  useGetUsers(pageSize, currentPage, toggleIsFetching, setUsers);

  return (
    <div className='users'>
      <h1>Users</h1>
      <Pagination
        data={[totalUsersCount, pageSize, currentPage, pageChanged]}
      />
      {isFetching ? <Preloader /> : null}
      {users.map(user => (
        <UserItem key={uniqid()} data={[user, follow]} />
      ))}
    </div>
  );
}

function useGetUsers(pageSize, currentPage, toggleIsFetching, setUsers) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleIsFetching(true));
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then(response => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data));
      });
  }, [currentPage]);
}
