import css from "./Dialogs.module.css";

const Dialogs = (props) => {
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
    // let dialogsElements =  dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    // let messagesElements = messages.map( m => <Message message={m.message}/> );

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div>Victor</div>
                <div>Vlad</div>
                <div>Ivan</div>
                <div>Igor</div>
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                { dialogsElements } */}
            </div>
            <div className={css.messages}>
                <div className={css.message}>Message 1</div>
                <div className={css.message}>Message 2</div>
                <div className={css.message}>Message 3</div>
                <div className={css.message}>Message 4</div>
                {/* <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                { messagesElements } */}
            </div>
        </div>
    );
}

export default Dialogs