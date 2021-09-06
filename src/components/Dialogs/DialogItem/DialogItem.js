import { NavLink } from "react-router-dom";
import css from "./DialogsItem.module.css";

export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    const chooseCurrentDialog = (dialogId) => {
        props.chooseCurrentDialog(dialogId, props.currentMessagePage, props.messagesPageSize);
    }

    return (
        <div>
            <NavLink to={path}
                onClick={() => chooseCurrentDialog(props.id)}
                activeClassName={css.activeItem}
                className={props.id === props.currentUserDialogId ? css.activeItem : css.dialogItem}>{props.name}
            </NavLink>
        </div>
    );
};
