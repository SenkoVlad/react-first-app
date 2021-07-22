import {ADD_POST, UPDATE_POST_TEXT} from './constants'

const profileReducer = (state, action) => {
    if (action.type == ADD_POST) {
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
    }
    else if (action.type == UPDATE_POST_TEXT) {
        state.newPostText = action.text;
    }
    return state;
}

const getMaxPostId = (state) => {
    return state.posts.reduce((max, post) => post.id > max ? post.id : max,
        state.posts[0].id);
}

export default profileReducer;