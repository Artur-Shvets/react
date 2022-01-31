import React from 'react';
import './ProfileInfo.css';

function ProfileInfo() {
  return (
    <div>
      <div className='profile-image'>
        <img src='universe.jpg' alt='profile background'></img>
      </div>
      <div>ava + description</div>
    </div>
  );
}

export default ProfileInfo;
