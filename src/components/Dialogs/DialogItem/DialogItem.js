import { NavLink } from "react-router-dom";
import css from "./DialogsItem.module.css";

export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div>
            <NavLink to={path} activeClassName={css.activeItem} className={css.dialogItem}>{props.name}</NavLink>
        </div>
    );
};
