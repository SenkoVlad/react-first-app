import css from './Posts.module.css'
import Post from './Post/Post'
import React from 'react'

const Posts = (props) => {
  let postElements = props.profilePage.posts.map(post => <Post text={post.text} likes={post.likes} />)
  let addPostTextarea = React.createRef();

  let addPost = () =>{
    props.addPost();
    addPostTextarea.current.value = '';
  } 
  
  let onPostChange = () => {
    let newPostText = addPostTextarea.current.value;
    props.updateNewPostText(newPostText);
  }

  return (
  <div>
      <div>
        <div>
          <textarea ref={addPostTextarea} onChange={onPostChange}></textarea>
        </div>
        <div>
          <button onClick={addPost}>New post</button>
        </div>
      </div>
      <h3>My posts</h3>
      <div className={css.paddingTop10}>
        { postElements}
      </div>
    </div>
  )
}

export default Posts;