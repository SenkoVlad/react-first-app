import css from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import React from 'react'
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormControls";
import { required } from "../Common/Utils/Validators";

const MessageForm = (props) => {
    return (
        <div>
            <div>
                <div>
                    <form onSubmit={props.handleSubmit}>
                        <div>
                            <Field component={Input} name='newMessageText' validate={[required]} />
                        </div>
                        <div>
                            <button>Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const ReduxMessageForm = reduxForm({
    form: "message"
})(MessageForm);

class Dialogs extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props != nextProps || this.state != nextState;
    }

    render() {
        let messageElements = this.props.messages.map(elem =>
            <div>
                <Message message={elem} key={elem.id}
                    userId={this.props.userId} />
                <hr />
            </div>);
        let dialogElements = this.props.dialogs.map(elem =>
            <div key={elem.id}>
                <DialogItem id={elem.id} key={elem.id} name={elem.name}
                    chooseCurrentDialog={this.props.chooseCurrentDialog}
                    currentMessagePage={this.props.currentMessagePage}
                    messagesPageSize={this.props.messagesPageSize}
                    currentUserDialogId={this.props.currentUserDialogId}
                />
                <hr />
            </div>
        )

        let onSubmit = (formData) => {
            this.props.sendMessage(formData.newMessageText, this.props.currentUserDialogId);
        }
        return (
            <div className={css.dialogs}>
                <div className={css.dialogsItems}>
                    {dialogElements}
                </div>
                <div>
                    {
                        this.props.currentUserDialogId &&
                        <div>
                            <div>
                                <div className={css.messages}>
                                    {messageElements}
                                </div>
                            </div>
                            <ReduxMessageForm onSubmit={onSubmit} />
                        </div>
                    }
                </div>
            </div>
        )
    }
}


export default Dialogs