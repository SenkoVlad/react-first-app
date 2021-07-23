import React from 'react'
import {newPostActionCreator, updateNewPostTextActionCreater} from '../../../redux/profile-reducer'
import Posts from './Posts'

const PostsContainer = (props) => {
  let stage = props.store.getState();
  let posts = stage.profilePage.posts;

  let addPost = () =>{
    props.store.dispatch(newPostActionCreator());
  } 
  
  let onPostChange = (newPostText) => {
    props.store.dispatch(updateNewPostTextActionCreater(newPostText));
  }

  return <Posts addPost={addPost} updateNewPostText={onPostChange} posts={posts}/>
}

export default PostsContainer;