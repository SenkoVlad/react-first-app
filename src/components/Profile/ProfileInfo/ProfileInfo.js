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
        <img src={props.profileInfo.photoUrl === '' ? avatar : props.profileInfo.photoUrl} className={css.userPhoto} />
      </div>
      {props.isOwner && <input type="file" onChange={(e) => fileChoosen(e)} />}

      {props.profileInfo.photoUrl && <ProfileData profileInfo={props.profileInfo} />}


      <div><b>Status: </b>
        <ProfileStatusInfoWithHook status={props.profileInfo.status} updateUserStatus={props.updateUserStatus} />
      </div>

      <div>
        {props.profileInfo.isLookingForAJob === true ? 'Job resume: ' + props.profileInfo.resumeText : ''}
      </div>
    </div>
  );
}

const ProfileData = ({ profileInfo }) => {

  const Contact = ({ site, url }) => {
    return (
      <div><b>{site}: </b>{url}</div>
    );
  }

  return (
    <div>
      <div>
        <b>Full name:</b>{profileInfo.name}
      </div>
      <div>
        <b>City: </b>{profileInfo.location.city}
      </div>
      <div>
        <b>Looking job: </b>{profileInfo.IsLookingForAJob}
      </div>
      {profileInfo.isLookingForAJob &&
        <div>
          <b>: </b>{profileInfo.ResumeText}
        </div>
      }
      <div>
        <b>Contacts: </b>
        <div>
          {Object.keys(profileInfo.userContacts).map(key => {
            return <Contact site={key} url={profileInfo.userContacts[key]} />
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;