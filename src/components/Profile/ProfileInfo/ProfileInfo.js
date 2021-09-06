import css from './ProfileInfo.module.css'
import avatar from '../../../www/images/avatar.png'
import ProfileStatusInfoWithHook from './ProfileStatusInfoWIthHook';
import { useState } from 'react';
import ProfileFormData from './ProfileDataForm';
import {  useHistory } from 'react-router-dom';


const ProfileInfo = (props) => {

  const [isEditMode, setEditMode] = useState(false);
  const history = useHistory();

  const fileChoosen = (e) => {
    props.saveAvatar(e.currentTarget.files[0]);
  }

  const onSubmit = (formdata) => {
    let result = props.saveUser(formdata);
    Promise.all([result])
      .then((result) => {
        if (result[0] !== 'error')
          setEditMode(false);
      });
  }

  const startDialog = () => {
    props.startDialog(props.profileInfo.id);
    history.push('/dialogs');
  }

  return (
    <div className={css.whiteText}>
      <div>
        <img src={props.profileInfo.photoUrl === '' ? avatar : props.profileInfo.photoUrl} className={css.userPhoto} />
      </div>
      {props.isOwner && <input type="file" onChange={(e) => fileChoosen(e)} />}

      <div><b>Status: </b>
        <ProfileStatusInfoWithHook status={props.profileInfo.status} updateUserStatus={props.updateUserStatus} />
      </div>

      <div className={css.profileGeneralInfo}>
        {isEditMode
          ? props.profileInfo.name && <ProfileFormData initialValues={props.profileInfo} setEditMode={() => setEditMode(false)} onSubmit={onSubmit} />
          : props.profileInfo.name && <ProfileData profileInfo={props.profileInfo} isOwner={props.isOwner} setEditMode={() => setEditMode(true)} startDialog={startDialog} />
        }
      </div>
    </div>
  );
}

const Contact = ({ site, url }) => {
  return (
    <div><b>{site}: </b>{url}</div>
  );
}

const ProfileData = ({ profileInfo, isOwner, setEditMode, startDialog }) => {
  return (
    <div>
      <div>
        <b>Full name:</b>{profileInfo.name}
      </div>
      <div>
        <b>County: </b>{profileInfo.location.country}
      </div>
      <div>
        <b>City: </b>{profileInfo.location.city}
      </div>
      <div>
        <b>Looking job: </b>{profileInfo.IsLookingForAJob ? 'true' : 'false'}
      </div>
      {profileInfo.isLookingForAJob &&
        <div>
          <b>Resume: </b>{profileInfo.ResumeText}
        </div>
      }
      <div className={css.contactsBlock}>
        <b>Contacts: </b>
        <div>
          {Object.keys(profileInfo.userContacts).map(key => {
            return <Contact key={key} site={key} url={profileInfo.userContacts[key]} />
          })}
        </div>
      </div>

      {isOwner && <button onClick={setEditMode}>Edit</button>}
      {isOwner ||
        <div>
          <button onClick={startDialog}>Dialog</button>
          {/* <NavLink to={'/dialogs/' + profileInfo.id} onClick={startDialog}>Dialog</NavLink> */}
        </div>
      }
    </div>
  );
}

export default ProfileInfo;