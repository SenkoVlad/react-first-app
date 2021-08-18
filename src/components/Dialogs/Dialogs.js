import css from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import React from 'react'
import { Field, reduxForm } from "redux-form";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageText' />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
}

const ReduxMessageForm = reduxForm({
    form: "message"
})(MessageForm);


const Dialogs = (props) => {
    let dialogElements = props.dialogPage.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} key={elem.id} />)
    let messageElements = props.dialogPage.messages.map(elem => <Message message={elem} key={elem.id} />)

    let onSubmit = (formData) => {
        props.sendMessage(formData.newMessageText);
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
                <ReduxMessageForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default Dialogs