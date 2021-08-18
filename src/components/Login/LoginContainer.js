import React from 'react';
import { connect } from 'react-redux';
import { Login } from './Login';
import {login} from '../../redux/auth-reducer';

class LoginContainer extends React.Component {
    render() {
        return (
            <>
                {this.props.isLogin 
                    ? <div>You are authorized</div> 
                    : <Login login={this.props.login}/>}
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin : state.auth.isLogin
    }
}

export default connect(mapStateToProps, {login})(LoginContainer);