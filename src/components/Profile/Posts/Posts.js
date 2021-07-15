import Post from './Post/Post'
import css from './Posts.module.css'

const Posts = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>New post</button>
      </div>
      My posts
      <div>
        <Post text="The First post" likes='5' />
        <Post text="The second post" likes='4' />
        <Post text="The third post" likes='6' />
        <Post text="The fourth post" likes='10' />
        <Post text="The fifth post" likes='0' />
      </div>
    </div>
  )
}

export default Posts;