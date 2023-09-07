import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {

    let newMessageText = props.dispatch.newMessageText

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        let action = (updateNewMessageTextActionCreator(text));
        props.dispatch(action);
    }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} img={d.img} id={d.id} />);

    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    onChange={onMessageChange}
                    value={newMessageText}>

                </textarea>
                <button onClick={sendMessage}>Send</button>

            </div>
        </div>
    )

}


export default Dialogs;