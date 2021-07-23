import React from 'react'
import {newMessageActionCreator, updateNewMessageTextActionCreater} from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let dialogPage = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(newMessageActionCreator());
    }
    let updateMessageText = (newMessageText) => {
        props.store.dispatch(updateNewMessageTextActionCreater(newMessageText));
    }
    return <Dialogs sendMessage={sendMessage} updateMessageText={updateMessageText} dialogPage={dialogPage}/>;
}

export default DialogsContainer