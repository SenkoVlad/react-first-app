import { userApi } from '../Api/Api';
import { ADD_POST, SET_PROFILE_INFO, SET_LOADING_GIF_PAGE, UPDATE_USER_STATUS } from './constants'

let initialState = {
    posts: [
        { id: 1, text: "The First post", likes: 5 },
        { id: 2, text: "The second post", likes: 6 },
        { id: 3, text: "The third post", likes: 3 },
        { id: 4, text: "The fourth post", likes: 7 },
    ],
    profileInfo: {},
    isLoading: false,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (action.text !== '') {
                let maxId = getMaxPostId(state);
                let newPost = {
                    id: maxId + 1,
                    text: action.text,
                    likes: 0
                }
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                }
            }
        case SET_PROFILE_INFO: {
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        }
        case SET_LOADING_GIF_PAGE: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case UPDATE_USER_STATUS: {
            return {
                ...state,
                profileInfo: {
                    ...state.profileInfo,
                    status: action.status
                }
            }
        }
        default:
            return { ...state };
    }
}

const getMaxPostId = (state) => {
    return state.posts.reduce((max, post) => post.id > max ? post.id : max,
        state.posts[0].id);
}

export const newPostActionCreator = (newposttext) => ({ type: ADD_POST, text: newposttext });
export const setUsersProfile = (profileInfo) => ({ type: SET_PROFILE_INFO, profileInfo: profileInfo });
export const setLoadingGif = (flag) => ({ type: SET_LOADING_GIF_PAGE, isLoading: flag });
export const updateUserStatusActionCreater = (status) => ({ type: UPDATE_USER_STATUS, status: status });

export const getUserProfile = (userId) => (dispatch) => {
    dispatch(setLoadingGif(true));
    return userApi.getUserProfile(userId)
        .then(response => {
            dispatch(setLoadingGif(false));
            dispatch(setUsersProfile(response.result));
        });
}


export const updateUserStatus = (status) => (dispatch) => {
    return userApi.updateUserStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(updateUserStatusActionCreater(status));
            }
        })
}

export default profileReducer;