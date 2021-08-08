import { SET_LOGIN_DATA } from './constants'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isLogin : false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.data,
                isLogin : true
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

export default authReducer;