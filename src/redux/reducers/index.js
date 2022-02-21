import { combineReducers } from 'redux';
import studentAuth from './studentReducer/studentAuth';
import studentProfile from './studentReducer/studentProfile';

export default combineReducers({
    studentAuth,
    studentProfile,
});