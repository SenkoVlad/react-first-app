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

// const Dialogs = (props) => {
//     let dialogElements = props.dialogPage.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} key={elem.id} />)
//     let messageElements = props.dialogPage.messages.map(elem => <Message message={elem} key={elem.id} />)

//     let onSubmit = (formData) => {
//         props.sendMessage(formData.newMessageText);
//     }

//     return (
//         <div className={css.dialogs}>
//             <div className={css.dialogsItems}>
//                 {dialogElements}
//             </div>
//             <div>
//                 <div className={css.messages}>
//                     {messageElements}
//                 </div>
//                 <ReduxMessageForm onSubmit={onSubmit} />
//             </div>
//         </div>
//     );
// }

class Dialogs extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props != nextProps || this.state != nextState;
    }

    render() {
        let messageElements = this.props.messages.map(elem => <Message message={elem} key={elem.id} />)
        let dialogElements = this.props.dialogs.map(elem => <>
            <DialogItem name={elem.name} id={elem.id} key={elem.id} />
            <hr/>
        </>
        )

        let onSubmit = (formData) => {
            this.props.sendMessage(formData.newMessageText);
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
        )
    }
}


export default Dialogs