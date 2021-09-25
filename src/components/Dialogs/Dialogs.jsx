import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {

let state = props.dialogsPage;

let messagesElements = state.messages
    .map(m => <Message message={m.message} />);
let newMessagesBody = state.newMessagesBody;

let dialogsElements = state.dialogs
.map(d => <DialogItem name={d.name} id={d.id} />);

let onSendMessageClick = () => {
    props.sendMessage()
}
let onNewMessageChange = (e) => {
let body = e.target.value;
props.updateNewMessageBody(body);
}

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