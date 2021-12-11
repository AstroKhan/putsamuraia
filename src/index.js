import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';

/* let h1 = document.createElement("h1")
h1.innerHTML = "Hello"
document.querySelector("body").appendChild(h1) */

  ReactDOM.render (
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
  );
// 89 урок тесты, вывести обертки апп в апп.джс

//ServiceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
