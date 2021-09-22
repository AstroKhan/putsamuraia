
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import Myposts from './Myposts';

const MypostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

    return ( 
    <Myposts updateNewPostText={onPostChange} addPost={addPost}
      posts={props.posts} />
    )}

    export default MypostsContainer;