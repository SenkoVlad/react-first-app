import Post from './Post/Post'
import css from './Posts.module.css'

const Posts = () => {
  let posts = [
    {id :"1", text : "The First post", likes : "5"},
    {id :"2", text : "The second post", likes : "6"},
    {id :"3", text : "The third post", likes : "3"},
    {id :"4", text : "The fourth post", likes : "7"},
  ]
  let postElements = posts.map(post => <Post text={posts.text} likes={posts.likes} />)

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