import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

let mapAuthStateToProps = (state) => ({ isLogin: state.auth.isLogin })

export const withAuthRedirect = (Component) => {
    class AuthRedirect extends React.Component {
        render() {
            if (!this.props.isLogin)
                return <Redirect to='/login' />
            return <Component {...this.props}/>
        }
    }
    return connect(mapAuthStateToProps)(AuthRedirect);
}




