import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import state, { subscribe } from './redux/state';
import { addPost, updateNewPostText } from './redux/state';
import { BrowserRouter, Route } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  };

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
