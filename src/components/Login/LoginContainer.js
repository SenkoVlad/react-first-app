import React from 'react';
import { connect } from 'react-redux';
import { Login } from './Login';
import {login} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

class LoginContainer extends React.Component {
    render() {
        return (
            <>
                {this.props.isLogin 
                    ? <Redirect to="/profile"/> 
                    : <Login login={this.props.login} errorMessage={this.props.errorMessage}/>}
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin : state.auth.isLogin,
        errorMessage : state.auth.errorMessage
    }
}

export default connect(mapStateToProps, {login})(LoginContainer);