import Posts from './Posts/Posts'
import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return <div className={css.content}>
    <ProfileInfo/>
    <Posts profilePage={props.state.profilePage} dispatch={props.dispatch}/>
  </div>
}

export default Profile;