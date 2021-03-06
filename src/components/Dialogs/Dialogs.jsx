import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import AddMessageForm from './AddMessageForm/AddMessageForm';


const Dialogs = (props) => {

let state = props.dialogsPage;

let messagesElements = state.messages
    .map(m => <Message message={m.message} key={m.id} />);
let newMessagesBody = state.newMessagesBody;

let dialogsElements = state.dialogs
.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);


let addNewMessage = (values) => {
props.sendMessage(values.newMessagesBody);
}

if (!props.isAuth) return <Redirect to={"/login"} />



return (
<div className={s.dialogs}>
    <div className={s.dialogsItems}>
        { dialogsElements }
    </div>
    <div className={s.messages}>
        <div>{ messagesElements }</div>
        
    </div>
        <AddMessageForm onSubmit={addNewMessage} />
</div>
)
}


export default Dialogs;