
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
dialogs: [
{id: 1, name: 'Dimich'},
{id: 2, name: 'Andrey'},
{id: 3, name: 'Sveta'},
{id: 4, name: 'Nikolai'},
{id: 5, name: 'Sasha'},
{id: 6, name: 'Valera'},
],
messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What are you doing?'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]
};

const dialogsReducer = (state = initialState, action) => {

switch(action.type) {
    
    case SEND_MESSAGE:
        let body = action.newMessageBody;
        return {...state,
            messages: [...state.messages, {id: 6, message: body}]
        };
    default: return state;
}  
}

export const sendMessageCreator = (newMessagesBody) => ({type: SEND_MESSAGE, newMessagesBody});

export default dialogsReducer;