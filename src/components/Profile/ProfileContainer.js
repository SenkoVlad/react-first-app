import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { setUsersProfile, setLoadingGif } from '../../redux/profile-reducer'
import * as axios from 'axios'
import Preloader from '../Common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
  render() {
    return (
      <>
        {
          this.props.profile.isLoading ?
            <Preloader /> :
            <Profile {...this.props} />
        }
      </>
    );
  }

  componentDidMount() {
    let userId = this.props.match.params.userId ? this.props.match.params.userId : '05c4064d-038f-4093-b200-8da640bc220f';
    this.getUserProfile(userId);
  }
  componentWillUnmount() {
    this.props.setUsersProfile({});
  }

  getUserProfile = (userId) => {
    this.props.setLoadingGif(true);
    axios.get(`https://localhost:5001/users/profile/${userId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    }).then(response => {
      this.props.setLoadingGif(false);
      this.props.setUsersProfile(response.data.result);
    });
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage
  }
}

export default connect(mapStateToProps, {
  setUsersProfile,
  setLoadingGif
})(withRouter(ProfileContainer));