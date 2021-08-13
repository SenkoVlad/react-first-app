import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

let Profile = (props) => {
    return <div className={css.content}>
        <ProfileInfo profileInfo={props.profilePage.profile.profileInfo}/>
        <PostsContainer />
    </div>
}

export default Profile