import Posts from './Posts/Posts'
import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return <div className={css.content}>
    <ProfileInfo/>
    <Posts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
  </div>
}

export default Profile;