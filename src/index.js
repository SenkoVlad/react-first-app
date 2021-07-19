import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom'
import state, {renderSubscribe} from './redux/state'

let renderTrie = (state) => {
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

renderSubscribe(renderTrie);

renderTrie(state);

reportWebVitals(console.log);
