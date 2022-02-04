import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/counterSlice';
import postsReducer from '../components/Profile/MyPosts/postsSlice';

export default configureStore({
	reducer: {
		posts: postsReducer,
		counter: counterReducer,
	},
});
