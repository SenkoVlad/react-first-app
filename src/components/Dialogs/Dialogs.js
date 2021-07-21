import css from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import React from 'react'
import {newMessageActionCreator, updateNewMessageTextActionCreater} from './../../redux/state'

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />)
    let messageElements = props.state.messages.map(elem => <Message message={elem} />)

    let inputMessageTextarea = React.createRef();
    
    let sendMessage = () => {
        props.dispatch(newMessageActionCreator());
        inputMessageTextarea.current.value = '';
    }
    let onMessageTextChanched = () => {
        let newMessageText = inputMessageTextarea.current.value;
        props.dispatch(updateNewMessageTextActionCreater(newMessageText));
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogElements}
            </div>
            <div>
                <div className={css.messages}>
                    {messageElements}
                </div>
                <div>
                    <div>
                        <textarea ref={inputMessageTextarea} onChange={onMessageTextChanched}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs