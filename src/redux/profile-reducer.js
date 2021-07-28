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
    let stateCopy = {...state};
    stateCopy.posts = [...state.posts];

    switch (action.type) {
        case ADD_POST:
            if (stateCopy.newPostText !== '') {
                let maxId = getMaxPostId(stateCopy);
                let newPost = {
                    id: maxId + 1,
                    text: stateCopy.newPostText,
                    likes: 0
                }
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
            }
            break;
        case UPDATE_POST_TEXT:
            stateCopy.newPostText = action.text;
            break
        default:
            break;
    }
    return stateCopy;
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