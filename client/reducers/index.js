import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // we need this for react-router
import app from './app';
// Combine all our reducers together
const rootReducer = combineReducers({  app,routing: routerReducer });

export default rootReducer;