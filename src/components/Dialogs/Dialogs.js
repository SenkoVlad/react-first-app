import css from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import React from 'react'

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />)
    let messageElements = props.state.messages.map(elem => <Message message={elem} />)
    
    let sendMessageTextarea = React.createRef();
    let sendMessage = () => {
        let newMessageText = sendMessageTextarea.current.value;
        alert(newMessageText);
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
                        <textarea ref={sendMessageTextarea}></textarea>
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