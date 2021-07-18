import css from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />)
    let messageElements = props.state.messages.map(elem => <Message message={elem}/>)

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
               { dialogElements }
            </div>
            <div className={css.messages}>
               { messageElements }
            </div>
        </div>
    );
}

export default Dialogs