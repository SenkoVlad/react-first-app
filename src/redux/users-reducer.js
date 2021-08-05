import { UNFOLLOW_USER, FOLLOW_USER, SET_USERS, SET_USERS_TOTAL_COUNT, SET_USERS_CURRENT_PAGE } from './constants'

let initialState = {
    users: [
    ],
    page : 1,
    totalCount : 0,
    count : 10
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
                totalCount: action.usersTotalCount
            }
        }
        case SET_USERS_CURRENT_PAGE: {
            return {
                ...state,
                page: action.currentPage
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

export default usersReducer;