import React, { useState } from 'react';
import './MyPosts.css';
import Post from './Post/Post';

function MyPosts(props) {
	const [input, setInput] = useState('');
	const [posts, setPosts] = useState(props.posts());

	const changeInput = e => {
		setInput(e.target.value);
	};

	const addPost = () => {
		setPosts(
			posts.concat({
				id: posts.length + 1,
				message: input,
				likesCount: 0,
			})
		);
		setInput('');
	};

	const addLike = e => {
		let id = Number(e.target.id);
		let index = posts.findIndex(post => post.id === id);
		let clonePosts = [...posts];
		clonePosts[index].likesCount++;
		setPosts(clonePosts);
	};

	return (
		<div className='posts'>
			<h3>My posts</h3>
			<div className='posts__input'>
				<div>
					<textarea value={input} onChange={changeInput}></textarea>
				</div>
				<div>
					<button onClick={addPost} className='btn btn_yellow'>
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

export default MyPosts;
