import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Redirect } from 'react-router';


const Dialogs = (props) => {

let state = props.dialogsPage;

let messagesElements = state.messages
    .map(m => <Message message={m.message} key={m.id} />);
let newMessagesBody = state.newMessagesBody;

let dialogsElements = state.dialogs
.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);

let onSendMessageClick = () => {
    props.sendMessage()
}
let onNewMessageChange = (e) => {
let body = e.target.value;
props.updateNewMessageBody(body);
}

if (!props.isAuth) return <Redirect to={"/login"} />



return (
<div className={s.dialogs}>
    <div className={s.dialogsItems}>
        { dialogsElements }
    </div>
    <div className={s.messages}>
        <div>{ messagesElements }</div>
        <div>
            <div><textarea value={ newMessagesBody }
            onChange={onNewMessageChange}
            placeholder='Enter your message'></textarea></div>
            <div><button onClick={ onSendMessageClick }>Send</button></div>
        </div>
    </div>      
</div>
)
}

export default Dialogs;