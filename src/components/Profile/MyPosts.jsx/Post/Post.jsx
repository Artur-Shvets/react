import React from 'react';
import './Post.css';

function Post(props) {
	return (
		<div className='post'>
			<div className='post__ava'>
				<img src='Saitama3.jpg' alt='ava'></img>
				<div className='post__likes'>
					<img src='Likes3.png' alt='likes'></img>
					<div>{props.post.likesCount}</div>
				</div>
			</div>
			<div className='post__container'>
				<div className='post__number'>post {props.post.id}</div>
				<div className='post__text'>{props.post.message}</div>
			</div>
		</div>
	);
}

export default Post;
