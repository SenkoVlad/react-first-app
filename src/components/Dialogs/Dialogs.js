import css from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import React from 'react'

const Dialogs = (props) => {
    let dialogElements = props.dialogPage.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} key={elem.id} />)
    let messageElements = props.dialogPage.messages.map(elem => <Message message={elem}  key={elem.id}/>)

    let inputMessageTextarea = React.createRef();
    
    let sendMessage = () => {
        props.sendMessage();
        inputMessageTextarea.current.value = '';
    }
    let onMessageTextChanched = () => {
        let newMessageText = inputMessageTextarea.current.value;
        props.updateMessageText(newMessageText);
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
                        <textarea ref={inputMessageTextarea} onChange={onMessageTextChanched} value={props.newMessageText}></textarea>
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