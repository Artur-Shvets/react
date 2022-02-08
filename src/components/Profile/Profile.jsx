import React, { useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserProfile } from './profileSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const profileData = useSelector(state => state.profile.profile);
  let params = useParams();
  let userId = params.profileId;
  if (userId === 'me') {
    userId = 2;
  }

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        dispatch(setUserProfile(response.data));
      });
  }, [userId]);

  return (
    <div className='profile'>
      <ProfileInfo profile={profileData} />
      <MyPosts />
    </div>
  );
}
