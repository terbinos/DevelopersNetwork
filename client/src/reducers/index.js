import { combineReducers } from 'redux';
import authReducers from './authReducer'; 
import errorReducers from './errorReducer';
import profileReducers from './profileReducer'; 
import postReducer from './postReducer'; 

export default combineReducers({
    auth: authReducers,
    errors: errorReducers,
    profile: profileReducers,
    post:postReducer
});

