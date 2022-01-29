import React from 'react';
import './Profile.css';

function ProfileContainer(props) {
  return (
    <div className='profile'>
      <div className='profile-image'>
        <img src='universe.jpg' alt='profile background'></img>
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New Post</div>
      </div>
      <div>
        <div>post 1</div>
        <div>post 2</div>
        <div>post 3</div>
        <div>post 4</div>
        <div>post 5</div>
      </div>
    </div>
  );
}

export default ProfileContainer;
