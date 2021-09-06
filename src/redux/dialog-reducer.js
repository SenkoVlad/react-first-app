import { reset } from 'redux-form'
import { dialogApi } from '../Api/Api'
import { ADD_MESSAGE,  SET_DIALOGS_TOTAL_COUNT, SET_DIALOGS, SET_CURRENT_DIALOG_ID, SET_MESSAGES } from './constants'

let initialState = {
    dialogs: [],
    messages: [],
    currentUserDialogId: '',
    currentPage: 1,
    totalPageCount: 0,
    pageSize: 5,
    currentMessagePage: 1,
    messagesPageSize: 10
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        case SET_DIALOGS_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            }
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: [...action.dialogs]
            }
        case SET_CURRENT_DIALOG_ID:
            return {
                ...state,
                currentUserDialogId : action.dialogId
            }
        case SET_MESSAGES: 
            return {
                ...state,
                messages : [...action.messages]
            }
        default:
            return {
                ...state
            }
    }
}

const setDialogs = (dialogs) => ({ type: SET_DIALOGS, dialogs });
const setDialogsTotalCount = (count) => ({ type: SET_DIALOGS_TOTAL_COUNT, count });
const setCurrentDialogId = (dialogId) => ({ type: SET_CURRENT_DIALOG_ID, dialogId });
const setMessages = (messages) => ({ type: SET_MESSAGES, messages});
const addMessage = (message) => ({ type: ADD_MESSAGE, message })

export const startDialog = (userId, page, count) => async (dispatch) => {
    let response = await dialogApi.startDialog(userId);
    if (response.resultCode === 0) {
        dispatch(chooseCurrentDialog(response.result, page, count));
    }
}

export const sendMessage = (newMessageText, dialogId) => async (dispatch) => {
    let response = await dialogApi.sendMessage(newMessageText, dialogId);
    if(response.resultCode === 0) {
        dispatch(addMessage(response.result));
        dispatch(reset('message'));
    }
}
export const getDialogs = (page, count) => async (dispatch) => {
    let response = await dialogApi.getDialogs(page, count);
    if (response.resultCode === 0) {
        dispatch(setDialogs(response.result.items));
        dispatch(setDialogsTotalCount(response.totalCount));
    }
}
export const chooseCurrentDialog = (dialogId, page, count) => async (dispatch) => {
    let response = await dialogApi.getMessages(dialogId, page, count);
    if (response.resultCode === 0) {
        dispatch(setCurrentDialogId(response.result.dialogId));
        dispatch(setMessages(response.result.items));
    }
}

export default dialogReducer;