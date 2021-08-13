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
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText !== '') {
                let newMessage = {
                    id: getMaxMessageId(state) + 1,
                    text: state.newMessageText
                }
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    newMessageText: ''
                }
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        default:
            return {
                ...state
            }
    }
}

const getMaxMessageId = (state) => {
    return state.messages.reduce((max, message) => message.id > max ? message.id : max,
        state.messages[0].id);
}

export const newMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreater = (newText) => ({ type: UPDATE_MESSAGE_TEXT, text: newText })

export default dialogReducer;