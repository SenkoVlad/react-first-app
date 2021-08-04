import css from "./Message.module.css";

export const Message = (props) => {
    var msgStyle = props.message.id % 2 === 0 ? css.message : css.message + ' ' + css.incomingMsg;
    return <div className={msgStyle}>{props.message.text}</div>;
};
