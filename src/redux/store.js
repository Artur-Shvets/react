import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/counterSlice';
import postsReducer from '../components/Profile/MyPosts/postsSlice';
import dialogsReducer from '../components/Dialogs/dialogsSlice';
import usersReducer from '../components/Users/usersSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    counter: counterReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
  },
});
