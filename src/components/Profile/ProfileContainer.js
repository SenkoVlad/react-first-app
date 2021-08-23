import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile, setUsersProfile, updateUserStatus } from '../../redux/profile-reducer'
import Preloader from '../Common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  render() {
    return (
      <>
        {
          this.props.profile.isLoading ?
            <Preloader /> :
            <Profile profile={this.props.profile} updateUserStatus={this.props.updateUserStatus} />
        }
      </>
    );
  }

  componentDidMount() {
    let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;
    if (!userId)
      this.props.history.push("/login");
    else
      this.props.getUserProfile(userId);
  }
  componentWillUnmount() {
    this.props.setUsersProfile({});
  }
}

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    profile: state.profilePage,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getUserProfile,
    setUsersProfile,
    updateUserStatus
  })
)(ProfileContainer);