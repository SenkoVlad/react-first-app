import { UNFOLLOW_USER, FOLLOW_USER, SET_USERS, SET_USERS_TOTAL_COUNT, SET_USERS_CURRENT_PAGE, SET_LOADING_GIF_PAGE, SET_FOLLOWING_PROCESS } from './constants'
import { userApi } from '../Api/Api'
import { changeStateProp } from '../components/Common/helpers'

let initialState = {
    users: [
    ],
    currentPage: 1,
    totalPageCount: 0,
    pageSize: 5,
    paginatorPartSize: 10,
    isLoading: false,
    followingUsersId: [],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER: {
            const a = changeStateProp(state.users, "id", action.userId, {followed : true});
            return {
                ...state,
                users: a
            }
        }
        case UNFOLLOW_USER: {
            const a = changeStateProp(state.users, "id", action.userId, {followed : false});
            return {
                ...state,
                users: a
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalPageCount: action.usersTotalCount
            }
        }
        case SET_USERS_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_LOADING_GIF_PAGE: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case SET_FOLLOWING_PROCESS: {
            return {
                ...state,
                followingUsersId: action.isFollowing
                    ? [...state.followingUsersId, action.userId]
                    : state.followingUsersId.filter(id => id != action.userId)
            }
        }
        default:
            return { ...state };
    }
}
export const setUserFollowing = (userId) => ({ type: FOLLOW_USER, userId: userId })
export const setUserUnfollowing = (userId) => ({ type: UNFOLLOW_USER, userId: userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const setUsersTotalCount = (count) => ({ type: SET_USERS_TOTAL_COUNT, usersTotalCount: count })
export const setUsersCurrentPage = (page) => ({ type: SET_USERS_CURRENT_PAGE, currentPage: page })
export const setLoadingGif = (flag) => ({ type: SET_LOADING_GIF_PAGE, isLoading: flag })
export const setFollowingProcess = (isFollowing, userId) => ({ type: SET_FOLLOWING_PROCESS, isFollowing, userId })

export const getUsers = (currentPage, pageSize, setPageFlag = false) => async (dispatch) => {
    if (setPageFlag)
        dispatch(setUsersCurrentPage(currentPage));
    dispatch(setLoadingGif(true));
    let response = await userApi.getUsers(currentPage, pageSize)

    dispatch(setLoadingGif(false));
    if (response.resultCode == 0) {
        dispatch(setUsers(response.result.items));
        dispatch(setUsersTotalCount(response.result.totalCount));
    }
}

export const followUser = (userId) => async (dispatch) => {
    dispatch(setFollowingProcess(true, userId));
    let response = await userApi.followUser(userId);

    if (response.resultCode == 0) {
        dispatch(setUserFollowing(userId));
    }
    dispatch(setFollowingProcess(false, userId));
}
export const unfollowUser = (userId) => async (dispatch) => {
    dispatch(setFollowingProcess(true, userId));
    let response = await userApi.unfollowUser(userId);

    if (response.resultCode == 0) {
        dispatch(setUserUnfollowing(userId));
    }
    dispatch(setFollowingProcess(false, userId));
}


export default usersReducer;