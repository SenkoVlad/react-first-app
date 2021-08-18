import css from './Posts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name='newposttext' component='textarea' />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    </div>
  );
}

const ReduxPostForm = reduxForm({
  form: 'post'
})(PostForm);

const Posts = (props) => {
  let postElements = props.posts.map(post => <Post text={post.text} likes={post.likes} key={post.id} />)

  let onSubmit = (formData) => {
    props.addPost(formData.newposttext);
  }
  return (
    <div>
      <div>
        <ReduxPostForm onSubmit={onSubmit} />
      </div>
      <h3>My posts</h3>
      <div className={css.paddingTop10}>
        {postElements}
      </div>
    </div>
  )
}

export default Posts;
