import css from './Post.module.css'

const Post = (props) => {
  return (
    <div className={css.item}>
      <img src='https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg'/>
      {props.text}
      <div>
        <span>like {props.likes}</span>
      </div>
    </div>
  )
}

export default Post;