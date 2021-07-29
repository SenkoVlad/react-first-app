import PostsContainer from './Posts/PostsContainer';
import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return <div className={css.content}>
    <ProfileInfo />
    <PostsContainer />
  </div>
}

export default Profile;