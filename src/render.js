import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom'

export let renderTrie = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App dialogsPage={state.dialogsPage} 
             profilePage={state.profilePage} 
             addPost={addPost} 
             updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
} 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
