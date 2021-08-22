import { SET_LOGIN_DATA, SET_LOGOUT, DELETE_AUTH_DATA, SET_LOGIN_ERROR_MESSAGE } from './constants'
import { authApi } from '../Api/Api';

let initialState = {
    userId: null,
    login: null,
    email: null,
    errorMessage: null,
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
        case SET_LOGOUT:
            return {
                ...state,
                isLogin: action.data
            }
        case DELETE_AUTH_DATA:
            return {
                userId: null,
                login: null,
                email: null,
                isLogin: null
            }
        case SET_LOGIN_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.data
            }
        default:
            return {
                ...state
            }
    }
}
export const setAuthDataActionCreater = (email, login, userId) => ({ type: SET_LOGIN_DATA, data: { userId, login, email } })
export const setLogoutActionCreater = () => ({ type: SET_LOGOUT, data: false })
export const deleteAuthData = () => ({ type: DELETE_AUTH_DATA });
export const setLoginError = (errorMessage) => ({ type: SET_LOGIN_ERROR_MESSAGE, data: errorMessage });

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
            else if (response.resultCode === 1) {
                dispatch(setLoginError(response.message));
            }
        });
    }
}
export const logout = () => {
    return (dispatch) => {
        authApi.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(deleteAuthData());
            }
        });
    }
}

export default authReducer