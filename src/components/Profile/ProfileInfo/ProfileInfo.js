import css from './ProfileInfo.module.css'
import avatar from '../../../www/images/avatar.png'

const ProfileInfo = (props) => {
    return (
    <div className={css.whiteText}>
      <div>
        <div>
          FullName: {props.profileInfo.fullName}
        </div>
        <img src={props.profileInfo.photoUrl === '' ? avatar : props.profileInfo.photoUrl} className={css.userPhoto} />
      </div>
      <div>
        General info: {props.profileInfo.info}
      </div>
      <div>
        {props.profileInfo.isLookingForAJob === true ? 'Job resume: ' + props.profileInfo.resumeText : ''}
      </div>
    </div>
  );
}

export default ProfileInfo;