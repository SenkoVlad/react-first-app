import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import {  setInputLoginActionCreate, setInputPasswordActionCreate, login } from '../../redux/auth-reducer'

class LoginContainer extends React.Component {
    render() {
        return (
        <>
            {!this.props.isLogin ? <Login {...this.props} login={this.props.login} /> : <div>You are authorized</div>} 
        </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        inputLogin: state.auth.inputLogin,
        inputPassword: state.auth.inputPassword,
        isLogin: state.auth.isLogin
    };
}

export default connect(mapStateToProps, {
    setInputLoginActionCreate,
    setInputPasswordActionCreate,
    login
})(LoginContainer);