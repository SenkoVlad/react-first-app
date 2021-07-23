import Posts from './Posts/Posts'
import PostsContainer from './Posts/PostsContainer';
import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return <div className={css.content}>
    <ProfileInfo/>
    <PostsContainer store={props.store}/>
  </div>
}

export default Profile;