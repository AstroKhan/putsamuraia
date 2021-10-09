
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
          {id: 1, message: 'Hi, how are you?', likesCount: 0},
          {id: 2, message: 'It\'s my not first post', likesCount: 24},
          {id: 3, message: 'blabla', likesCount: 38},
          {id: 4, message: 'What a shout', likesCount: 15},
      ],
      newPostText: 'Astrokhan.ru'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };         
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default: return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT, newText: text
  });

export default profileReducer;