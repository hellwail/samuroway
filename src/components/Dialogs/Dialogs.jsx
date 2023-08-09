import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


let dialogs = [
    { id: 1, name: 'Taras' },
    { id: 2, name: 'Sveta' },
    { id: 3, name: 'Andrey' },
    { id: 4, name: 'Lena' },
    { id: 5, name: 'Vanya' }
]

let messages = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Are you free today?' },
    { id: 4, message: '1x1?' }
]

let dialogsElements = dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);

let messagesElements = messages
    .map(m => <Message message={m.message} id={m.id} />);

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;