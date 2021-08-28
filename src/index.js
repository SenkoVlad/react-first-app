import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainAppComponent from './App';
import store from './redux/redux-store';

ReactDOM.render(
  <MainAppComponent/>, document.getElementById('root')
);

window.state = store.getState();

reportWebVitals(console.log);