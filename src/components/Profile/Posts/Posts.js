import css from './Posts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../Common/Utils/Validators'
import { Textarea } from '../../Common/FormControls'

const maxLength10 = maxLengthCreator(10);

const PostForm = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field name='newposttext' component={Textarea} validate={[required, maxLength10]} placeholder="New post" />
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

const Posts = React.memo(({ posts, addPost }) => {
  let postElements = posts.map(post => <Post text={post.text} likes={post.likes} key={post.id} />)

  let onSubmit = (formData) => {
    addPost(formData.newposttext);
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
  );
});

export default Posts;
