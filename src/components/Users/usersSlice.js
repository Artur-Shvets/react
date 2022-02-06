import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
  },
  reducers: {
    follow: (state, userId) => {
      let index = state.users.findIndex(user => user.id === userId.payload);
      let followUser = state.users[index];
      followUser.followed = !followUser.followed;
    },
    setUsers: (state, users) => {
      state.users = users.payload.items;
      state.totalCount = users.payload.totalCount;
    },
    pageChanged: (state, page) => {
      state.currentPage = page.payload;
    },
  },
});

export const { follow, setUsers, pageChanged } = usersSlice.actions;
export default usersSlice.reducer;
