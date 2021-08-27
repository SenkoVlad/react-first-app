import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers ({
    profilePage : profileReducer,
    dialogsPage : dialogReducer, 
    sidebarPage : sidebarReducer,
    usersPage : usersReducer,
    auth : authReducer,
    app : appReducer,
    form: formReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)
));

window.store = store;

export default store;