import css from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {
  let postElements = props.posts.map(post => <Post text={post.text} likes={post.likes} />)

  return (
  <div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>New post</button>
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