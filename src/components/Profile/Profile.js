import Posts from './Posts/Posts'
import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return <div className={css.content}>
    <ProfileInfo/>
    <Posts />
  </div>
}

export default Profile;