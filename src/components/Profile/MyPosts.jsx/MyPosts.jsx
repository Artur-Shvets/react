import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

function MyPosts(props) {
	const posts = props.posts();

	return (
		<div className='posts'>
			<h3>My posts</h3>
			<div className='posts__input'>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button className='btn btn_yellow'>Add post</button>
				</div>
			</div>
			<div className='posts__list'>
				{posts.map((post, i) => (
					<Post key={i} post={post} />
				))}
			</div>
		</div>
	);
}

export default MyPosts;
