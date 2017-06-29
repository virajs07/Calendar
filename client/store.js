import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import {defaultState} from './defaultState';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise';

const loggerMiddleware = createLogger()


// REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// CREATING STORE WITH REDUCER,INITIALSTATE and MIDDLEWARE
const store = createStore(rootReducer,defaultState,composeEnhancers(applyMiddleware(thunk,loggerMiddleware,promise)));

export default store;