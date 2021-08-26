import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store';
import App from './App';
import { Provider } from 'react-redux'

// setInterval(() => {
//   store.dispatch({type : "FAKE"});
// }, 1000);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

window.state = store.getState();

reportWebVitals(console.log);