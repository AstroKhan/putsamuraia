import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import App from "../App";
import React from "react";

let state = {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 0},
      {id: 2, message: 'It\'s my not first post', likesCount: 24},
      {id: 3, message: 'blabla', likesCount: 38},
      {id: 4, message: 'What a shout', likesCount: 15},
  ]
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("astrokhan.ru");
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
  });

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("astrokhan.ru");
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("astrokhan.ru");
  });


test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
  });

test('after deleting length should`t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
  });

