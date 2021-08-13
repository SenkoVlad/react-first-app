import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile, setUsersProfile } from '../../redux/profile-reducer'
import Preloader from '../Common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
  render() {
    return (
      <>
        {
          this.props.profile.isLoading ?
            <Preloader /> :
            <Profile profilePage={this.props.profilePage} />
        }
      </>
    );
  }

  componentDidMount() {
    let userId = this.props.match.params.userId ? this.props.match.params.userId : '05c4064d-038f-4093-b200-8da640bc220f';
    this.props.getUserProfile(userId);
  }
  componentWillUnmount() {
    this.props.setUsersProfile({});
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage
  }
}

export default connect(mapStateToProps, {
  getUserProfile,
  setUsersProfile
})(withRouter(ProfileContainer));