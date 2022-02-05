import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [
			{ id: 1, message: 'Hello tratata', likesCount: 12 },
			{ id: 2, message: 'Whatsup!!!!!', likesCount: 2 },
			{ id: 3, message: 'O la la', likesCount: 6 },
			{ id: 4, message: 'Hello World', likesCount: 255 },
			{ id: 5, message: 'Best practice', likesCount: 9 },
		],
		input: '',
	},
	reducers: {
		addLike: (state, id) => {
			let index = state.posts.findIndex(post => post.id === id.payload);
			state.posts[index].likesCount += 1;
		},
		changeInput: (state, e) => {
			state.input = e.payload;
		},
		addPost: state => {
			if (state.input) {
				state.posts.push({
					id: state.posts.length + 1,
					message: state.input,
					likesCount: 0,
				});
				state.input = '';
			}
		},
	},
});

export const { addLike, changeInput, addPost } = postsSlice.actions;

export default postsSlice.reducer;
