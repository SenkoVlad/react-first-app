import { ADD_POST, UPDATE_POST_TEXT } from './constants'

let initialState = {
    posts: [
        { id: 1, text: "The First post", likes: "5" },
        { id: 2, text: "The second post", likes: "6" },
        { id: 3, text: "The third post", likes: "3" },
        { id: 4, text: "The fourth post", likes: "7" },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== '') {
                let maxId = getMaxPostId(state);
                let newPost = {
                    id: maxId + 1,
                    text: state.newPostText,
                    likes: 0
                }
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        default:
            return { ...state };
    }
}

const getMaxPostId = (state) => {
    return state.posts.reduce((max, post) => post.id > max ? post.id : max,
        state.posts[0].id);
}

export const newPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreater = (newText) => {
    return {
        type: UPDATE_POST_TEXT,
        text: newText
    }
}

export default profileReducer;