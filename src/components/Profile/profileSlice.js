import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    posts: null,
    newPostText: '',
    profile: {},
  },
  reducers: {
    setUserProfile: (state, data) => {
      state.profile = data.payload;
    },
  },
});

export const { setUserProfile } = profileSlice.actions;

export default profileSlice.reducer;
