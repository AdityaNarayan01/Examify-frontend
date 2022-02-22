import { combineReducers } from 'redux';
import studentAuth from './studentReducer/studentAuth';
import studentProfile from './studentReducer/studentProfile';
import error from './error';
import branch from './branch';

export default combineReducers({
    studentAuth,
    studentProfile,
    error,
    branch
});