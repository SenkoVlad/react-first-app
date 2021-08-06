import { UNFOLLOW_USER, FOLLOW_USER, SET_USERS, SET_USERS_TOTAL_COUNT, SET_USERS_CURRENT_PAGE, SET_LOADING_GIF_PAGE } from './constants'

let initialState = {
    users: [
    ],
    currentPage : 1,
    totalPageCount : 0,
    pageSize : 10,
    isLoading : false
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
        default:
            return { ...state };
    }
}
export const followUserActionCreater = (userId) => {
    return {
        type: FOLLOW_USER,
        userId: userId
    }
}
export const unfollowUserActionCreater = (userId) => {
    return {
        type: UNFOLLOW_USER,
        userId: userId
    }
}
export const setUsersActionCreater = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setUsersTotalCountActionCreater = (count) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        usersTotalCount: count
    }
}
export const setUsersCurrentPageActionCreater = (page) => {
    return {
        type: SET_USERS_CURRENT_PAGE,
        currentPage: page
    }
}
export const setLoadingGifActionCreater = (flag) => {
    return {
        type: SET_LOADING_GIF_PAGE,
        isLoading: flag
    }
}

export default usersReducer;