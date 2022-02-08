import React, { useEffect } from 'react';
import './ProfileInfo.css';
import Preloader from '../../Users/Preloader/Preloader';

export default function ProfileInfo(props) {
  const photos = props.profile.photos;
  let avatar = '/Saitama2.jpg';

  if (photos) {
    if (photos.small) {
      avatar = photos.small;
    }
  }

  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className='profile-image'>
        <img src='/universe.jpg' alt='profile background'></img>
      </div>
      <div>
        <img src={avatar} alt='ava'></img>
        <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
}
