import { getAuthState } from './auth-reducer'
import { SET_INITIALIZATION_DATA } from './constants'

let initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION_DATA:
            return {
                isInitialized: action.data
            }
        default:
            return {
                ...state
            }
    }
}
export const setInitializationState = (flag) => ({ type: SET_INITIALIZATION_DATA, data: flag })

export const initialize = () => (dispatch) => {
    let promises = getAuthState()(dispatch);

    Promise.all([promises])
        .then(() => {
            dispatch(setInitializationState(true));
        });
}


export default appReducer