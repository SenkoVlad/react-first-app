import { ADD_MESSAGE, UPDATE_MESSAGE_TEXT } from './constants'

const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText != '') {
                let maxId = getMaxMessageId(state);
                let newMessage = {
                    id: maxId + 1,
                    text: state.newMessageText
                }
                state.messages.push(newMessage);
                state.newMessageText = '';
            }
            break;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.text;
            break;
        default:
            break;
    }
    return state;
}

const getMaxMessageId = (state) => {
    return state.messages.reduce((max, message) => message.id > max ? message.id : max,
        state.messages[0].id);
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

export default dialogReducer;