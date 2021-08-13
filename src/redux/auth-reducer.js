import { SET_LOGIN_DATA, SET_NEW_LOGIN_TEXT, SET_NEW_PASSWORD_TEXT, SET_LOGOUT } from './constants'
import {authApi} from '../components/Api/Api';

let initialState = {
    userId: null,
    login: null,
    email: null,
    inputLogin: null,
    inputPassword: null,
    isLogin: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.data,
                isLogin: true
            }
        case SET_NEW_LOGIN_TEXT:
            return {
                ...state,
                inputLogin: action.data
            }
        case SET_NEW_PASSWORD_TEXT:
            return {
                ...state,
                inputPassword: action.data
            }
        case SET_LOGOUT:
            return {
                ...state,
                isLogin: action.data
            }
        default:
            return {
                ...state
            }
    }
}
export const setAuthDataActionCreater = (email, login, userId) => {
    return {
        type: SET_LOGIN_DATA,
        data: { userId, login, email }
    }
}
export const setLogoutActionCreater = () => {
    return {
        type: SET_LOGOUT,
        data: false
    }
}
export const setInputLoginActionCreate = (login) => {
    return {
        type: SET_NEW_LOGIN_TEXT,
        data: login
    }
}
export const setInputPasswordActionCreate = (password) => {
    return {
        type: SET_NEW_PASSWORD_TEXT,
        data: password
    }
}
export const getAuthState = () => {
    return (dispatch) => {
        authApi.getAuthState().then(response => {
            if (response.resultCode === 0) {
                let { email, login, userId } = response.result;
                dispatch(setAuthDataActionCreater(email, login, userId));
            }
            else {
                dispatch(setLogoutActionCreater());
            }
        });
    }
}

export const login = (login, password) => {
    return (dispatch) => {
        authApi.login(login, password).then(response => {
            if (response.resultCode === 0) {
                let { email, login, userId } = response.result;
                dispatch(setAuthDataActionCreater(email, login, userId));
            }
        });
    }
}

export default authReducer;