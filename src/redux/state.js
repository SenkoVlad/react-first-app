import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import sidebarReducer from './sidebar-reducer'
import {ADD_POST, ADD_MESSAGE, UPDATE_POST_TEXT, UPDATE_MESSAGE_TEXT} from './constants'

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
        },
        sidebarPage: {}
    },
    _invokeSubcribeCallbback: () => { },
    setState(state) {
        this._state = state;
    },
    getState() {
        return this._state;
    },
    setRenderSubscribe(subsctiber) {
        this._invokeSubcribeCallbback = subsctiber;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebarReducer = sidebarReducer(this._state.sidebarPage, action);

        if (action.type == ADD_POST || action.type == ADD_MESSAGE) {
            this._invokeSubcribeCallbback(this._state);
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
