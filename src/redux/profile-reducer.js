import { ADD_POST, UPDATE_POST_TEXT } from './constants'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== '') {
                let maxId = getMaxPostId(state);
                let newPost = {
                    id: maxId + 1,
                    text: state.newPostText,
                    likes: 0
                }
                state.posts.push(newPost);
                state.newPostText = '';
            }
            break;
        case UPDATE_POST_TEXT:
            state.newPostText = action.text;
            break
        default:
            break;
    }
    return state;
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