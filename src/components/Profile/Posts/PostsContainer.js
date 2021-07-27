import React from 'react'
import { STORE_CONTEXT } from '../../../redux/constants';
import { newPostActionCreator, updateNewPostTextActionCreater } from '../../../redux/profile-reducer'
import Posts from './Posts'

const PostsContainer = () => {
  return <STORE_CONTEXT.Consumer>
    {
      store => {
        let posts = store.getState().profilePage.posts;

        let addPost = () => {
          store.dispatch(newPostActionCreator());
        }

        let onPostChange = (newPostText) => {
          store.dispatch(updateNewPostTextActionCreater(newPostText));
        }
        return <Posts addPost={addPost} updateNewPostText={onPostChange} posts={posts} />
      }
    }
  </STORE_CONTEXT.Consumer>
}

export default PostsContainer;