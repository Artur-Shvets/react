import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    totalUsersCount: null,
    pageSize: 10,
    currentPage: null,
    isFetching: true,
  },
  reducers: {
    follow: (state, userId) => {
      let index = state.users.findIndex(user => user.id === userId.payload);
      let followUser = state.users[index];
      followUser.followed = !followUser.followed;
    },
    setUsers: (state, users) => {
      state.users = users.payload.items;
      if (!state.totalUsersCount) {
        state.totalUsersCount = users.payload.totalCount;
        state.currentPage = 1;
      }
    },
    pageChanged: (state, page) => {
      state.currentPage = page.payload;
    },
    toggleIsFetching: (state, value) => {
      state.isFetching = value.payload;
    },
  },
});

export const { follow, setUsers, pageChanged, toggleIsFetching } =
  usersSlice.actions;

export default usersSlice.reducer;
