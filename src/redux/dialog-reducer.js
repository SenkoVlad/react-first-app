import { reset } from 'redux-form'
import { dialogApi } from '../Api/Api'
import { ADD_MESSAGE, SET_CURRENT_DIALOG, SET_DIALOGS_TOTAL_COUNT, SET_DIALOGS } from './constants'

let initialState = {
    dialogs: [],
    messages: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How is your it-kamasutra?' },
        { id: 3, text: 'Yo' },
        { id: 4, text: 'Yo' },
        { id: 5, text: 'Yo' }
    ],
    currentUserDialogId: '',
    currentPage: 1,
    totalPageCount: 0,
    pageSize: 5,
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
        case SET_DIALOGS_TOTAL_COUNT: 
            return {
                ...state,
                totalCount : action.count
            }
        case SET_DIALOGS: 
            return {
                ...state,
                dialogs : [...action.dialogs]
            }
        case SET_CURRENT_DIALOG:
            return {
                ...state,
                currentUserDialogId: action.userId
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

export const newMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, text: newMessageText })

const setCurrentDialog = (userId) => ({ type: SET_CURRENT_DIALOG, userId: userId });
const setDialogs = (dialogs) => ({type : SET_DIALOGS, dialogs});
const setDialogsTotalCount = (count) => ({type: SET_DIALOGS_TOTAL_COUNT, count});

export const startDialog = (userId) => async (dispatch) => {
    let response = await dialogApi.startDialog(userId);

    if (response.resultCode === 0) {
        dispatch(setCurrentDialog(response.result));
    }
}

export const sendMessage = (newMessageText) => (dispatch) => {
    dispatch(newMessageActionCreator(newMessageText));
    dispatch(reset('message'));
}
export const getDialogs = (page, count) => async (dispatch) => {
    let response = await dialogApi.getDialogs(page, count);
    if(response.resultCode === 0) {
        dispatch(setDialogs(response.result.items));
        dispatch(setDialogsTotalCount(response.totalCount));
    }
}

export default dialogReducer;