import {ADD_MESSAGE, UPDATE_MESSAGE_TEXT} from './constants'

const dialogReducer = (state, action) => {
    if (action.type == ADD_MESSAGE) {
        if (state.newMessageText != '') {
            let maxId = getMaxMessageId(state);
            let newMessage = {
                id: maxId + 1,
                text: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
        }
    }
    else if (action.type == UPDATE_MESSAGE_TEXT) {
        state.newMessageText = action.text;
    }

    return state;
}

const getMaxMessageId = (state) => {
    return state.messages.reduce((max, message) => message.id > max ? message.id : max,
        state.messages[0].id);
}

export default dialogReducer;