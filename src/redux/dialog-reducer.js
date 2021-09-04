import { dialogApi } from '../Api/Api'
import { ADD_MESSAGE, SER_CURRENT_DIALOG } from './constants'

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
    currentUserDialogId : ''
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
        case SER_CURRENT_DIALOG: 
            return {
                ...state,
                currentUserDialogId : action.userId
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

const setCurrentDialog = (userId) => ({type: SER_CURRENT_DIALOG, userId : userId});

export const startDialog = (userId) => async (dispatch) => {
    let response = await dialogApi.startDialog(userId);

    if(response.resultCode === 0) {
        dispatch(setCurrentDialog(response.result));
    }
}

export default dialogReducer;