import React, { useRef } from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import { useSelector, useDispatch } from 'react-redux';
import { addLike, changeInput, addPost } from './postsSlice';

export default function MyPosts() {
	const posts = useSelector(state => state.posts.posts);
	const input = useSelector(state => state.posts.input);
	const inputValue = useRef(null);
	const dispatch = useDispatch();

	return (
		<div className='posts'>
			<h3>My posts</h3>
			<div className='posts__input'>
				<div>
					<textarea
						ref={inputValue}
						value={input}
						onChange={() => dispatch(changeInput(inputValue.current.value))}
					></textarea>
				</div>
				<div>
					<button
						onClick={() => dispatch(addPost())}
						className='btn btn_yellow'
					>
						Add post
					</button>
				</div>
			</div>

			<div className='posts__list'>
				{[...posts].reverse().map((post, i) => (
					<Post key={i} post={post} addLike={addLike} />
				))}
			</div>
		</div>
	);
}
