import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostText } from './redux/store';
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

reportWebVitals(console.log);
