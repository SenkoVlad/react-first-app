import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store';
import { STORE_CONTEXT } from './redux/constants';

let renderTrie = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <STORE_CONTEXT.Provider value={store}>
          <App />
        </STORE_CONTEXT.Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderTrie();

store.subscribe(() => {
  renderTrie();
});

reportWebVitals(console.log);