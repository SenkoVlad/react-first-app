import { SET_LOGIN_DATA, SET_LOGOUT, DELETE_AUTH_DATA } from './constants'
import { authApi } from '../Api/Api';
import { stopSubmit } from 'redux-form';

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
        default:
            return {
                ...state
            }
    }
}
export const setAuthDataActionCreater = (email, login, userId) => ({ type: SET_LOGIN_DATA, data: { userId, login, email } })
export const setLogoutActionCreater = () => ({ type: SET_LOGOUT, data: false })
export const deleteAuthData = () => ({ type: DELETE_AUTH_DATA });

export const getAuthState = () => async (dispatch) => {
    let response = await authApi.getAuthState();

    if (response.resultCode === 0) {
        let { email, login, userId } = response.result;
        dispatch(setAuthDataActionCreater(email, login, userId));
    }
    else {
        dispatch(setLogoutActionCreater());
    }
}

export const login = (login, password) => async (dispatch) => {
    let response = await authApi.login(login, password);

    if (response.resultCode === 0) {
        let { email, login, userId } = response.result;
        dispatch(setAuthDataActionCreater(email, login, userId));
    }
    else {
        dispatch(stopSubmit("login", { _error: response.message }))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authApi.logout()

    if (response.resultCode === 0) {
        dispatch(deleteAuthData());
    }
}

export default authReducer