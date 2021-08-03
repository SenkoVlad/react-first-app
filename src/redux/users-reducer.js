import { UNFOLLOW_USER, FOLLOW_USER, SET_USERS } from './constants'

let initialState = {
    users: [
    ]
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id == action.userId)
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
                    if (user.id == action.userId)
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
                users: [...state.users, ...action.users]
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

export default usersReducer;