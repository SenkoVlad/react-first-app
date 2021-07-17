import { NavLink } from "react-router-dom";
import css from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = '/dialogs/'+ props.id

    return (
    <div>
        <NavLink to={path} activeClassName={css.activeItem} className={css.dialogItem}>{props.name}</NavLink>
    </div>
    );
}

const Message = (props) => {
    return <div className={css.message}>{props.message}</div>
}

const Dialogs = (props) => {
    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ]
    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ]

    let dialogElements = dialogs.map(elem => <DialogItem name={elem.name} id={elem.id}/>)
    let messageElements = messages.map(elem => <Message message={elem.message}/>)

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