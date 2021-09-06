import css from "./Message.module.css";

export const Message = (props) => {
    var msgStyle = props.message.userIdOwner === props.userId ? css.message : css.message + ' ' + css.incomingMsg;
    return <div className={msgStyle}>{props.message.text}</div>;
};
