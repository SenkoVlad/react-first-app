import Posts from './Posts/Posts'
import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return <div className={css.content}>
    <ProfileInfo/>
    <Posts posts={props.state.posts}/>
  </div>
}

export default Profile;