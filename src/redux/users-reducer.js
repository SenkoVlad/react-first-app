import { UNFOLLOW_USER, FOLLOW_USER, SET_USERS, SET_USERS_TOTAL_COUNT, SET_USERS_CURRENT_PAGE, SET_LOADING_GIF_PAGE, SET_FOLLOWING_PROCESS } from './constants'
import { userApi } from '../Api/Api'

let initialState = {
    users: [
    ],
    currentPage: 1,
    totalPageCount: 0,
    pageSize: 10,
    isLoading: false,
    followingUsersId: [],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId)
                        return {
                            ...user,
                            followed: true
                        }
                    return user;
                })
            }
        }
        case UNFOLLOW_USER: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId)
                        return {
                            ...user,
                            followed: false
                        }
                    return user;
                })
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

export const getUsers = (currentPage, pageSize, setPageFlag = false) => {
    return (dispatch) => {
        if (setPageFlag)
            dispatch(setUsersCurrentPage(currentPage));

        dispatch(setLoadingGif(true));
        userApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setLoadingGif(false));
                if (data.resultCode == 0) {
                    dispatch(setUsers(data.result.items));
                    dispatch(setUsersTotalCount(data.result.totalCount));
                }
            });
    }
}
export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProcess(true, userId));
        userApi.followUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(setUserFollowing(userId));
                }
                dispatch(setFollowingProcess(false, userId));
            });
    }
}
export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProcess(true, userId));
        userApi.unfollowUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(setUserUnfollowing(userId));
                }
                dispatch(setFollowingProcess(false, userId));
            });
    }
}

export default usersReducer;