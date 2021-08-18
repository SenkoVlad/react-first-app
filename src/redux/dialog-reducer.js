import { ADD_MESSAGE } from './constants'

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
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (action.text !== '') {
                let newMessage = {
                    id: getMaxMessageId(state) + 1,
                    text: action.text
                }
                return {
                    ...state,
                    messages: [...state.messages, newMessage]
                }
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

export const newMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, text: newMessageText})

export default dialogReducer;