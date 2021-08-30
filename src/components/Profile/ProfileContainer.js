import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { getUserProfile, setUsersProfile, updateUserStatus, saveAvatar } from '../../redux/profile-reducer'
import Preloader from '../Common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import css from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer';


class ProfileContainer extends React.Component {
  render() {
    if (!this.getCurrentUserId())
      this.props.history.push("/login");

    return (
      <>
        {
          this.props.profile.isLoading ?
            <Preloader /> :
            <div className={css.content}>
                <ProfileInfo isOwner={!this.props.match.params.userId} 
                             profileInfo={this.props.profile.profileInfo} 
                             updateUserStatus={this.props.updateUserStatus}
                             saveAvatar={this.props.saveAvatar}/>
                <PostsContainer />
            </div>
        }
        <div>{this.props.a}</div>
      </>
    );
  }

  getCurrentUserId() {
    return this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;
  }

  loadUserProfile() {
    let userId = this.getCurrentUserId();
    if (!userId)
      this.props.history.push("/login");
    else
      this.props.getUserProfile(userId);
  }

  componentDidMount() {
    this.loadUserProfile();
  }

  componentWillUnmount() {
    this.props.setUsersProfile({});
  }
}

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    profile: state.profilePage
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getUserProfile,
    setUsersProfile,
    updateUserStatus,
    saveAvatar
  })
)(ProfileContainer);