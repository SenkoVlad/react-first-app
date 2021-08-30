import css from './ProfileInfo.module.css'
import avatar from '../../../www/images/avatar.png'
import ProfileStatusInfoWithHook from './ProfileStatusInfoWIthHook';

const ProfileInfo = (props) => {

  const fileChoosen = (e) => {
    props.saveAvatar(e.currentTarget.files[0]);
  }

  return (
    <div className={css.whiteText}>
      <div>
        <div>
          FullName: {props.profileInfo.name}
        </div>
        <img src={props.profileInfo.photoUrl === '' ? avatar : props.profileInfo.photoUrl} className={css.userPhoto} />
      </div>

      {props.isOwner && <input type="file" onChange={(e) => fileChoosen(e)}/>}
      <ProfileStatusInfoWithHook status={props.profileInfo.status} updateUserStatus={props.updateUserStatus}/>

      <div>
        {props.profileInfo.isLookingForAJob === true ? 'Job resume: ' + props.profileInfo.resumeText : ''}
      </div>
    </div>
  );
}

export default ProfileInfo;