import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

/* const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'; */


let store = {
_callSubscriber () {
    console.log('state changed');
},
_state: {
      profilePage: {
          posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 0},
            {id: 2, message: 'It\'s my not first post', likesCount: 24},
            {id: 3, message: 'blabla', likesCount: 38},
            {id: 4, message: 'What a shout', likesCount: 15},
        ],
        newPostText: 'Astrokhan.ru'
    },
      dialogsPage: {
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
            ],
            newMessageBody: ""
    },
      sidebar: {} 
  },
getState() {
      return this._state;
  },
subscribe (observer) {
    this._callSubscriber = observer;
},

dispatch (action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
}
};


export default store;
window.store = store;
