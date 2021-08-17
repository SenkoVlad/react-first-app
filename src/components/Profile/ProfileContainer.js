import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile, setUsersProfile } from '../../redux/profile-reducer'
import Preloader from '../Common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';


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
    debugger;
    let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;
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

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, {
    getUserProfile,
    setUsersProfile
  })
)(ProfileContainer);