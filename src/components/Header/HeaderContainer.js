import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getAuthState, logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
    componentDidMount() {
        this.props.getAuthState();
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isLogin: state.auth.isLogin
    };
}

export default connect(mapStateToProps, { getAuthState, logout })
    (HeaderContainer);