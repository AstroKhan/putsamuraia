let rerenderEntireTree = () => {
    console.log('state changed');
}


  let state = {
      profilePage: {
          posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 0},
            {id: 2, message: 'It\'s my not first post', likesCount: 24},
            {id: 3, message: 'blabla', likesCount: 38},
        ],
        newPostText: 'Astrokhan.ru'
    },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What are you doing?'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ], 
                dialogs: [
            {id: 1, name: 'Dimich'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Nikolai'},
            {id: 5, name: 'Sasha'},
            {id: 6, name: 'Valera'},
            ]
      },
      sidebar: {} 
  };

  window.state = state;

  export const addPost = () => {
      let newPost = {
          id: 5,
          message: state.profilePage.newPostText,
          likesCount: 0,
      };

      state.profilePage.posts.push(newPost);
      state.profilePage.newPostText = '';
      rerenderEntireTree(state);
  };

  export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

  export default state;