import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers ({
    profilePage : profileReducer,
    dialogsPage : dialogReducer, 
    sidebarPage : sidebarReducer,
    usersPage : usersReducer,
    auth : authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;