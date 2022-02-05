import { createSlice } from '@reduxjs/toolkit';

const initialUsers = [
  {
    id: 1,
    followed: true,
    fullName: 'Misha',
    status: 'never look back',
    location: { city: 'Uman', country: 'Ukraine' },
  },
  {
    id: 2,
    followed: false,
    fullName: 'Ayaneh',
    status: 'land of the pure',
    location: { city: 'Islamabad', country: 'Pakistan' },
  },
  {
    id: 3,
    followed: true,
    fullName: 'Ludvik',
    status: 'O LA LA',
    location: { city: 'Zurich', country: 'Switzerland' },
  },
];

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: initialUsers,
  },
  reducers: {
    follow: (state, userId) => {
      let index = state.users.findIndex(user => user.id === userId.payload);
      let followUser = state.users[index];
      followUser.followed = !followUser.followed;
    },
    setUsers: (state, users) => {
      state.users = users.payload;
    },
  },
});

export const { follow, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
