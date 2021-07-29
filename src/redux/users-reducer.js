import { UNFOLLOW_USER, FOLLOW_USER, SET_USERS } from './constants'

let initialState = {
    users: [
        { id: 1, photoUrl : 'https://www.spletnik.ru/img/2020/07/yana/20200702-vlad-post1.jpg', fullname: "Vlad", followed: false, status: "I am a boss", location: { city: "Minsk", country: "Belarus" } },
        { id: 2, photoUrl : 'https://www.spletnik.ru/img/2020/07/yana/20200702-vlad-post1.jpg', fullname: "Igor", followed: false, status: "I am a boss too", location: { city: "Moscow", country: "Russia" } },
        { id: 3, photoUrl : 'https://www.spletnik.ru/img/2020/07/yana/20200702-vlad-post1.jpg', fullname: "Sasha", followed: false, status: "I amn't a boss", location: { city: "New-York", country: "USA" } },
        { id: 4, photoUrl : 'https://www.spletnik.ru/img/2020/07/yana/20200702-vlad-post1.jpg', fullname: "Stas", followed: false, status: "I am a boss", location: { city: "Almati", country: "Kazahstan" } }
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
                users: [...state.users, action.users]
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