import { ADD_MESSAGE, UPDATE_MESSAGE_TEXT } from './constants'

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.dialogs = [...state.dialogs]

    switch (action.type) {
        case ADD_MESSAGE:
            if (stateCopy.newMessageText != '') {
                let maxId = getMaxMessageId(stateCopy);
                let newMessage = {
                    id: maxId + 1,
                    text: stateCopy.newMessageText
                }
                stateCopy.messages.push(newMessage);
                stateCopy.newMessageText = '';
            }
            break;
        case UPDATE_MESSAGE_TEXT:
            stateCopy.newMessageText = action.text;
            break;
        default:
            break;
    }
    return stateCopy;
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