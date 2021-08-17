import css from './ProfileInfo.module.css'
import avatar from '../../../www/images/avatar.png'
import ProfileStatusInfo from './ProfileStatusInfo';

const ProfileInfo = (props) => {
  return (
    <div className={css.whiteText}>
      <div>
        <div>
          FullName: {props.profileInfo.name}
        </div>
        <img src={props.profileInfo.photoUrl === '' ? avatar : props.profileInfo.photoUrl} className={css.userPhoto} />
      </div>

      <ProfileStatusInfo status={props.profileInfo.status} updateUserStatus={props.updateUserStatus}/>

      <div>
        {props.profileInfo.isLookingForAJob === true ? 'Job resume: ' + props.profileInfo.resumeText : ''}
      </div>
    </div>
  );
}

export default ProfileInfo;