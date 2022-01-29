import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div className='posts'>
      My posts
      <div>
        New Post
      </div>
      <div className='posts__list'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;
