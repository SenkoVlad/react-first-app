const ADD_POST = 'add-new-post';
const ADD_MESSAGE = 'add-new-message';
const UPDATE_POST_TEXT = 'update-new-post-text';
const UPDATE_MESSAGE_TEXT = 'update-new-message-text';

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, text: 'Hi' },
                { id: 2, text: 'How is your it-kamasutra?' },
                { id: 3, text: 'Yo' },
                { id: 4, text: 'Yo' },
                { id: 5, text: 'Yo' }
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                { id: 1, text: "The First post", likes: "5" },
                { id: 2, text: "The second post", likes: "6" },
                { id: 3, text: "The third post", likes: "3" },
                { id: 4, text: "The fourth post", likes: "7" },
            ],
            newPostText: ''
        }
    },
    _invokeSubcribeCallbback: () => { },
    setState(state) {
        this._state = state;
    },
    getState() {
        return this._state;
    },
    _addPost() {
        if (this._state.profilePage.newPostText != '') {
            let maxId = this._getMaxPostId();
            let newPost = {
                id: maxId + 1,
                text: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._invokeSubcribeCallbback(this._state);
        }
    },
    _addMessage() {
        if (this._state.dialogsPage.newMessageText != '') {
            let maxId = this._getMaxMessageId();
            let newMessage = {
                id : maxId + 1,
                text: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._invokeSubcribeCallbback(this._state);
        }
    },
    _getMaxMessageId() {
        return this._state.dialogsPage.messages.reduce((max, message) => message.id > max ? message.id : max,
            this._state.dialogsPage.messages[0].id);
    },
    _getMaxPostId() {
        return this._state.profilePage.posts.reduce((max, post) => post.id > max ? post.id : max,
            this._state.profilePage.posts[0].id);
    },
    _updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
    },
    _updateNewMessageText(newMessageText) {
        this._state.dialogsPage.newMessageText = newMessageText;
    },
    setRenderSubscribe(subsctiber) {
        this._invokeSubcribeCallbback = subsctiber;
    },
    dispatch(action) {
        if (action.type == ADD_POST) {
            this._addPost();
        }
        else if (action.type == UPDATE_POST_TEXT) {
            this._updateNewPostText(action.text);
        }
        else if (action.type == ADD_MESSAGE) {
            this._addMessage();
        }
        else if(action.type == UPDATE_MESSAGE_TEXT) {
            this._updateNewMessageText(action.text);
        }
    }
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
export const newMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreater = (newText) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        text: newText
    }
}

export default store
