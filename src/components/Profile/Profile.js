import Posts from './Posts/Posts'
import css from './Profile.module.css'

const Profile = () => {
  return <div className={css.content}>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div>
      ava + description
    </div>
    <Posts />
  </div>
}

export default Profile;