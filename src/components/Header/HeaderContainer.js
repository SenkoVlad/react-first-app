import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthDataActionCreater} from '../../redux/auth-reducer'
import * as axios from 'axios'

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
    componentDidMount() {
        this.getLoginStatus();
    }
    getLoginStatus() {
        axios.get('https://localhost:5001/auth/status', {
            withCredentials : true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let { email, login, userId } = response.data.result;
                this.props.setAuthDataActionCreater(email, login, userId);
            }
        });
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isLogin: state.auth.isLogin
    };
}

export default connect(mapStateToProps, { setAuthDataActionCreater })
    (HeaderContainer);