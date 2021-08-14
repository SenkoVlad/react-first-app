import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile, setUsersProfile } from '../../redux/profile-reducer'
import Preloader from '../Common/Preloader/Preloader';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';


class ProfileContainer extends React.Component {
  render() {
    return (
      <>
        {
          this.props.profile.isLoading ?
            <Preloader /> :
            <Profile profile={this.props.profile} />
        }
      </>
    );
  }

  componentDidMount() {
    let userId = this.props.match.params.userId ? this.props.userId : null;
    if(userId)
      this.props.getUserProfile(userId);
  }
  componentWillUnmount() {
    this.props.setUsersProfile({});
  }
}

let mapStateToProps = (state) => {
  return {
    userId : state.auth.userId,
    profile: state.profilePage,
  }
}

export default withAuthRedirect(connect(mapStateToProps, {
  getUserProfile,
  setUsersProfile
})(withRouter(ProfileContainer)));