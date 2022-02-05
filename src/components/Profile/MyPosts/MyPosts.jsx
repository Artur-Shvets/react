import React, { useRef } from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import { useSelector, useDispatch } from 'react-redux';
import { addLike, changeInput, addPost } from './postsSlice';

export default function MyPosts() {
  const posts = useSelector(state => state.posts.posts);
  const input = useSelector(state => state.posts.input);
  const dispatch = useDispatch();
  const textArea = useRef(null);

  const onChangeInput = e => {
    let element = e.target;
    dispatch(changeInput(element.value));
    element.style.cssText = 'height:auto';
    element.style.cssText = 'height:' + (element.scrollHeight - 20) + 'px';
  };

  const onClickButton = () => {
    dispatch(addPost());
    textArea.current.style.cssText = 'height: auto';
  };

  return (
    <div className='posts'>
      <h3>My posts</h3>
      <div className='input'>
        <textarea
          ref={textArea}
          placeholder='Написать пост...'
          rows={1}
          value={input}
          onChange={onChangeInput}
        ></textarea>
        <button onClick={onClickButton} className='btn btn_yellow'>
          Add post
        </button>
      </div>

      <div className='posts__list'>
        {[...posts].reverse().map((post, i) => (
          <Post key={i} post={post} addLike={addLike} />
        ))}
      </div>
    </div>
  );
}
