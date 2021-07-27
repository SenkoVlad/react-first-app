import React from 'react'
import { STORE_CONTEXT } from '../../redux/constants';
import { newMessageActionCreator, updateNewMessageTextActionCreater } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';

const DialogsContainer = () => {
    return <STORE_CONTEXT.Consumer>
        {
            store => {
                let dialogPage = store.getState().dialogsPage;

                let sendMessage = () => {
                    store.dispatch(newMessageActionCreator());
                }
                let updateMessageText = (newMessageText) => {
                    store.dispatch(updateNewMessageTextActionCreater(newMessageText));
                }
                return <Dialogs sendMessage={sendMessage} updateMessageText={updateMessageText} dialogPage={dialogPage} />;
            }
        }
    </STORE_CONTEXT.Consumer>
}

export default DialogsContainer