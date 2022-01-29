import React from 'react';
import MyPosts from './MyPosts.jsx/MyPosts';
import './Profile.css';

export default function Profile(props) {
  return (
    <div className='profile'>
      <div className='profile-image'>
        <img src='universe.jpg' alt='profile background'></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
}
