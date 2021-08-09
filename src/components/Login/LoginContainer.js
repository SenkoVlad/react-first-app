import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { setAuthDataActionCreater, setInputLoginActionCreate, setInputPasswordActionCreate } from '../../redux/auth-reducer'
import * as axios from 'axios'

class LoginContainer extends React.Component {
    render() {
        debugger;
        return (
        <>
            {!this.props.isLogin ? <Login {...this.props} login={this.login} /> : <div>You are authorized</div>} 
        </>
        );
    }
    login(login, password) {
        axios.post('https://localhost:5001/auth/login', {
            login: login,
            password: password,
        }, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let { email, login, userId } = response.data.result;
                this.setAuthDataActionCreater(email, login, userId);
            }
        });
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
    setAuthDataActionCreater
})(LoginContainer);